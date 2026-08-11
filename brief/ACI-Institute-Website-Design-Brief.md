# ACI Institute: Website and Platform Design Brief

**Property:** www.aci-institute.org
**Prepared for:** Joseph Press, co-author, *Agentic Creative Intelligence* (Press and Wang)
**Prepared as:** a build-ready brief a web team or an AI builder can work from directly
**Date:** 21 July 2026
**Version:** 0.3 (rebuilds the ACI Gauge: an IDeaLs scaffold, two-mode capability items, a developmental spectrum in place of a Likert scale, and an output that configures a dæmon)

---

## 0. How to read this brief

This document is written so that a designer, a developer, or an AI builder can construct the site without further interpretation. It moves from strategy to structure to surface: first what the site is for and who it serves, then the information architecture and design system, then a page-by-page specification, then the member platform and the technical build.

Three things are settled and drive every decision below:

1. **One unified for-profit platform.** aci-institute.org is the brand front door to a single commercial product. The public marketing pages and the authenticated member platform live under one property, one design system, one account. Education is delivered through a linked property, aci-academy.org.
2. **The ACI Gauge is the hero.** A self-calibration tool that renders a visitor's four creative capabilities as a chord diagram is the site's signature interaction and its primary lead engine. Its full question set is drafted in Section 6.
3. **Bilingual from launch, English and Chinese.** The site ships in EN and CN, reflecting the authorship and the SUES School of Design research base. Language is a first-class design and technical requirement, not a later translation pass (Sections 3.7 and 9).

This version resolves the ten decisions from version 0.1. Their answers are recorded in Section 10 and folded into the relevant sections. A small number of items still need a value from you and are marked `[CONFIRM]`.

House style note: this brief follows the book's conventions where it touches book language. The word is **dæmon** with the ligature. No em dashes.

---

## 1. Positioning and strategy

### 1.1 What ACI is, in one paragraph a stranger understands

Agentic Creative Intelligence is a practice for keeping human agency at the center of creative work as AI takes over more of the making. It names four creative capabilities a practitioner cultivates, Extended Engagement, Aesthetic Awareness, Adaptive Coherence, and Expressive Influence, and it offers a method, the **dæmon**, an AI intermediary built to develop the practitioner rather than finish the work. The institute exists to cultivate creative expression and experience with AI, and to turn that practice into a livelihood for the people who hold it.

### 1.2 The monetization thesis

The book is the credibility asset. The platform is the business. Value is captured in four places, in rough order of near-term revenue:

- **Advisory.** One-to-one coaching and organizational consulting on applying ACI to transformative innovation. Highest price, lowest volume, available at launch.
- **Membership.** Recurring access to the community, the tools, and the marketplace, tiered by segment (Section 1.3).
- **Education.** Training programs delivered via aci-academy.org, from self-paced to cohort-based.
- **Marketplace take rate.** A percentage of dæmon rentals and related intellectual property and merchandise (Section 8).

The site is designed to move a visitor along a single spine: *encounter the idea, measure yourself against it (the Gauge), then choose a way in (advisory, membership, or education).*

### 1.3 Audiences and membership tiers

Three target segments, each with a distinct offer and price posture. Benchmarked price proposals sit in Section 7. Prices are provisional by design. They are set only after enough experience and feedback from education (educators, researchers, students) and pilot feedback from the creative community, so the platform launches free or low-cost and prices in later.

| Segment | Who | Offer | Tier and price posture |
|---|---|---|---|
| **Creative Industries** | Working creatives and studios | Community, Dæmon Marketplace, Creative Companions studio, discounted programs | Discounted membership |
| **Consulting** | Organizations, for-profit and nonprofit, pursuing innovation and transformation | Advisory, org licenses, private cohorts, full toolset | Full membership, highest value |
| **Education** | Students | Community and core tools, learning content | Free membership |

A fourth, invitation-only circle sits above these: the **ACI Council**, for luminaries and partners (Section 8.5). It is not a paid tier. It is a governance and influence body.

### 1.4 Business goals and success measures

The site should be instrumented against a small set of measures, not vanity traffic:

- **Primary:** qualified advisory inquiries per month, and Gauge completions that convert to a member account or an inquiry.
- **Secondary:** membership signups by segment, program enrollments handed to aci-academy.org, marketplace listings created and rented.
- **Health:** Gauge completion rate (start to chord diagram), email captures, returning members.

### 1.5 Voice and brand personality

Expert, warm, and exact. The book earns trust by refusing hype, and the site should do the same. Plain words, concrete claims, no consulting-speak. The visual world is the book's world: warm parchment, editorial-poster typography, and the four capability colors carried straight from Figure 5.3.

### 1.6 Landscape scan and differentiation

I surveyed the current field of AI-and-creativity institutes, communities, convenings, and services (July 2026) to sharpen where ACI stands. Four clusters exist, and none occupies ACI's position.

**Academic research hubs.** Well-funded university centers study AI and creativity but do not train working practitioners or run a livelihood platform. Examples: the MIT and Hasso Plattner Institute collaborative hub for AI and creativity (announced March 2026), the Edinburgh Futures Institute's Creativity, AI, and the Human community, the Serpentine and King's College Creative AI Lab, and CoSTAR's one-million-pound AI for Creativity initiative at Royal Holloway. These are natural research and convening partners for ACI, not competitors.

**Convenings.** Recurring gatherings frame the discourse: the NeurIPS Creative AI track, Ars Electronica, and university conferences such as Aarhus University's AI and the Creative Condition. ACI can enter this circuit through the SUES ACI Lab and its own convenings, then route attention back to the platform.

**Tool and prompt marketplaces.** Commercial marketplaces sell assets and prompts (PromptBase, FlowGPT, and the GPT Store). They optimize for output and volume, the opposite of ACI's stance. This cluster is where the Dæmon Marketplace must differentiate hardest, since a careless design would make ACI just another asset store.

**Learning academies and creative-AI courses.** Short-course providers teach tool skills. They rarely carry a coherent theory of practice or a credential tied to capability development.

**Where ACI is distinct.** ACI is the only offer that couples a named pedagogical framework (the four creative capabilities and the dæmon method) with a full path from research to education to community to livelihood, held together by a single stance: develop human agency rather than replace it. The book is the anchor no competitor has. The differentiation to protect in every design decision is that ACI develops the practitioner where the rest of the field automates the practitioner. The homepage and the Dæmon Marketplace copy must make that difference legible at a glance.

*Sources for this scan are listed in the delivery note accompanying this brief.*

---

## 2. Site architecture (advisor recommendation)

As your site advisor, my recommendation is a shallow, conversion-oriented public site sitting in front of a deeper authenticated platform. Visitors should never be more than two clicks from the Gauge or from an advisory inquiry. Members cross a clear threshold into the product.

### 2.1 Sitemap

**Public (unauthenticated) site**

```
Home
├── Mission
├── Frameworks & Scenarios  (brief overviews of the book's frameworks and scenarios)
├── Research                (curated research hub, filterable)
├── Education               (overview, links out to aci-academy.org)
├── Advisory                (coaching + organizational consulting, booking)
├── Community               (experts, endorsers, Joseph's bio, speaking, contact)
├── ACI Gauge               (the interactive calibration tool)
├── The Book                (about, praise, buy, authors)
├── Membership / Join       (tiers, pricing, sign-up)
└── Utility                 (Contact, Privacy, Terms, Accessibility, Search)

Global: an EN / CN language switcher in the header, on every page.
```

