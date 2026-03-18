"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  const handleContinueWithGoogle = () => {
    window.location.href = "/dashboard";
  };

  const handleContinueWithMicrosoft = () => {
    window.location.href = "/dashboard";
  };

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-8">
      <Card className="glass-surface max-w-xl w-full rounded-3xl p-6 md:p-8">
        <CardHeader className="space-y-3 pb-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
            AutoPilot CRM
          </p>
          <CardTitle className="text-3xl font-semibold">
            Sign in to your{" "}
            <span className="text-cyan-300">AI Sales Agent</span>
          </CardTitle>
          <p className="text-sm text-slate-300">
            Let an AI agent handle your top-of-funnel outreach using{" "}
            <span className="font-semibold">your real Gmail, LinkedIn, and CRM</span>,
            secured by Auth0 Token Vault.
          </p>
          <div className="grid gap-2 text-[11px] text-slate-300 md:grid-cols-3">
            <div>
              <p className="font-semibold text-slate-100">Acts as you</p>
              <p>Emails are sent from your real inbox, not a bot domain.</p>
            </div>
            <div>
              <p className="font-semibold text-slate-100">You stay in control</p>
              <p>High-stakes actions pause for your approval before sending.</p>
            </div>
            <div>
              <p className="font-semibold text-slate-100">Enterprise safe</p>
              <p>Auth0 manages all tokens — nothing sensitive lives here.</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6 pt-0 pb-5">
          <div className="space-y-3">
            <Button
              onClick={handleContinueWithGoogle}
              className="w-full h-10 text-sm bg-white text-slate-900 hover:bg-slate-100"
            >
              Continue with Google
            </Button>
            <Button
              onClick={handleContinueWithMicrosoft}
              className="w-full h-10 text-sm bg-slate-900/60 text-white border border-white/10 hover:bg-slate-900"
            >
              Continue with Microsoft
            </Button>
            <p className="text-[11px] text-center text-slate-400">
              Or sign in using your company SSO provider via Auth0.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-[11px] text-slate-400">
            <span>v0.1 · 20-day sprint</span>
            <Link
              href="/onboarding"
              className="text-cyan-300 hover:text-cyan-200 underline-offset-4 hover:underline"
            >
              Configure your agent first
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}

