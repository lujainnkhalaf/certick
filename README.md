# Certick — Premium Dark Edition

A Next.js 15 / React 19 / TypeScript / Tailwind 4 frontend for the existing SkillProof Supabase schema.

## Run

1. Copy `.env.local.example` to `.env.local` and enter your **existing** Supabase project URL and **publishable** key. Never use a service-role/secret key in the frontend.
2. `npm install`
3. `npm run dev`
4. Visit http://localhost:3000 and sign in with one of your existing Supabase Auth test users.

## Pages

- `/login` — Supabase email/password login and role-based redirect
- `/learner` — portfolio cards, evidence upload, corrections, consent sharing, appeals
- `/issuer` — review, issuance, appeals, renewal and revocation
- `/verifier` — consent verification and check history
- `/admin` — issuer/competency/template approval via existing RPCs
- `/auditor` — read-only audit trail

## Backend compatibility

This version preserves the original table names, RPC function names and the private `skillproof-evidence` storage bucket. It does not modify or reset the database. User roles come from `profiles`. This is an academic prototype; do not use real personal records.

**Important:** Test all five roles using real Supabase Auth sessions, especially storage upload/download policies, corrections, admin RPC permissions and consent expiry. The existing backend does not yet offer a verifier directory, so sharing requires the verifier account UUID. The private bucket policies must be verified independently.
