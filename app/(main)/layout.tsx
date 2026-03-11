import { auth, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { HomeIcon, MailIcon, SettingsIcon, ZapIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { UserButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BILLING_PLANS } from '@/lib/constants';

const layout = async ({children}: {children: React.ReactNode}) => {

    const {userId, has} = await auth();

    if (!userId) {
        return redirect('/sign-in');
    }

    const clerkUser = await currentUser();

    if (!clerkUser) {
        return redirect('/sign-in');
    }
    
    const isPaidUser = has({plan: BILLING_PLANS.PRO});

    const navItems = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: HomeIcon,
    },
    {
      label: "Monitoring",
      href: "/monitoring",
      icon: MailIcon,
    },
    {
      label: "Settings",
      href: "/settings",
      icon: SettingsIcon,
    },
  ];
    

  return (
    <div className="layout-wrapper relative min-h-screen">
      {/* Aurora Background Orbs - Reduced opacity for dashboard clarity */}
      <div className="aurora-bg">
        <div className="aurora-blob aurora-blob-1 opacity-20" />
        <div className="aurora-blob aurora-blob-2 opacity-20" />
        <div className="aurora-blob aurora-blob-3 opacity-20" />
      </div>

      <aside className="sidebar-container relative z-10 glass-panel border-r border-white/10 shadow-[4px_0_24px_rgba(0,0,0,0.5)]">
        <div className="sidebar-inner">
          <div className="logo-container">
            <Link href="/">
              <span className="logo-text">FlowAi</span>
            </Link>
          </div>
          <nav className="sidebar-nav">
            {navItems.map((item) => (
              <Link href={item.href} key={item.href}>
                <Button variant="ghost" className="sidebar-nav-button">
                  <item.icon className="sidebar-icon" />
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>
          {!isPaidUser && (
            <div className="sidebar-section">
              <div className="upgrade-card">
                <div className="upgrade-card-header">
                  <ZapIcon className="sidebar-icon" />
                  <span className="font-semibold">Upgrade to Pro</span>
                </div>
                <p className="upgrade-card-text">Unlock autonomous AI agents</p>
                <Button variant="secondary" className="w-full" >
                  <Link href="/#pricing">Upgrade Now</Link>
                </Button>
              </div>
            </div>
          )}

          <div className="sidebar-section">
            <div className="user-profile">
              <UserButton />
              {isPaidUser && <Badge>Pro</Badge>}
            </div>
          </div>
        </div>
      </aside>

      <main className="main-content">
        <div className="main-content-inner">{children}</div>
      </main>
    </div>
  )
}

export default layout