**Member platform (authenticated), reached after Join / Sign in**

```
Dashboard
├── Creative Community  (practitioner profiles, connect, gigs board)
├── Dæmon Marketplace   (rent dæmons, IP and merchandise)
├── Creative Companions (design-your-dæmon studio, the nine-step cycle)
├── Tech Advisor        (multi-model guidance, from Figure 1.6)
├── My Gauge            (saved results, re-assess over time)
├── Programs            (enrollments, handed off to aci-academy.org)
└── ACI Council         (invite-only workspace, hidden unless entitled)
```

Rationale: the six sections you named map cleanly to public pages, and the six venture components map to the member platform. The Gauge is the bridge. It lives in public (a visitor can complete it without an account) but invites the visitor to save results, which creates the account and crosses them into the platform.

### 2.2 Primary journeys

Design the site to serve four journeys, in priority order.

1. **Curious reader to lead.** Home or search, to Mission, to the Gauge, to a result that names a weak capability, to an Advisory inquiry or a Join. This is the money path. Every page should offer a route onto it.
2. **Organization to consulting engagement.** Home or Advisory, to a case for transformative innovation, to a scheduled call. B2B, highest value, needs proof and a booking calendar.
3. **Creative to member.** Community or Marketplace preview, to Join at the discounted creative tier, to a practitioner profile and a first dæmon listing.
4. **Student to free member.** Education or Community, to a free account, to programs and community. Low friction, verify status lightly.

### 2.3 Navigation model

- **Primary nav (persistent header):** Mission, Frameworks, Research, Education, Advisory, Community, and a visually distinct **Take the Gauge** button. A **Sign in / Join** control and an **EN / CN** language switcher sit far right.
- **The Gauge as a button, not a plain link.** It is the hero, so it gets a filled button in the brand terracotta in the header and repeated as a section on the home page.
- **Language switcher.** Persistent EN / CN toggle in the header, remembering the choice, and reachable from the footer as well.
- **Footer:** full sitemap, the three audience entry points (Creatives, Organizations, Students), newsletter capture, social, language switcher, and legal.
- **Member nav:** replaces the public primary nav after sign-in with the Dashboard set, keeping a link back to the public site.
- **Breadcrumbs** on Research and Programs, where depth warrants.

### 2.4 Conversion surfaces

Place a small, consistent set of calls to action, never more than one primary per view: **Take the Gauge**, **Book an advisory call**, **Join**. Secondary actions (subscribe, read, explore) are quieter. The Gauge result screen is the single most important conversion surface on the site and is specified in Section 6.7.

---

## 3. Design system

The visual identity is derived directly from the book's authoritative graphics, Figure 5.3 (the ecology) and Figure 1.6 (the multi-model poster). This keeps the brand honest to the work and gives the four capabilities a fixed color identity that the Gauge reuses.

### 3.1 Color

**Foundation**

| Token | Hex | Use |
|---|---|---|
| `parchment` | `#F3EAD3` | Page background |
| `parchment-deep` | `#EAdcbf` | Section background, cards |
| `ink` | `#2A2420` | Body text |
| `ink-soft` | `#5B5147` | Secondary text |
| `line` | `#D8C9A6` | Hairlines, borders |

**Brand**

| Token | Hex | Meaning |
|---|---|---|
| `manus` (primary) | `#9A3412` | Terracotta of the Design Object at the center of Figure 5.3. Primary buttons, the Gauge, links on hover. |
| `manus-bright` | `#B4512A` | Hover and active states |

**The four capability colors (fixed, from Figure 5.3)**

| Capability | Token | Hex | Architecture |
|---|---|---|---|
| Extended Engagement | `ee-blue` | `#3E6EA5` | World Models |
| Aesthetic Awareness | `aa-olive` | `#6E7B3D` | Large Language Models |
| Adaptive Coherence | `ac-purple` | `#5E4B8B` | Causal Models |
| Expressive Influence | `ei-orange` | `#C8721F` | Diffusion Models |

These four are canonical. They color the Gauge chord diagram, the capability cards, and any capability-tagged research or content. Do not recolor them per page.

Accessibility: `ink` on `parchment` clears WCAG AA at body sizes. Capability colors are used as fills and accents, never as the only carrier of meaning. Every capability is labeled in text as well as colored (Section 3.6).

### 3.2 Typography

Settled: **Fraunces** for display and **Inter** for body and UI.

- **Display and headings (Latin):** **Fraunces** (variable, open license). Warm, high-contrast, editorial-poster character that echoes the book covers.
- **Body and UI (Latin):** **Inter** (variable, open license). Highly legible, wide weights, strong for forms and the member platform.
- **Accent and data:** **IBM Plex Mono** for the Gauge scores and technical labels.
- **Chinese (CN):** pair the Latin faces with a quality Chinese family so CN pages read as designed, not defaulted. Recommended: **Noto Serif SC** for display and **Noto Sans SC** for body (open license, tuned to sit beside Fraunces and Inter). Set CN line height slightly looser and check weight matching so a bilingual page feels like one system. IBM Plex also ships a CJK companion if a matched mono is wanted.
- **Scale:** a modular scale, roughly 1.25 ratio. Display 48 to 64px, H1 36 to 40, H2 28, H3 22, body 18, small 15. Generous line height on body (1.6), a touch more on CN.

### 3.3 Layout and grid

- 12-column responsive grid, max content width around 1200px, comfortable reading measure of about 68 characters on text pages.
- Generous whitespace and parchment negative space. The book breathes. The site should too.
- Breakpoints: mobile 360, tablet 768, desktop 1200, wide 1440.

### 3.4 Imagery and motif

- The book's figures and the archetype dæmon illustrations (by Shuqian Yu) are the primary imagery. Commission or reuse with permissions cleared.
- Recurring geometric motif: the four-petal field of Figure 5.3 and the decagon Design Object at its center. Use as a quiet background device and as the Gauge's visual home.
- Avoid stock photography of people at laptops. It reads as the artifice the book argues against.

### 3.5 Components (design system inventory)

Build these as a reusable library (Section 9 recommends the stack):

- Buttons (primary, secondary, quiet), form fields, selects, sliders (the Gauge Likert control), cards (capability card, research card, practitioner card, program card, dæmon listing card), tabs, accordions, modal, toast, nav header, member sidebar, footer, chord-diagram module, pricing table, profile block, booking embed.

### 3.6 Accessibility, performance, SEO

- **Accessibility:** target WCAG 2.2 AA. Keyboard-navigable Gauge, ARIA on the chord diagram with a text-table fallback of the same data, visible focus states, prefers-reduced-motion honored.
- **Performance:** static-first, lazy-load figures, subset fonts, target Largest Contentful Paint under 2.5s. The chord diagram loads only on the Gauge route.
- **SEO:** server-rendered public pages, clean semantic headings, per-page meta and Open Graph, schema.org markup for the book, the organization, and events (speaking). Research pages are the long-tail SEO engine, so give each curated item its own indexable page.

### 3.7 Bilingual design (English and Chinese)

The site is bilingual from launch. Treat this as a design constraint on every page, not a post-hoc translation.

