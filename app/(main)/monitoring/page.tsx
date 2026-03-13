
import { EmailDetail } from '@/components/email-details';
import { RunAgentButton } from '@/components/run-agent-button';
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getAgentRuns } from "@/db/queries";

import { getOrCreateUser } from "@/db/queries";
import { auth, currentUser } from "@clerk/nextjs/server";
import {
  AlertCircleIcon,
  FileTextIcon,
  ListTodoIcon,
  MailIcon,
  InboxIcon,
} from "lucide-react";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function MonitoringPage() {
  const { userId: clerkId } = await auth();
  if (!clerkId) {
    redirect("/sign-in");
  }
  const clerkUser = await currentUser();
  const email = clerkUser?.emailAddresses[0].emailAddress ?? "";
  const name = clerkUser?.fullName ?? "";
  const user = await getOrCreateUser(clerkId, email, name);

  const runs = await getAgentRuns(user.id);

  const processedEmals = [];
  for (const run of runs) {
    const log = run.actionsLog ?? [];
    for (const entry of log) {
      if (entry.emailId) {
        processedEmals.push({
          ...entry,
          processedAt: run.startedAt,
        });
      }
    }
  }

  const highPriority = processedEmals.filter(
    (email) => email.priority === "high",
  ).length;
  const totalTasks = processedEmals.reduce(
    (acc, email) => acc + (email.tasksCreated ?? 0),
    0,
  );
  const totalDrafts = processedEmals.filter(
    (email) => email.draftCreated,
  ).length;
  const totalProcessed = processedEmals.length;

  return (
    <div className="page-wrapper">
      <div>
        <h1 className="page-title">Monitoring</h1>
        <p className="page-description">
          Emails processed by your AI agent with Claude&apos;s analysis.
        </p>
      </div>
      <div className="stats-grid-4">
        {[
          { label: "Processed", value: totalProcessed, icon: MailIcon },
          {
            label: "High Priority",
            value: highPriority,
            icon: AlertCircleIcon,
          },
          { label: "Drafts Created", value: totalDrafts, icon: FileTextIcon },
          { label: "Tasks Extracted", value: totalTasks, icon: ListTodoIcon },
        ].map(({ label, value, icon: Icon }) => (
          <Card key={label} className="card-hover-fx glass-panel">
            <CardHeader className="stat-card-header">
              <CardTitle className="text-sm font-medium">{label}</CardTitle>
              <Icon className="stat-icon" />
            </CardHeader>
            <CardContent>
              <div className="stat-value">{value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
      {processedEmals.length === 0 ? (
        <Card className="glass-panel p-12 text-center">
          <InboxIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
          <h3 className="text-lg font-medium text-foreground">No emails processed yet</h3>
          <p className="text-muted-foreground mt-2 max-w-md mx-auto">
            Connect your Gmail account and run your AI agent to start analyzing your emails.
          </p>
          <div className="mt-6">
            <RunAgentButton />
          </div>
        </Card>
      ) : (
        <div className="space-y-3">
          {processedEmals.map((email, idx) => (
            <EmailDetail key={`${email.emailId}-${idx}`} email={email} />
          ))}
        </div>
      )}
    </div>
  );
}