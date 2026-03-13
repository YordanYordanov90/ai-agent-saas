"use client";
import { useTransition } from "react";
import { Button } from "../ui/button";
import { Loader2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function RunAgentButton() {
  const [isPending, startTransition] = useTransition();

  const router = useRouter();
  const handleRunAgent = async () => {
    startTransition(async () => {
      try {
        const response = await fetch("/api/agents/run", {
          method: "POST",
        });

        const result = await response.json();
        
        if (!response.ok) {
          toast.error(result.error || "Agent failed to run", {
            description: "Please try again or check your settings.",
          });
          return;
        }

        toast.success("Agent completed successfully!", {
          description: result.summary || "Your emails have been processed.",
        });

        router.refresh();
      } catch (error) {
        toast.error("Something went wrong", {
          description: "Please try again later.",
        });
      }
    });
  };
  return (
    <Button
      className="w-full premium-glow-btn"
      variant={"default"}
      size="lg"
      onClick={handleRunAgent}
      disabled={isPending}
    >
      {isPending ? (
        <>
          <Loader2Icon className="spinner-icon" />
          Running Agent...
        </>
      ) : (
        "Run Agent Now"
      )}
    </Button>
  );
}