- **Parity of experience.** EN and CN are peers. Both get full navigation, the Gauge, and the member platform. Where content is not yet translated, show a clear, graceful state rather than a broken page.
- **Language switcher.** Persistent EN / CN control in the header and footer. Remember the choice across the session and, for members, on their account.
- **Layout that survives translation.** CN and EN differ in length and line breaking, so design flexible containers, avoid text baked into images (use live text over the figure motifs), and test the Gauge questions, buttons, and cards in both languages.
- **The framework terms are canonical in both.** Agree the CN renderings of the core terms once (the four capabilities, Mens, Manus, Membra, the field, the dæmon, the aspects Shape, Style, Story, Statement) and lock them in a shared glossary so every page and both properties use the same words. `[CONFIRM]` who owns the CN terminology, most naturally Yilin with the SUES ACI Lab.
- **Right defaults.** Detect a sensible default language from the browser, always overridable. Use `hreflang` tags and language-specific URLs (for example `/en/...` and `/zh/...`) so search engines index both.
- **The dæmon ligature** is an English-typography convention. Decide the CN treatment once and apply it consistently.

---

## 4. Page-by-page specification (public site)

Each page below lists its job, its sections in order, and its primary call to action. Draft copy directions are given as guidance, not final words. The book's own language is the source. A useful anchor line for the whole site, taken from the manuscript: *What kinds of creative expression and experience can reclaim human agency in the agentic era?*

### 4.1 Home

**Job:** in one screen, say what ACI is, and route the visitor to the Gauge or to advisory.

Sections, top to bottom:

1. **Hero.** The anchor question above as a headline, a one-line subhead ("A practice for keeping human agency at the center of creative work with AI"), and two buttons: **Take the ACI Gauge** (primary) and **Read the mission** (quiet). Background: the four-petal field motif, subtle.
2. **The four capabilities.** A row of four capability cards (Extended Engagement, Aesthetic Awareness, Adaptive Coherence, Expressive Influence), each in its fixed color, each one sentence. Links to Mission.
3. **The Gauge, previewed.** A live thumbnail of a chord diagram and a line: "Measure your creative field in five minutes." Primary CTA to the Gauge.
4. **Three ways in.** Cards for Creatives, Organizations, Students, each routing to the right offer and tier.
5. **The book.** Cover, one line of advance praise, buy button, authors.
6. **Advisory teaser.** One line on transformative innovation consulting, CTA to book a call.
7. **Newsletter capture and footer.**

### 4.2 Mission

**Job:** state what ACI is and why it matters, at enough depth to convert a serious reader, without reprinting the book.

Sections:

1. **The claim.** ACI's thesis in plain language: rejuvenating creative capabilities reclaims human agency in the agentic era.
2. **Mens, Manus, Membra.** The field explained simply: mind, hand, and body, with the making hand at the center. Use Figure P1.2 or a clean redraw. Keep it short and concrete.
3. **The four capabilities.** Each with its aspect and what it guards, drawn from Figure 5.3: Extended Engagement gives Shape, Aesthetic Awareness gives Style, Adaptive Coherence gives Story, Expressive Influence gives Statement. Offer and avoid stated for each.
4. **The dæmon.** One paragraph: an AI intermediary built to develop you, not to finish your work. Links to Creative Companions.
5. **Why now.** The Faustian-bargain framing, briefly. What each architecture offers and subtracts.
6. **CTA:** Take the Gauge.

Design: this is a reading page. Long measure, generous type, pull quotes in Fraunces, the capability colors as section markers.

### 4.3 Frameworks and Scenarios

**Job:** give a clear, honest overview of the book's frameworks and its scenarios, enough that a visitor understands ACI and wants more, without reproducing the book. This page is a map, not the territory. Its job is to send serious readers to the book, the Gauge, and membership.

Guiding rule: teaser depth. Each item explains the idea in a few sentences and stops before the worked detail, ending on a link to the book or the relevant tool. Give enough to be useful and credible, and hold back what the book is for.

Sections:

1. **A map, not the territory.** One short paragraph setting expectations: an overview of the thinking, with the full method, the worked practices, and the scenarios in the book.
2. **The field: Mens, Manus, Membra.** The two axes and the making hand at the center, from Figure P1.2, explained in plain language. One diagram, a few sentences. Link to Mission for more.
3. **The four creative capabilities.** The four cards (Extended Engagement, Aesthetic Awareness, Adaptive Coherence, Expressive Influence), each with its aspect, the AI architecture it meets, and its offer-and-avoid pair, one line each, from Figure 5.3. Each card links to the Gauge to self-assess that capability.
4. **The dæmon and the Creative Council.** A short overview: a dæmon is an AI intermediary built to develop you rather than finish your work, and a Creative Council convenes several dæmons around one design object. Name the nine-step design cycle exists, without reproducing it. Link to Creative Companions.
5. **The design object.** One paragraph on the book's central unit, the made thing joined with its shared life, since it anchors both the method and the scenarios.
6. **The scenarios, in brief.** High-level, non-spoiler overviews of the applied parts. Part II imagines futures across the creative disciplines, the built, tangible, moving, sensory, playful, social, and reflective arts, each opening with a forecast and a design object. Part III follows one applied scenario, home eldercare in Ciudad Nezahualcoyotl, the cooperative BetterFutures, and a practitioner named Sofia. Frame these as invitations, one or two sentences each, ending on a **Read the book** call to action. Do not summarize plots or outcomes.
7. **Toward a multi-model practice.** A brief nod to the multi-model future from Figure 1.6, choosing the right model family for the right creative need. Link to the Tech Advisor for members.
8. **CTAs:** Buy the book, Take the Gauge.

Design: visual and card-driven, using the book's figures as thumbnails behind glass, with each framework in its capability color. This page carries strong SEO value, so give it clean structure and per-framework anchors. It must never feel like a leak of the book. It should feel like a good trailer.

### 4.4 Community

**Job:** present the people of ACI, show credibility through endorsers, route to Joseph for advisory and speaking, and invite direct contact.

Sections:

1. **Who we are.** Short framing: a community of practitioners cultivating ACI, anchored by the authors and the SUES School of Design ACI Lab.
2. **Joseph Press.** Photo and bio. The photo and name link to **www.josephpress.com**. A clear line offering him for **advisory** and **speaking engagements**, with a **Book time** button wired to **Google Calendar appointment scheduling** (settled, see Section 9).
3. **Yilin Wang** and the SUES ACI Lab, same card pattern. Yilin also anchors the Chinese-language side of the community and the CN terminology.
4. **Endorsers.** A credibility band of the book's advance-praise endorsers, name, role, and a short line each, with photos where permitted. This is the launch proof, drawn from the manuscript's advance praise. `[CONFIRM]` the final endorser list and permission to display.
5. **Expert directory (preview).** A teaser of member practitioner profiles, with a CTA to the full Creative Community inside the platform.
6. **Speaking and advisory request form.** Name, organization, need (advisory, speaking, media), timeframe, message. Routes to email and CRM.
7. **Contact.** General direct-contact block.

Note: the deep practitioner ecosystem (searchable profiles, gigs) lives in the member platform (Section 8.2). This page is the public shopfront for it and the direct line to Joseph.

### 4.5 Research

**Job:** encourage research by sharing curated, quality work on the key ACI topics, and rank in search.

Sections:

1. **Intro.** One line on why the institute curates research: to encourage and orient inquiry across the ACI topics.
2. **Filter bar.** Filter by capability (the four colors), by topic (embodied cognition, world models, LLMs, causal models, diffusion, multi-model orchestration, creativity science, philosophy of practice), and by type (paper, essay, talk, dataset).
3. **Curated feed.** Cards, each a curated item: title, authors, source, a one to three sentence editor's note on why it matters to ACI, capability tags, outbound link. Each card also has its own indexable detail page for SEO.
4. **Submit research.** A light form for members and readers to suggest items. Curated, not open-posted.
5. **CTA:** subscribe to a research digest (email capture), and Join to contribute.

