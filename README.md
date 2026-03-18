# AutoPilot CRM — AI Sales Agent (Frontend)

This repository contains the **frontend application** for AutoPilot CRM, an AI‑powered sales automation platform that deploys agents to handle top‑of‑funnel outreach on behalf of sales reps.

The app is a **Next.js 14 + React 18** project with Tailwind CSS and shadcn-style UI components, structured under the `frontend/` directory.

---

## Tech stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **UI**:
  - Tailwind CSS
  - Custom shadcn-style primitives (`button`, `card`, `input`, `textarea`, `select`, `tabs`, `dialog`, `table`, `badge`)
- **Auth & integrations (frontend side)**:
  - Entry points for Auth0 Universal Login and SSO (Google / Microsoft)
  - Placeholder routes for OAuth flows:
    - `/auth/google` (Gmail)
    - `/auth/hubspot`
    - `/auth/linkedin`
    - `/auth/calendly`

Backend, Auth0 configuration, Token Vault, LangGraph agents, and Supabase are expected to live in separate services (not in this repo yet).

---

## Project structure

At the repo root:

- `frontend/` — Next.js frontend app
- `.gitignore` — ignores build artifacts and `node_modules`

Key folders inside `frontend/`:

- `app/`
  - `page.tsx` — login / landing screen
  - `dashboard/page.tsx` — rep workspace (overview, campaigns, leads, approvals, activity log)
  - `onboarding/page.tsx` — 4‑step onboarding wizard (role, goals, tools, preferences)
  - `integrations/page.tsx` — integrations / Token Vault connection UI
  - `layout.tsx` — global layout + top navigation
  - `globals.css` — Tailwind base + global styles
- `components/ui/` — shared UI primitives (button, card, dialog, etc.)
- `lib/utils.ts` — small `cn` helper for className composition
- `next.config.mjs`, `tailwind.config.ts`, `postcss.config.mjs`, `tsconfig.json` — tooling and framework configuration

---

## Getting started (local development)

From the repo root:

```bash
cd frontend
npm install
npm run dev
```

Then open `http://localhost:3000` in your browser.

---

## Deployed app (Vercel)

When deploying to Vercel:

- Set the **Project Root** to `frontend/`.
- Use the default build command and output:
  - Build command: `npm run build`
  - Output directory: `.next`

No additional environment variables are required yet; Auth0 and backend URLs will be wired in future phases.

---

## Core frontend flows

### 1. Auth / landing

- Explains the value prop: AI agent acts as the rep using their real Gmail / LinkedIn / CRM, secured by Auth0 Token Vault.
- Buttons:
  - **Continue with Google**
  - **Continue with Microsoft**
- Both currently redirect to `/dashboard` (hook these up to Auth0/SSO later).

### 2. Onboarding wizard

`/onboarding`

- **Role**: Sales Rep / SDR / Sales Manager / Founder / Other
- **Goals**: multi-select (book more meetings, respond faster, etc.) + free‑text notes
- **Tools**: visual connection cards for Gmail, HubSpot, LinkedIn, Calendly that navigate toward auth / integrations flows
- **Preferences**: tone, email length, and ICP/product notes

Finishing the wizard routes the user to the **Integrations** page.

### 3. Integrations (Token Vault UX)

`/integrations`

- Cards for:
  - Gmail
  - HubSpot
  - LinkedIn
  - Calendly
- Each card shows:
  - Description
  - Connection status (**Connected / Not connected**)
  - Primary channel hint for Gmail
  - Buttons:
    - **Connect / Reconnect** → navigates to `/auth/{provider}` placeholder
    - **Disconnect** (when connected) → toggles local state

This is the frontend shell for Auth0 Token Vault integration.

### 4. Rep dashboard

`/dashboard`

Tabs:

- **Overview**
  - KPI tiles (running campaigns, meetings booked today, items awaiting approval)
  - “Today’s focus” checklist for AI‑assisted tasks
  - Pipeline snapshot
- **Campaigns**
  - Campaign table with status, channel, owner, created, scheduled
  - “New campaign” side panel with name, channel, status, schedule, AI brief
- **Leads**
  - Leads table with name/email, company, title, stage, score, last activity
  - Search input for filtering (frontend-only for now)
- **Approvals**
  - Approval queue table with Approve + Edit actions
  - Edit opens a dialog with subject and body fields, mimicking human‑in‑the‑loop approval before send
- **Activity log**
  - Scrollable audit feed (actor, action, target, channel, timestamp, meta)

Tabs are linkable via `?tab=` query (`/dashboard?tab=approvals`, etc.), useful for deep links from Slack or notifications.

---

## Next steps (backend & integrations)

This frontend is designed to sit in front of:

- **Auth0 Universal Login** for SSO + MFA
- **Auth0 Token Vault** for Gmail / HubSpot / LinkedIn / Calendly OAuth tokens
- **Node.js / Express** backend for:
  - Handling `/auth/*` routes
  - Exposing token connection status + revocation endpoints
  - Orchestrating AI agents
- **LangGraph** agents for research, copywriting, sending, RAG, and proposals
- **Supabase (PostgreSQL)** for user/session/audit log data

You can safely deploy the frontend today and progressively connect it to these backend services as they are implemented.

