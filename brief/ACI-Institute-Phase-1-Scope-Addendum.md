# ACI Institute: Phase 1 Scope Addendum

**Property:** www.aci-institute.org
**Companion to:** the ACI Institute website and platform design brief (v0.3) and the infrastructure brief
**Date:** 21 July 2026
**Purpose:** fix what ships at launch, so building can start without re-opening the design brief

---

## 0. The decision this records

The design brief specifies a stack with server-side rendering, a headless CMS, managed authentication, and Stripe subscriptions. Launch hosting is GitHub Pages, which serves static files and runs no server code.

The resolution is sequencing, not compromise. Of the Phase 1 features named in v0.3 Section 9.3, only three require a server: accounts, saved Gauge results, and managed subscriptions. The brief's own commercial logic already defers all three. Section 1.3 launches free or low-cost and prices in after pilot feedback. Section 9.3 sells advisory and memberships before building the marketplace. Honoring that sequence removes the conflict.

**Phase 1 is therefore the public site with a working ACI Gauge, no login.** The Gauge's job is to produce a reading and capture an email, and neither needs an account.

**Scope update, 21 July 2026, by author decision.** Education (v0.3 Section 4.6) and Advisory (4.7) are deferred out of Phase 1. Community (4.4) adds author profiles for the two authors. The Phase 1 public site is Home, Mission, Frameworks and Scenarios, Research, Community, the Book, Join, and the ACI Gauge. The tables and build order below reflect this.

This addendum does not revise v0.3. Where the two differ, v0.3 remains the source of truth for design, content, and framework language, and this document governs launch scope only.

---

## 1. Ship or defer, by feature

Referenced to v0.3 section numbers.

| Feature | v0.3 | Phase 1 | How it is built |
|---|---|---|---|
| Home | 4.1 | Ship | Static |
| Mission | 4.2 | Ship | Static |
| Frameworks and Scenarios | 4.3 | Ship | Static, figures as images with live text captions |
| Community | 4.4 | Ship | Static, author profiles (Joseph, Yilin), embedded scheduler, hosted form |
| Research hub with filters | 4.5 | Ship | JSON feed rendered client-side, the Sino-Signals pattern |
| Education overview | 4.6 | Defer | Out of Phase 1 by author decision, 21 Jul 2026 |
| Advisory | 4.7 | Defer | Out of Phase 1 by author decision, 21 Jul 2026 |
| The Book | 4.8 | Ship | Static, with schema.org Book markup |
| Membership and Join | 4.8 | Ship, modified | Tier comparison and a waitlist capture. No checkout. |
| ACI Gauge, Parts A and B | 6.1 to 6.5 | Ship | Question bank in JSON, scoring in JavaScript |
| Gauge result screen and field diagram | 6.7 | Ship | D3 chord layout in the browser, with the labelled-table fallback |
| Gauge result by email | 6.7 | Ship | Hosted form service, sent on consent |
| Bilingual EN and CN | 3.7 | Ship | Message catalogs from the first file, per Section 3 below |
| Dæmon intake export | 6.6 | Ship, partial | Gauge emits the intake object and offers it as a download. The studio that consumes it is Phase 2. |
| Accounts and sign-in | 9.1 | Defer | Needs a server |
| My Gauge, saved and re-taken | 6.7 | Defer | Needs a server. Re-taking still works, results are not stored. |
| Stripe subscriptions | 9.1 | Defer | Needs a server. See Section 2 if money must move sooner. |
| Headless CMS | 9.1 | Defer | JSON files serve this purpose while the editors are Joseph and Yilin |
| Creative Community, Marketplace, Companions, Tech Advisor, Council | 8.2 to 8.6 | Defer | Already Phase 2 and 3 in v0.3 |

Everything marked Ship runs on GitHub Pages with no build step.

---

## 2. Substitutes for the deferred server

Four hosted services cover the gaps at launch. Each is a drop-in that a static page can embed or post to.

- **Booking.** Google Calendar appointment scheduling, embedded on Advisory and Community. Already settled in v0.3 Section 9.1. No change.
- **Forms.** One hosted form service for the advisory inquiry, the speaking request, the research submission, the Gauge email capture, and the Join waitlist. Formspree or Tally both work by posting from a static page. Choose one and use it everywhere so submissions land in one place.
- **Email list.** The research digest and Gauge follow-up need a sending platform. v0.3 leaves this open. Whichever is chosen must be able to send to Chinese recipients reliably, which is the constraint that should decide it.
- **Payment, only if needed before launch.** Stripe Payment Links are hosted by Stripe and can be linked from a static page. This takes money for a coaching package or a founders membership without any server. It does not manage subscriptions, entitlements, or renewals, so treat it as a stopgap for advisory sales rather than as membership infrastructure.