Editorial model: this is a curated hub, not a journal. Curation is led by the **SUES School of Design ACI Lab**, which approves items and sets the agenda across the ACI topics. Cadence: a monthly digest to start, moving to biweekly as the pipeline grows. `[CONFIRM]` the named lab editor and the lab's formal title for the byline.

### 4.6 Education

**Job:** present the training offer and hand qualified learners to aci-academy.org.

Sections:

1. **The offer.** What ACI training develops, and for whom (creatives, organizations, students).
2. **Programs.** Cards for each program, each linking to its aci-academy.org page for detail and enrollment. Proposed launch set, to confirm against the academy roadmap:
   - **ACI Foundations** (self-paced): the field, the four capabilities, and the dæmon method. The on-ramp for everyone, and the natural next step from a Gauge result.
   - **Design Your Dæmon** (short workshop): the nine-step cycle, run live, producing a working dæmon and system prompt.
   - **Practitioner Cohort** (multi-week): capability development across a real project, with a Creative Council.
   - **Educators and Researchers track**: teaching ACI and building on it, aligned with the SUES ACI Lab. Free or subsidized for students.
   - **Organizational Program** (in-house): ACI for transformative innovation inside a company or a nonprofit, the bridge to Advisory.
3. **Formats and pricing posture.** Self-paced, cohort, and in-house. Student and educator access free or subsidized. Prices phase in with pilot feedback (Section 7).
4. **How it connects to the Gauge.** Your Gauge result recommends where to start. Deep link from a Gauge result to the matching program.
5. **CTA:** Explore programs (to aci-academy.org), or Take the Gauge first.

Integration note: aci-academy.org is a separate property. Keep one shared account and design system so a member moving between them does not feel a seam. Single sign-on is the target (Section 9). `[CONFIRM]` the final program names and which ship at launch.

### 4.7 Advisory

**Job:** convert organizations and individuals into coaching and consulting engagements. This is the highest-value page.

Sections:

1. **The proposition.** Applying ACI to increase transformative innovation, the book's central promise, stated for a buyer. Name the two modes clearly: **1:1 coaching** and **organizational consulting** (for-profit and nonprofit).
2. **1:1 coaching.** Who it is for, what changes, how it runs. CTA: book a call.
3. **Organizational consulting.** Innovation and transformation engagements. Outcomes framed around capability, not deliverables theater. CTA: request a conversation.
4. **How we work.** The ACI method applied to organizations: name the design object, convene a Creative Council across the four capabilities, develop capacity rather than outsource it.
5. **Proof (launch posture).** Until client case notes exist, lead with the credibility you already hold: the book and its framework, the advance-praise endorsers (shared with Community), Joseph's background and speaking, and the SUES School of Design ACI Lab as the research base. Add anonymized pilot notes from the education and creative-community pilots as they land, then named case studies and client logos over time. Design the page so a case-studies module can slot in without a redesign.
6. **Booking.** Embedded Google Calendar appointment scheduling and an inquiry form for larger engagements.

Design: more corporate than the rest of the site, still on-brand. Clear pricing posture even if exact figures are on inquiry.

### 4.8 Remaining public pages

**Membership / Join.** The tier comparison (Creatives discounted, Consulting full, Students free), what each unlocks in the member platform, and sign-up. Student status verified lightly. This page turns Gauge and Community interest into accounts.

**The Book.** Cover, advance praise, synopsis, buy links, the two authors, and the connection to the institute. A quiet but persistent asset for credibility and SEO (schema.org Book markup).

**Utility.** Contact, Privacy, Terms, Accessibility statement, Search, 404. Standard, accessible, on-brand.

---

## 5. Content and editorial principles

A short standard so the site stays consistent as it grows:

- **Source of truth is the book.** Framework language (the field, the four capabilities, the aspects, the dæmon, offers and avoids) matches Figures 5.3 and P1.2 exactly. Do not paraphrase the framework into something new.
- **Plain and exact.** Short sentences, concrete claims, no consulting-speak, no hype. Label anything unproven.
- **One primary action per view.** Take the Gauge, Book a call, or Join.
- **Capability color discipline.** The four colors mean the four capabilities everywhere. Never decorative.
- **The word is dæmon,** with the ligature, wherever the book term appears.

---

## 6. The ACI Gauge (hero feature)

The Gauge is an interactive self-calibration tool. A visitor answers a short set of questions and receives a field diagram of their four creative capabilities, read across both modes, and how well they currently reinforce one another. The purpose, in your words, is to let visitors self-evaluate, then reach out to experts for guidance on developing their capacity, the integrated field of all four capabilities. This version rebuilds the instrument on your latest direction: an IDeaLs scaffold, capability items that measure both modes and the felt excitation, a developmental spectrum in place of an agreement scale, and an output that configures a dæmon. This section gives the full question bank, the scoring, and the diagram construction so a builder can implement it directly. The questions are drafted here and the visual build follows in a later pass.

### 6.1 Structure and grounding

The instrument has two parts, and it is built as the front end of dæmon design. Part A situates the practitioner and names the design object. Part B measures the four creative capabilities across their two modes. Everything it captures feeds the Creative Companions studio, so a completed Gauge pre-configures the dialog of the dæmon a visitor would design (Section 6.6).

- **Part A, the IDeaLs scaffold (4 dimensions).** Establishes the ambition and complexity of the work, using the book's IDeaLs frame (Press et al., 2021). It feeds Set the Shape and Step 2 of the dæmon cycle.
- **Part B, the four creative capabilities (5 items each).** Measures current strength across each capability's two modes, its felt excitation, and the design-object aspect it foregrounds. It feeds the dæmon's standing brief, its two guarded modes, and its signal (Steps 3 to 7).

A note on the scale, since you asked whether a 1-to-5 agreement scale is right. It is not, and this version drops it. Agreement implies a right answer and a wrong one, and this instrument has neither. It uses a developmental spectrum where every position is a legitimate place to stand, and the reading identifies where to expand the breadth and depth of both modes rather than marking a score as low (Sections 6.4 and 6.5). Total is twenty-four items, roughly six minutes. The wording below is a first draft for your editorial pass.

### 6.2 Part A, the IDeaLs scaffold

Framing shown to the visitor: *Start with the future you are working toward.* Four dimensions, drawn from the book's IDeaLs frame and set out here as four. Each both calibrates the complexity of the work and situates the dæmon.

**1. Aspiration, the Why.** The systemic challenge the work serves. Prompt: *"Finish the sentence: a better future of ______."* A short free text, plus one self-placement, is the challenge you name mostly personal, communal, or systemic. More systemic raises the scaffold.

**2. Innovation as meaning, the What.** The design object, named on a ladder of ambition. Prompt: *"What are you making, and how far does it reach?"* Choose the rung: a **solution** (a discrete answer), a **service** (an ongoing offer), a **system** (a structure others act within), or an **SDG-level** change (a contribution to a global goal). The rung sets both the meaning and the complexity.

**3. Intervention, the How.** Design as the craft of making. Prompt: *"How do you make it, and what resists you?"* Name the material or medium and how hands-on the making is, from mostly directing tools to mostly working the material yourself.

**4. Cultivation, the Who and When.** Leadership as cultivating a community of relationships. Prompt: *"Who is this made with and for, their stake, and when do they enter, early, throughout, or late?"*

Scoring: the four dimensions combine into a Scaffold Complexity level, weighted toward the Innovation rung and the reach of the Aspiration. A solution that is mostly personal reads as Emerging. An SDG-level change made with and for a whole community reads as Transformative. The level frames the result and raises the recommended reach for each capability (Section 6.5). The free-text and ladder answers carry straight into the dæmon's design object and its situating lines (Section 6.6).

### 6.3 Part B, the four creative capabilities (5 items each)

Each block measures one capability across five facets, in this fixed order: current capability (skill and disciplinary familiarity), the Disposition mode (receptive), the Orientation mode (projective), the embodied excitation (the felt stretch between Mens and Manus), and the design-object aspect. The two named modes and the excitation are the book's own, from the capability briefs in Appendix 1, so each item feeds a specific part of the dæmon (Section 6.6). The visitor answers each on the developmental spectrum in Section 6.4, never as agreement.

Each block opens with a plain one-line reminder for the visitor, its two modes, and its felt signal.

**Extended Engagement** (aspect: Shape, meets World Models). *Staying with the material until the work is truly earned.* Modes: Meet What Resists (Disposition) and Reach Past Grasp (Orientation). Signal: Seek the Unreachable.

- EE1 *(current capability).* My skill and experience in the material or medium at the heart of this work.
- EE2 *(Disposition, Meet What Resists).* Keeping my hand on resistant material through the friction a tool would smooth away.
- EE3 *(Orientation, Reach Past Grasp).* Reaching for a form beyond my current grasp and keeping that reach my own.
- EE4 *(excitation, Seek the Unreachable).* Feeling the moment knowing arrives in the doing, when hand and work attune.
- EE5 *(aspect, Shape).* Attending to the Shape of the thing, its material, structure, and the form a body will hold.

**Aesthetic Awareness** (aspect: Style, meets Large Language Models). *Sensing before naming, and holding a distinct voice.* Modes: Register What Holds (Disposition) and Ready the Form (Orientation). Signal: Trust the Unfamiliar.

- AA1 *(current capability).* My skill and experience in shaping style, taste, and aesthetic judgment.
- AA2 *(Disposition, Register What Holds).* Dwelling in what I sense before I reach for a word or a category.
- AA3 *(Orientation, Ready the Form).* Readying a form my body has earned, rather than the coherent world a prompt calls up whole.
- AA4 *(excitation, Trust the Unfamiliar).* Feeling caught by a beauty or dissonance no category yet contains, and trusting it.
- AA5 *(aspect, Style).* Attending to the attributes a body reads, the color, texture, sound, and detail that carry style.

**Adaptive Coherence** (aspect: Story, meets Causal Models). *Holding a through-line while keeping the real question open.* Modes: Open to the Grain (Disposition) and Hold the Thread (Orientation). Signal: Hold the Untethered.

- AC1 *(current capability).* My skill and experience in holding a long, complex project together as one work.
- AC2 *(Disposition, Open to the Grain).* Staying open to a connection that has yet to form, accommodating the grain the material opens.
- AC3 *(Orientation, Hold the Thread).* Holding my own thread open, rather than taking the model's highest-scored account to end the search.
- AC4 *(excitation, Hold the Untethered).* Feeling the thread re-form under the hand when a joint discloses itself.
- AC5 *(aspect, Story).* Attending to the Story, what the work is for and how its parts cohere into one whole.

**Expressive Influence** (aspect: Statement, meets Diffusion and platform systems). *Making unforeseen connections that land with the people who receive the work.* Growth edge: **serendipity**, the unforeseen connection and synthesis, which is exactly what these tools subtract when they hand over reach. Modes: Stay Porous to the Field (Disposition) and Carry the Vision Out (Orientation). Signal: serendipity, the charge of things suddenly connecting.

- EI1 *(current capability).* My skill and experience in bringing work into the world so it connects with others.
- EI2 *(Disposition, Stay Porous to the Field).* Staying porous to what the field returns while holding my form, reading it through the body rather than a metric.
- EI3 *(Orientation, Carry the Vision Out).* Following an unforeseen connection toward the exception and the new, rather than the precedent a tool optimizes toward.
- EI4 *(excitation, serendipity).* Feeling the charge when disparate things suddenly connect into a synthesis I had not foreseen.
- EI5 *(aspect, Statement).* Attending to the Statement, the shared life the work takes on among the people who receive it.

Note on Expressive Influence: the book names this capability's offer as reach and its cost as synthesis, and its Appendix signal as Bear the Unyielding. This Gauge foregrounds serendipity, the unforeseen connection, as the growth edge, since that is the synthesis the tools skip. `[CONFIRM]` whether to carry serendipity into the manuscript's capability brief or keep it as the Gauge's framing only.

### 6.4 The response spectrum (in place of a Likert scale)

Every Part B item is answered on the same five-stage developmental spectrum. The stages are places on a path, not degrees of agreement, so no answer is wrong and none reads as failure.

1. **New ground.** I am just meeting this.
2. **Emerging.** I have begun, unevenly.
3. **Practicing.** I do this with some consistency.
4. **Fluent.** This is reliable in my work.
5. **Extending.** I work at its edge and open it for others.

A sixth option, **not sure or not yet relevant**, records honestly and does not score. For the excitation item, read the same stages as the depth of the felt signal, from rarely noticed to keenly felt and worked with.

Why this shape. It keeps five points, which people read quickly, while removing the duality you flagged. There is no positive-versus-negative pole, so a visitor places a self-portrait rather than passing or failing a test. If you would rather show the two modes directly, an alternative build renders each capability as two short sliders, one per mode, with the same stage labels. Either way, the reading names where to widen, never what is wrong.

### 6.5 Scoring, by mode and by field

The scoring reads breadth and depth, the two things the book says a capability grows by, and it keeps the two modes separate so the dæmon can lean toward the neglected one.

1. **Two mode scores per capability.** Score the Disposition item and the Orientation item separately. These are the capability's two reaches along the Membra axis. A capability with one strong mode and one thin mode is narrow, and the thin mode is the first thing to widen.
2. **Capability depth and breadth.** Depth is how far the capability reaches, roughly the average of its modes lifted by the current-capability and aspect items. Breadth is how balanced the two modes are. Report both, since a deep but lopsided capability and a shallow but balanced one need different work.
3. **Excitation sensitivity.** The excitation item is read on its own, as how alive the felt signal is. A quiet signal is a flag that a tool may be foreclosing it, and it sets the dæmon's signal tuning.
4. **The field.** Across the four capabilities, report whether all four are in play (field breadth) and how far each reaches (field depth), plus balance across them. The book's claim is that capacity is all four kept in play, so a wide, even field is the goal, not one maximized capability.
5. **Scaffold framing.** The Part A level raises the recommended reach. A modest field serving an SDG-level, community-wide aspiration shows a wider gap to close than the same field serving a personal solution.

No visitor fails. The result names where to expand the breadth and depth of both modes, and points to the expert, the program, or the dæmon suited to it.

### 6.6 How the Gauge configures the dæmon

This is the point of the redesign. A completed Gauge is a dæmon intake. It pre-fills a draft the practitioner then refines through the nine-step cycle in the Creative Companions studio (Appendix 1). The Gauge is the intake, the studio is the build.