**On the Join page.** Show the three tiers and what each unlocks, as v0.3 Section 4.8 specifies, then capture a waitlist email instead of a signup. This is honest, it matches the free-during-pilot stance, and it builds the list that makes paid launch worth doing.

---

## 3. Conventions that make the later migration mechanical

These three rules cost nothing now and are the difference between a move to Vercel taking a week or taking a rebuild. Apply them from the first file.

1. **Content lives in JSON, never in markup.** Research items, program cards, endorsers, tier definitions, and the entire Gauge question bank are data files. Pages read them. This is the pattern already working in `sino-signals/`, where `index.html` fetches `signals-data.json` and renders it.

2. **All copy lives in an EN and CN message object, addressed by key.** No user-facing text is typed directly into HTML, and no text is baked into images. This is what makes v0.3 Section 3.7's bilingual-from-launch requirement affordable, and it is also what a later internationalization framework expects to consume.

3. **One folder per route, named as the future URL.** `/mission/`, `/advisory/`, `/gauge/`, `/research/`. The folder structure becomes the framework route structure unchanged.

Add a fourth, for sanity: keep the four capability colors, the framework terms, and the type scale in one CSS custom-property block. v0.3 Section 3.1 fixes those values, and they should exist in exactly one place.

---

## 4. Build order

Sequenced so that revenue-capable pages are live before the largest build begins.

**Step 0. Infrastructure.** Repository, `CNAME`, `.nojekyll`, Pages enabled, DNS configured. Per the infrastructure brief, Section 4. DNS propagates while Step 1 proceeds.

**Step 1. Shell and design system.** The CSS custom properties from v0.3 Section 3.1 and 3.2, the header with the language switcher and the Take the Gauge button, the footer, and the empty message catalogs for EN and CN. Nothing renders yet. Everything after this is faster.

**Step 2. Home and Mission.** The two pages that make the site credible. v0.3 Sections 4.1 and 4.2.

**Step 3. Community.** Author profiles for the two authors, Joseph's profile linking to josephpress.com, plus the scheduler embed for his speaking and advisory inquiries and a hosted contact form. v0.3 Section 4.4. Advisory as a standalone page is deferred, so direct advisory inquiries route through this page for now.

**Step 4. The ACI Gauge.** The largest single build: 24 items, the developmental spectrum, mode and field scoring, the chord diagram, the result screen, and the intake export. v0.3 Section 6 specifies it completely enough to build from. Give it its own working sessions.

**Step 5. Research, Book, Join.** Research is the JSON-driven hub and the long-tail SEO engine. The others are largely static. v0.3 Sections 4.3, 4.5, 4.8. Education is deferred out of Phase 1.

**Step 6. Utility and launch checks.** Contact, Privacy, Terms, Accessibility statement, 404, `hreflang` tags, per-page meta and Open Graph, schema.org markup, and an accessibility pass against WCAG 2.2 AA.

**Chinese copy is not a step.** Every page ships with both EN and CN keys present from Step 2 onward. CN text fills in as Yilin writes it, and an untranslated key shows the graceful state named in v0.3 Section 3.7 rather than a broken page. Treating CN as a final step is the failure mode that brief was written to prevent.

---

## 5. The migration trigger

Move to Vercel when the first person needs to log in. Not on a date, not at a feature count.

In practice that is whichever comes first: a paying member who needs entitlements, or enough Gauge completions that longitudinal re-assessment in My Gauge becomes a real reason to hold membership. The repository and the commit workflow survive the move. What changes is that a build step is added and the domain's DNS points somewhere new.

---

## 6. Open items this addendum does not settle

Carried forward from v0.3's `[CONFIRM]` list, and needed before the step in brackets can finish.

- Final endorser list and permission to display [Step 3]
- Named SUES ACI Lab research editor and the lab's formal title [Step 5]
- Final program names and which ship at launch [deferred with Education, out of Phase 1]
- Owner of the Chinese terminology and the locked bilingual glossary [Step 1, blocks nothing but compounds if late]
- Email platform choice, CN-capable [Step 3]
- Editorial pass on the 24 Gauge items [Step 4]

The last two are the only ones that can hold up a step. The rest can be filled with placeholders and replaced.

---

*End of addendum.*