| Gauge output | What it configures in the dæmon cycle |
|---|---|
| Aspiration free text ("a better future of ...") and the Innovation rung | Set the Shape: the design object, its systemic why, and its ambition |
| Intervention (material, how hands-on) | Step 2, Craft: the material and what resists |
| Cultivation (who, stake, when) | Step 2, Relations: collaborators, community, and timing |
| Weakest or chosen capability | Step 1: the capability to protect, which selects the archetype |
| The thinner of that capability's two modes | Step 7 weighting, plus the emphasis between Step 5 (the action it guards, Orientation) and Step 6 (the mindset it protects, Disposition). The dæmon pulls back the neglected mode |
| Excitation sensitivity | Step 7, tune the signal: alive and quiet, and the foreclosure to catch, which is the architecture's offer-and-avoid |
| Current-capability level | The scope and difficulty of the standing brief (Step 3) |
| Design-object aspect | The aspect the dæmon guards, Shape, Style, Story, or Statement |

Worked example. A visitor names *a better future of neighborhood care*, an SDG-level system, made with residents throughout. Extended Engagement is her thinnest capability, and within it Disposition (Meet What Resists) is thinner than Orientation. The studio drafts a dæmon that serves Extended Engagement, guards the Shape of the work, leans mostly-Disposition, tunes the signal Seek the Unreachable, and watches for the foreclosure where a world model hands over a standing shape before her hand has met the resistance. She opens the studio with that draft already in front of her, and the nine steps make it hers.

`[CONFIRM]` two small modeling choices for the build: how heavily the Innovation rung weights Scaffold Complexity, and whether the dæmon intake pre-fills a full draft brief or only suggests the capability and weighting.

### 6.7 The result screen and the field diagram

This is the single most important conversion surface on the site. It has three parts, in order.

**1. The field diagram.** The visual echoes Figures 5.3 and P1.2 and shows both the four-capability field and, on demand, the two modes within each capability.

- **Four nodes**, one per capability, around the circle, each in its fixed color (`ee-blue`, `aa-olive`, `ac-purple`, `ei-orange`). A node's arc length encodes that capability's depth, so a deep capability owns more of the ring.
- **Two-mode reach.** Each capability node carries its two modes, Disposition and Orientation, as a small paired reach or a split in the arc, echoing the contour of Figure P1.2. This is where breadth shows: a balanced capability reads as an even pair, a lopsided one as a short mode beside a long one. A drill-down or hover names the two modes and their stage.
- **Chords** connect every pair of capabilities. The weight between capability X and capability Y is a function of both depths, for example `min(X, Y)` or the normalized product, showing how much the two currently reinforce each other. Thick, even chords all around read as an entangled, balanced field, the four working as one capacity. Thin or missing chords show where the field breaks.
- **Center.** A small decagon marks the Design Object, the Manus center where the capabilities meet, echoing Figure 5.3.
- **Accessibility.** Provide the same data as a labeled table beneath the diagram, including the two mode stages per capability, and honor prefers-reduced-motion by rendering the final state without animation.

Reading guidance beside the diagram: a wide, even field means a strong integrated capacity. A short mode inside any capability, or a thin chord between two, shows where to widen breadth and depth, and where a tool may be doing work that should stay yours.

**2. The reading.** Four short capability read-outs, each naming its depth, which mode is thinner, the felt signal, and the aspect it guards. Plus a headline on field breadth and the Scaffold Complexity framing. The language stays developmental, where to expand, never a grade.

**3. The call to action.** The developmental invitation, matched to the thinnest capability, its thinner mode, and the Scaffold level:

- **Design your dæmon** (routes to the Creative Companions studio, pre-filled from this result as a dæmon intake, per Section 6.6). This is the primary action, since the Gauge was built to feed it.
- **Talk to an expert** (routes to Advisory, pre-filled with the capability and mode to develop).
- **Save your result** (creates an account, crosses the visitor into the platform).

**Data and follow-up.** With consent, capture email to send the result and a short developmental note. Store completed results to a member's **My Gauge** so they can re-assess over time and watch the field widen. This longitudinal re-assessment is itself a reason to stay a member, and each re-take updates the dæmon intake.

### 6.8 Build notes for the later visual pass

- Render the field with a mature library (D3 chord layout for the entanglement, with a small custom contour or paired-arc layer for the two modes). Keep the four colors and the labeled-table fallback.
- Keep all item text, facet and mode tags, scale labels, scoring thresholds, and the dæmon-intake mapping in a single config object, in both EN and CN, so wording tunes without touching the diagram code.
- Export a structured dæmon-intake object from each completed Gauge, so the Creative Companions studio can read it directly.
- Instrument start, per-item progress, completion, and each CTA click, especially Design your dæmon, so we can see and fix drop-off.

---

## 7. Monetization model

The platform earns in four streams. The figures below are benchmarked proposals, not final prices. They phase in only after enough experience and feedback from education (educators, researchers, students) and pilot feedback from the creative community. Launch free or low-cost, prove value, then price in.

| Stream | Mechanism | Segment | Notes |
|---|---|---|---|
| **Advisory** | Coaching packages, consulting engagements, retainers | Consulting, individuals | Highest value, available at launch, sold from the Advisory page |
| **Membership** | Recurring subscription, tiered | Creatives (discounted), Consulting (full), Students (free) | Free student tier is acquisition, not loss. It seeds the ecosystem and the future professional base |
| **Education** | Program fees | All | Delivered via aci-academy.org, revenue booked there, funnel starts here |
| **Marketplace take rate** | Percentage of dæmon rentals, IP, and merchandise | Creatives | Grows with the community, Phase 2 revenue |

### 7.1 Proposed membership tiers (benchmarked, provisional)

Professional creative bodies price annual membership from roughly 50 dollars for students to 250 dollars for full professionals, up to about 500 dollars for a leader or patron tier (AIGA sits at 50, 150, 200, 250, and 500 across its levels). ACI membership bundles more than a professional body, since it includes the tools and the marketplace, so it can price at or slightly above that band once value is proven.

| Tier | Segment | Provisional annual price | Rationale |
|---|---|---|---|
| **Student** | Education | Free | Acquisition and ecosystem seed. Light verification. |
| **Creative** | Creative Industries | 90 to 180 dollars, discounted | Below or at the professional-body band, since these members supply the marketplace. Founders discount at launch. |
| **Professional / Full** | Consulting individuals | 300 to 480 dollars | Above the professional-body band because it bundles the full toolset, the Tech Advisor, and priority community. |
| **Organizational** | Companies and nonprofits | Custom, from a few thousand dollars | Seats, private cohorts, and an advisory allocation. Sold like Advisory. |

Launch stance: open the Creative and Student tiers free during the pilot, gather feedback, then introduce paid tiers with a founders rate for early members.

### 7.2 Advisory pricing posture (benchmarked)

Senior independent innovation consultants bill roughly 1,500 to 3,500 euros per day, with discovery engagements around 15,000 to 50,000, capability programs around 40,000 to 150,000, and monthly retainers around 3,000 to 10,000. In United States terms, experienced strategy consultants rarely price below 150 to 200 dollars an hour and increasingly sell value-based project fees rather than time.

- **1:1 coaching:** sell as a package (for example a set of sessions across a project), not by the hour, positioned as capability development.
- **Organizational consulting:** discovery, capability program, and retainer options, priced in the bands above, adjusted for region and scope.
- Show posture and outcomes on the page, take exact figures to inquiry.

### 7.3 Marketplace take rate (benchmarked)

Prompt and creator marketplaces take roughly 10 to 20 percent of a sale (PromptBase takes 20 percent on marketplace sales and 10 percent on custom work, others sit near 10). App stores take 15 to 30 percent, which reads as extractive for a community platform. Proposed ACI take rate: **15 percent** of a dæmon rental, lower for higher tiers or for community-benefiting listings, so the rate reads as fair and keeps creators on-platform. Confirm after the marketplace pilot.

Design implication: the Join page and the Gauge result must make the value of each tier legible in seconds. The free student tier needs a light, non-annoying verification. The discounted creative tier needs the Marketplace and Companions studio visible as the reason to pay.

*Benchmark sources are listed in the delivery note accompanying this brief.*

---

## 8. The member platform (the venture, unified)

Behind Join and Sign in sits the commercial product. It houses the six components you named. Each is specified below at brief level, with a build phase. The through-line: the public site develops belief, the platform develops practice and livelihood.

### 8.1 Access and dashboard

After sign-in, the public nav is replaced by a member Dashboard: the member's Gauge field at the top (a small chord diagram), then entries to Creative Community, Dæmon Marketplace, Creative Companions, Tech Advisor, Programs, and, if entitled, the ACI Council. Entitlements follow the tier. Students see everything except paid marketplace actions and private consulting spaces. `[CONFIRM]` exact per-tier entitlements once the pilot pricing is set.

### 8.2 Creative Community

**What it is:** an ecosystem for ACI practitioners to connect, share leading practices, learn from one another, and find gigs and ACI creative work.

- **Practitioner profiles.** Each member has a profile: name, discipline, the capabilities they are strong in (shown as their own small chord field), portfolio links, dæmons they have designed or offer, and availability for work. Profiles are the connective tissue and feed both the Marketplace and the gigs board.
- **Connect and share.** Follow, message, and post leading practices. Curated spotlights rather than an open firehose.
- **Gigs and opportunities board.** Post and find ACI creative work. Filter by capability and discipline. This is a strong reason for creatives to hold membership.
- **Phase:** launch with profiles and the gigs board. Add richer social features later.

### 8.3 Dæmon Marketplace

**What it is:** where members rent out their dæmons, their creative companions, akin to a skill marketplace but with the full dæmon characters. As a dæmon grows in strength through practice, its owner can rent it at increasing value. Includes an intellectual property and merchandise option.

- **Listings.** A dæmon listing carries its character, the capability it develops, its archetype, a strength or level earned through logged practice, terms, and price.
- **Strength and leveling (proposed model).** Strength should reward genuine development, not activity for its own sake. A proposed model, to refine with the SUES ACI Lab through the new semester:
   - **What counts as practice.** Completed dæmon design cycles (the nine steps), logged working sessions where the dæmon provoked and the practitioner responded, and, above all, evidence the capability grew. The book's own signal is the standing readers' audit and the fade signal, so weight outcomes over hours.
   - **How strength is earned.** A blend of three inputs: logged practice depth (sessions and cycles), verified outcomes (a completed design object, a readers' audit returned, a program finished), and peer and mentor endorsement inside the community. This resists gaming better than any single counter.
   - **How it is verified.** Portfolio artifacts attached to the profile, community endorsement, and, for higher levels, a light review by the ACI Council or a mentor. Levels are legible like a practice grade, not a leaderboard, so the frame stays developmental.
   - **Guard against the fade paradox.** A dæmon is built to become unnecessary, so leveling must not punish a practitioner for outgrowing one. Strength attaches to the practitioner's demonstrated capability and to the dæmon's design quality, rather than to lock-in or dependence.
   - `[CONFIRM]` the final leveling rubric after the semester's research.
- **Rental and take rate.** The platform takes a percentage of each rental. Clear licensing terms on what a renter may and may not do.
- **IP and merchandise.** Owners can offer merchandise and licensed intellectual property tied to their dæmon character (art by the community's illustrators, following the book's archetype-illustration tradition).
- **Guardrails.** A dæmon develops a person, it does not do the work. Marketplace terms and product copy must protect that stance, or the marketplace quietly becomes the agent economy the book argues against. This is a brand-critical constraint, not a footnote.
- **Phase:** Phase 2. It depends on a population of practiced dæmons, which the Companions studio creates.

### 8.4 Creative Companions

**What it is:** the studio that guides a practitioner to design their dæmon, following the precise process the book specifies. This is the engine that fills the Marketplace and deepens membership.

- **Source of truth:** Appendix 1 of the book, the nine-step dæmon design cycle, and the `design-your-daemon` process. The studio is that cycle made interactive.
- **The flow, step by step:** Set the Shape (name the design object, choose pattern or protocol, set the autonomy dial), then Step 1 scope and the capability to protect, Step 2 situate it (the five lines, carrying the three IDeaLs change intents), Step 3 the standing brief, Step 4 how it speaks and how much it acts, Step 5 the action it guards (Orientation), Step 6 the mindset it protects (Disposition), Step 7 tune the signal (Excitation), Step 8 memory and fade, and Step 9 chair the Council (protocol only).
- **Outputs:** the three the appendix names, a clean standing brief, a config card shaped like the archetype cards, and a pasteable system prompt for a frontier assistant. Plus the standing readers' audit built in.
- **Capability archetypes:** the studio offers the five capability briefs as starting templates (the four capabilities plus the Council), each carrying its philosophy, its AI system, its two modes, and its felt signal, exactly as the appendix sets them out.
- **Fade by design:** the studio should track the fade signal. A dæmon built to become unnecessary is the book's signature, and the product must honor it rather than maximize engagement against it.
- **Phase:** launch feature. It is the reason a creative joins and the supply side of the Marketplace.

### 8.5 ACI Council

**What it is:** an invitation-only body for ACI luminaries and partners, with exclusive influence on the institute, leveraging ACI research.

- **Access:** invite-only, entitlement-gated, hidden from members without it. Not a paid tier.
- **What members do:** shape institute direction, curate and commission research, convene on questions of practice, and lend authority to the field. Distinct from the book's in-scenario Creative Council of dæmons, though it borrows the name and spirit of convening the strongest voices around a shared object.

**Proposed charter (from advisory-board practice, to adopt and refine).** An advisory council guides and lends authority. It does not govern the company, so keep it advisory to protect clarity and reduce liability.

- **Purpose.** Advise on direction, research priorities, standards of practice, and partnerships. Advisory, not fiduciary.
- **Seats.** Start small, roughly 7 to 12 members, a workable size for a real conversation. Seek a mix of creative practice, research (anchored by the SUES ACI Lab), education, industry, and the Chinese and English communities both.
- **Terms.** Two-year terms, renewable once, staggered so the Council does not turn over at once. A named chair, most naturally a founder at the start.
- **Cadence.** Meet two to four times a year, plus an async workspace. Light duties, real influence.
- **Selection.** Founders nominate the founding cohort, the Council nominates thereafter, on a clear contribution rationale.
- **What members get.** Early access to research, a named public role, and a genuine hand in the institute's direction.
- **Space:** a private workspace, a published research agenda, and this light governance model.
- `[CONFIRM]` seat count, the founding roster, and the chair.
- **Phase:** early and lightweight (a private space and a named roster), formalized as the institute matures.

### 8.6 Tech Advisor

**What it is:** a guide, inspired by Figure 1.6, that helps members become multi-model, choosing the right solution for the right creative need.

- **The idea from Figure 1.6:** creative work now draws on several model families, World Models for coherent space and simulation, Large Language Models for language and pattern, Causal Models for why-questions and what-if reasoning, and Diffusion Models for image synthesis, orchestrated rather than used one at a time.
- **What it does:** the member describes a creative need or a design object, and the advisor maps it to the capability at stake (via Figure 5.3) and the model family suited to it (via Figure 1.6), naming what each family offers and what it subtracts, so the member chooses with agency rather than defaulting to one tool.
- **Relationship to the Gauge and Companions:** the Gauge says which capability to develop, the Tech Advisor says which model family that capability must learn to work beside, and the Companions studio builds the dæmon that keeps the practitioner in charge of it.
- **Phase:** Phase 2. Start as guided content mapping needs to model families, evolve toward an interactive advisor.

---

## 9. Technical build, integrations, and roadmap

### 9.1 Recommended stack

A recommendation, not a mandate. It favors fast public pages, a real application layer for the platform, and low operational burden.

- **Framework:** Next.js (React) for one codebase serving server-rendered public pages and the authenticated platform. Strong SEO, good performance, large talent pool. Its built-in internationalized routing supports the EN and CN requirement cleanly.
- **Localization (i18n):** a translation framework such as `next-intl` or `next-i18next`, with all copy in message catalogs (EN and CN), language-specific routes (`/en`, `/zh`), `hreflang` tags, and the shared bilingual glossary of framework terms. No user-facing text baked into components or images.
- **Content:** a headless CMS (Sanity or Contentful) with localization fields, so Mission, Frameworks, Research, and Education are authored in both languages without deploys.
- **Auth and accounts:** a managed provider (Clerk or Auth0) with single sign-on shared to aci-academy.org, so members cross between properties without a seam. Store language preference on the account.
- **Payments and subscriptions:** Stripe, for tiers, discounts, the student free tier, and marketplace payouts (Stripe Connect for rentals). Confirm China-facing payment needs (for example Alipay or WeChat Pay via Stripe) alongside cards.
- **Scheduling:** settled on **Google Calendar appointment scheduling**, embedded on Community and Advisory for Joseph's advisory and speaking bookings.
- **The Gauge:** implemented in the app with a chord library (D3), all content, including both languages, in a config object.
- **Analytics:** a privacy-respecting analytics tool (Plausible or GA4) plus event tracking on the Gauge and CTAs, and a CRM (HubSpot free tier to start) for advisory inquiries.
- **Hosting:** Vercel or similar. Managed, fast, low overhead. Confirm acceptable performance for CN visitors, and consider a China-reachable delivery path if that audience grows.

### 9.2 Key integrations

- **www.josephpress.com** linked from Joseph's Community bio and photo.
- **www.aci-academy.org** for programs and enrollment, shared account, design system, and language preference.
- **Google Calendar appointment scheduling** for advisory and speaking bookings.
- **Stripe** for membership and, in Phase 2, marketplace payouts.
- **Email** for the research digest, Gauge results, and nurture. `[CONFIRM]` platform (for example Mailchimp or ConvertKit), with CN-capable sending.

### 9.3 Roadmap and phasing

**Phase 0, foundation (this brief).** Positioning, IA, design system, and the Gauge question set. Done or in progress here.

**Phase 1, public launch (the money spine).** Home, Mission, Frameworks and Scenarios, Community (with Joseph's bio, Google scheduler, endorsers, speaking and advisory contact), Research hub, Education overview linking to aci-academy.org, Advisory with booking, the Book page, Join with tiers, and the ACI Gauge with the chord diagram built. Bilingual EN and CN, accounts, Stripe, and My Gauge. This is a complete, revenue-capable site.

**Phase 2, the platform.** Creative Community profiles and gigs board, Creative Companions studio (the nine-step cycle), the ACI Council private space, and the Tech Advisor as guided content. Membership deepens.

**Phase 3, the marketplace economy.** Dæmon Marketplace with leveling, rentals, take rate, and the IP and merchandise option. Tech Advisor becomes interactive. This phase depends on a population of practiced dæmons from Phase 2.

Sequencing logic: sell advisory and memberships before building the marketplace. Revenue first, ecosystem second, economy third.

---

## 10. Decision log (resolved in this version)

Your answers to the version 0.1 decisions, and where each now lives in the brief. A short list of items still needing a value from you follows, marked `[CONFIRM]`.

| # | Decision | Resolution | Where |
|---|---|---|---|
| 1 | Prices | Research and propose tiers, implement only after education and creative-community pilot feedback. Benchmarked proposals given, launch free or low-cost then price in. | 1.3, 7.1 to 7.3 |
| 2 | Scheduler | Google Calendar appointment scheduling. Settled. | 4.4, 4.7, 9.1 |
| 3 | Launch experts and curation | You, Yilin, and endorsers on Community. Research curation led by the SUES School of Design ACI Lab, monthly to start. | 4.4, 4.5 |
| 4 | Programs | Proposed launch set: Foundations, Design Your Dæmon, Practitioner Cohort, Educators and Researchers, Organizational. | 4.6 |
| 5 | Advisory proof | Launch on the book, framework, endorsers, your background, and the SUES ACI Lab. Add pilot notes then case studies over time. | 4.7 |
| 6 | Gauge length | Keep five questions per capability (24 items). Editorial pass stays yours. | 6.1 |
| 7 | Council charter | Proposed advisory charter: 7 to 12 seats, two-year staggered terms, a chair, quarterly cadence. | 8.5 |
| 8 | Marketplace strength | Proposed leveling model (practice depth, verified outcomes, peer endorsement), to refine with the ACI Lab this semester. | 8.3 |
| 9 | Typography | Fraunces and Inter, paired with Noto Serif and Sans SC for Chinese. Settled. | 3.2 |
| 10 | Trailing "3." | Ignored per your note. Added instead: bilingual EN and CN across the site. | 0, 3.7, 9 |

### Still needing a value from you (`[CONFIRM]`)

- The final endorser list and permission to display (Community).
- The named SUES ACI Lab research editor and the lab's formal title (Research).
- Final program names and which ship at launch (Education).
- The owner of the Chinese terminology, likely Yilin with the ACI Lab (bilingual glossary).
- Per-tier entitlements once pilot pricing is set (member platform).
- The marketplace leveling rubric after the semester's research.
- Council seat count, founding roster, and chair.
- Email platform choice, CN-capable.

---

## Appendix A. Framework reference (from the manuscript, for builders)

The four capabilities, their aspects, the AI architecture each meets, and the offer-and-avoid pair, from Figure 5.3. Colors are the Gauge and brand colors.

| Capability | Aspect | Architecture | Offers | Avoids | Color |
|---|---|---|---|---|---|
| Extended Engagement | Shape | World Models | immersion | presence | `#3E6EA5` blue |
| Aesthetic Awareness | Style | Large Language Models | fluency | struggle | `#6E7B3D` olive |
| Adaptive Coherence | Story | Causal Models | logic | inquiry | `#5E4B8B` purple |
| Expressive Influence | Statement | Diffusion Models | reach | synthesis | `#C8721F` orange |

The field spans two axes, Mens (mind, thinking: Intention and Realization) and Membra (body, sensing: Disposition and Orientation), activated at the center by Manus (the making hand), where the Design Object sits. The Creative Council convenes the four capabilities into a single capacity. This is Agentic Creative Intelligence.

*End of brief, version 0.1.*
