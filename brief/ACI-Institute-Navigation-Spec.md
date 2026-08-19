# ACI Institute: Navigation and Information Architecture Specification

**Property:** www.aci-institute.org
**Prepared for:** Joseph Press, co-author, *Agentic Creative Intelligence* (Press and Wang)
**Prepared as:** a stack- and style-independent navigation spec, ready to hand to design and build
**Date:** 14 August 2026
**Version:** 1.1 (adds ACI Studio and ACI Lab, calibration in the Lab, the My journey recommendation, the finalized-framework reconciliation, and the pilot and disciplines confirmations)

---

## 0. What this document is, and how it relates to the earlier briefs

This spec reorganizes the site around the book's three parts, so that engaging with the book becomes the experience. It governs navigation and information architecture only.

- It **supersedes** the marketing information architecture in the Website Design Brief v0.3, Section 2 (the Home, Mission, Frameworks, Research, Community sitemap).
- It **inherits unchanged** from v0.3: the framework language, the design tokens (Section 3.1 and 3.2), the Gauge question bank and scoring (Section 6), the member-platform component definitions (Section 8), and the monetization logic (Section 7).
- It **honors** the Phase 1 Scope Addendum: static-first, no login, content in JSON, copy in EN and CN message objects, one folder per route.
- It is **independent of stack and visual style**, so it holds whether the site stays on GitHub Pages or moves to a framework, and whatever the eventual design brief decides for the look.

**Framework canon, settled.** The field of creative capacity spans two axes, **Mens** (mind, thinking: Intention and Realization) and **Membra** (body, sensing: Disposition and Orientation), activated at the center by **Manus**, the making hand, where the design object sits. This supersedes the two-axis Mens and Manus description in the June 2026 PDF in the repository. All navigation and copy use the Mens, Membra, Manus scheme.

---

## 1. Principles

Six principles govern every decision below.

1. **User-centric, a journey not a brochure.** The book is author-first: it sets out the authors' theory, exemplars, and scenarios. The site inverts this to reader-first. It addresses the visitor in the second person and organizes around what the visitor does: understand the framework, assess yourself, plan, practice in your discipline, apply it to systemic change. The book's chapter order is not the site's order; the user's goals are. The developmental plan and My journey are the mechanisms that keep the site about the visitor. Fast paths exist for people who know where they are going.

2. **Three registers, braided everywhere.** Each part serves the intellectual (what ACI is and why), the practical (assess, plan, design, forecast), and the inspirational (practitioner exemplars, near-future scenarios, the archetype art). A part that carries only one register is incomplete.

3. **The 4→1 motif is the signature.** Four resolving into one is the book's own structure and the site's core pattern: four capabilities to one capacity, four aspects to one design object, four AI models to one orchestration, four archetypes to one Council, across the five practitioners and five philosophies of Part I. One repeating shape carries the framework and gives the site an identity drawn from the work rather than a template. The one is an integration held as a single capacity, not a convergence. The Creative Council keeps the four in contest and integrates through the practitioner's judgment. Per the August 2026 archetype QA, convergence is the machine's seductive offer, so it is never the site's resolution.

4. **One primary action recurs and deepens.** Design your dæmon appears at every level: one capability in Part I, your discipline in Part II, a Council in Part III. The recurrence makes the practice cumulative.

5. **The companion carries the visitor.** A developmental plan and a dæmon, both begun in Part I, travel with the visitor into Parts II and III. This is the connective tissue that makes three sections feel like one journey.

6. **Depth before breadth.** Build one complete vertical slice first (all of Part I, one Part II discipline, one Part III story), then let the rest inherit the pattern. The risk of a three-part spine is that exposing everything at once flattens the journey back into a table of contents.

7. **The capabilities, framed by three influences.** The four creative capabilities sit at the center. Each one is informed by creative practices and their inherent tensions, amplified by the AI models when a practitioner uses them with agency instead of by default, since blind use numbs creative expression, and inspired by both an iconic practitioner who embodies it and the Chinese philosophy of practice, which is a mindset before it is a toolset. Every capability is presented through these influences at once, so practice, models, practitioners, and philosophy stay first-class and never decorative. Understanding a capability this way leads to the payoff: the practitioner designs a dæmon to develop that capability. The four influences are the setup, and the dæmon is the move they make possible. This supersedes the earlier two-grounds framing.

---

## 2. Content alignment with the book (hard rule)

The book is the single source of truth for all site text. This is a build constraint, not a preference.

**Aligned substance, recast address.** The two instructions, align with the book and be user-centric, resolve cleanly by separating what is said from how it is addressed. Framework terms, claims, and figures are verbatim from the book. The voice and sequence are recast from the book's author-first exposition into the site's reader-first journey: second person, ordered by user goals. Alignment governs the substance; user-centricity governs the address and the order. The practitioner exemplars serve as mirrors for the visitor, not as the authors' showcase.

- **Framework terms are verbatim.** The field, the two axes, the making hand, the four capabilities, the four aspects, the four architectures, the offers-and-avoids pairs, the two modes per capability, the excitations, the dæmon, the design object, and the Creative Council all use the book's exact wording, matching Figures 5.3 and P1.2 and the Glossary. No paraphrase into new coinages.
- **Governance.** Content is checked against the ACI style and canon skills (`aci-v11-canon`, `aci-style-rules`, `aci-mechanical-floor`, `voice-check`) and against the manuscript itself. House style holds on the site: the word is dæmon with the ligature, no em dashes, US spelling, plain and exact, no hype.
- **Teaser depth for the framework pages.** Public pages give enough of the framework to be useful and credible, then send the serious reader to the book. They are a good trailer, never a leak. (v0.3 Section 4.3.)
- **Verification step.** Before any framework or scenario page ships, its text is diffed against the book source. Signals and named practitioners in Part II follow the `aci-signal-evidence` discipline.

**Source-of-truth hierarchy.** The materials in hand disagree because the framework is still settling. For site content the order of authority is: (1) the finalized archetype cards and the updated Figures 5.3 and P1.2 as recorded in the permissions workbook, (2) the current master manuscript, (3) earlier drafts. The June 2026 PDF in the repository and the offers-and-avoids in the v0.3 design brief Appendix A are both superseded where they conflict with the finalized cards.

**Volatile terms, do not hardcode until confirmed.** Per the QA of 11 August 2026 (master versus final archetype cards), the following changed and must be taken from the finalized cards, not from the PDF or v0.3:

- **The offers-and-avoids pairs.** World Models offer immersion and feign feelings (was avoids presence). Large Language Models offer fluency and avoid apophaticism (was struggle). Causal Models offer logic and avoid serendipity (was inquiry). Diffusion offers reach and avoids conviction (was synthesis). Orchestration offers convergence and avoids contradiction. These live in Figure 5.3 and P1.2 and the permissions workbook, not in prose.
- **Chapter 5.** New title Cultivating Creative Agency (was Creative Convergence). The Council's two modes are Cultivation (內修, Nèi Xiū) and Manifestation (外現, Wài Xiàn), replacing Inner Work and Convergence. The four capabilities stay in contest and never settle.
- **The five excitations:** the Unreachable, the Unfamiliar, the Untethered, the Unyielding, the Unchallenged. Expressive Influence carries the Unyielding. Serendipity is now what Causal Models avoid, so the v0.3 Gauge framing of serendipity as the Expressive Influence growth edge is superseded.
- **Register.** Friction now belongs to Chapter 4 (Expressive Influence); Chapter 5 uses contest and competition. Keep the two apart in site copy.

**Consequence for the live site.** The current Mission page states the old offers-and-avoids (presence, struggle, inquiry, synthesis). This copy is now outdated and must be reconciled to the finalized cards before or as it migrates into Part I. (Done, 14 August 2026: the Mission cap definitions now read feign feeling, apophaticism, serendipity, and conviction.)

**One canonical data file.** The finalized framework values (capabilities, aspects, architectures, offers-and-avoids, modes, excitations, philosophies, colors, and the convergence layer) are centralized in `assets/content/framework.json`. Every framework-facing page reads from it, so the site stays aligned with the book from one place, and the CN glossary and any later corrections land in a single file.

---

## 3. Global navigation model

### 3.1 Primary navigation (the three doors)

The persistent header carries three primary destinations and the recurring actions.

- **The Framework** (Part I)
- **In Practice** (Part II)
- **For Change** (Part III)
- A visually distinct **Take the Gauge** action (the assess step of Part I, surfaced globally as the fastest way in)
- **EN / CN** language switch (already built)
- A **My journey** control once a visitor has a plan or a dæmon (see 3.4)

Design your dæmon is not a top-level nav item. It lives inside each part at the point of practice, and is reachable from a Gauge result. This keeps it a consequence of the journey rather than a detached tool.

### 3.2 The supporting ring (secondary)

Always reachable from a header utility menu and the footer, never on the main path:

- **The Book**, the anchor and the credibility asset
- **Community and Authors**, the people and the SUES School of Design ACI Lab

Research is no longer a standalone supporting page. Its curated feed moves into ACI Lab (Section 3.5), the home of calibration, testing, and research.

Deferred to a later phase, designed so they slot in without a redesign: **Advisory**, **Join / Membership**. (Phase 1 Scope Addendum defers these.)

### 3.3 Wayfinding

- **Where am I in the journey.** A persistent, quiet indicator of Part I, II, or III, so the visitor always knows their place on the path.
- **The 4→1 motif as a device.** The four-petal field and the decagon design object (already the brand mark) are the home glyph and the recurring wayfinding cue.
- **The graceful bilingual state.** An untranslated key shows the English fallback, never a broken page. (Already implemented; keep it.)
- **The phase state.** Sections not yet built show an honest "coming in a later phase" state, not a dead link.

### 3.4 The companion (My journey)

A lightweight state that holds the visitor's developmental plan and any dæmon they have designed.

- **Phase 1 (recommended):** hold the passport locally in the browser (the build already uses local storage for language), with a one-click export (download the intake JSON, email the result) and a clear "saved on this device" note, so nothing is lost before accounts exist. No account, no server. Shape the data so it ports to an account unchanged at migration.
- **Later:** account-backed, so the plan and dæmons persist and the field can be re-assessed over time (the v0.3 My Gauge idea, widened to the whole journey). Longitudinal re-assessment lives in ACI Lab (Section 3.5).
- It surfaces in the header as **My journey** once a plan or dæmon exists, and it is what makes Parts II and III feel addressed to this particular visitor.

### 3.5 The two workspaces: ACI Studio and ACI Lab

The journey feeds two named workspaces, always reachable, each pairing the other: one makes, one tests. They are the site's equivalents of a design studio and its evaluation lab, and they mirror the book's own turning cycle of making and reflecting.

- **ACI Studio, where making happens.** The home of the recurring design-your-dæmon action, entered at three depths (a capability in Part I, a discipline in Part II, a Council in Part III), plus prototyping and creative design work. This is where the practitioner produces.
- **ACI Lab, where testing and improvement happen.** The home of calibration (the Gauge), longitudinal re-assessment (My journey over time), the curated research feed, and the pilot and experiment spaces run with the SUES School of Design ACI Lab. This is where the practice, and the instruments themselves, are examined and improved.

**Calibration in the Lab, validated.** Placing calibration in ACI Lab as well as in Part I is coherent and stays user-centric, provided the two moments are framed distinctly. The **first** calibration belongs to Part I's assess step, presented in the learning journey as self-discovery ("measure your field"); a first-time visitor never needs to understand "the Lab" to take it. **Repeat and experimental** calibration belongs to ACI Lab: re-assess over time, watch the field widen, try instrument variants, and contribute feedback that refines the Gauge. One instrument, two entry framings. This gives novices a clean journey and gives returning practitioners and researchers a real reason to enter the Lab.

**Proposed refinement.** Treat the Gauge instrument's canonical home as ACI Lab, and have Part I's assess step deep-link into it in a developmental framing. This keeps a single instrument and single data model, avoids a fork between "the Part I Gauge" and "the Lab Gauge," and lets My journey, pilots, and instrument versions all sit in one place.

**Placement in navigation.** The three parts stay the primary journey navigation. ACI Studio and ACI Lab are persistent workspaces, reachable from the header actions, the footer, and from each part at the point of making or assessing, rather than competing with the three doors. Confirm whether you want them promoted to full primary-nav items or kept as persistent workspaces.

---

## 4. Sitemap

Routes follow the one-folder-per-route convention, named as the future URL.

```
/                         Home, the invitation (entry to the journey)

/framework/               PART I overview + Learn (the 4→1 matrix)
  → assess                Part I's assess step opens the Gauge (canonical route /gauge/, under ACI Lab)
/plan/                    The developmental plan (the passport)

/practice/                PART II overview (what a discipline is, the skill lens)
/practice/fine-arts/      the eight discipline pages, each:
/practice/built-arts/       forecast and insights, practitioner stories, design your dæmon
/practice/tangible-arts/
/practice/moving-arts/
/practice/sensory-arts/
/practice/playful-arts/
/practice/social-arts/
/practice/reflective-arts/

/change/                  PART III overview (scaffolding systemic transformation)
/change/ideals/           the IDeaLs scaffold
/change/stories/          practitioner stories (Sofia, BetterFutures, Ciudad Neza)

/studio/                  ACI STUDIO, where making happens (design your dæmon, prototypes)

/lab/                     ACI LAB, where testing and improvement happen
/gauge/                   Calibration, the ACI Gauge (the Lab's instrument; deep-linked from Part I assess)
/lab/my-journey/          Longitudinal re-assessment and saved dæmons (local in Phase 1)
/lab/research/            Curated research feed (JSON-driven; was the Research page)

/book/                    supporting ring
/community/               supporting ring (authors, Lab, endorsers)

/contact/  /privacy/  /terms/  /accessibility/  /404      utility

Deferred: /advisory/  /join/
Global: EN / CN switch on every page.
```

Note on ACI Studio: it is one instrument entered at three depths. From Part I it opens on a single capability (a pattern). From a discipline it opens pre-set to that discipline. From Part III it opens as a Council (a protocol). The Gauge result pre-fills the intake in every case.

Note on ACI Lab: the Gauge lives here as the calibration instrument, with Part I's assess step deep-linking into it. The Lab also holds longitudinal re-assessment (My journey over time), the curated research feed, and pilot and experiment spaces. Some Lab sub-areas may be gated for active pilots and the SUES ACI Lab; confirm which areas are public and which are gated.

---

## 5. Primary journeys (wireflow)

Four journeys, in priority order. Each is a sequence of routes and moments.

**A. The learner (default).** `/` invitation → `/framework/` learn the field and the 4→1 matrix → `/gauge/` assess → `/plan/` a developmental plan naming the capability to grow → into `/practice/<discipline>/` to practice it → `/studio/` design a dæmon for that discipline → toward `/change/` when the work is systemic. The plan is created at step three and carried the rest of the way.

**B. The practitioner (fast path).** `/` or header → straight to `/practice/` → their discipline → forecast, story, and design a dæmon. May take the Gauge later to deepen. Low friction, no forced framework lesson.

**C. The changemaker.** `/` or header → `/change/` → the IDeaLs scaffold to scope a complex challenge → a Part III story for a worked example → a Council in the studio. This is the systemic entry, for organizations and educators.

**D. The returning visitor.** **My journey** → re-open the plan or a saved dæmon → re-assess the field and watch it widen. The reason to come back.

---

## 6. Part-by-part information architecture

Each part has one overview page (the door) and a consistent internal rhythm. Part I runs as a sequence. Parts II and III present parallel facets.

### 6.1 Part I, The Framework (`/framework/`)

**Job:** teach the framework, let the visitor assess against it, and produce a developmental plan. Learn, assess, plan.

**Overview and Learn (`/framework/`).** The intellectual core, built as one interactive 4→1 matrix rather than five separate lessons, because the four capabilities, four aspects, four models, and four archetypes are the same four rows read through different lenses, each resolving to its one.

The learn page carries, in order:

1. **The field and the making hand.** Mens and Membra as the two axes, Manus at the center where the design object sits, the whole activated by making. One diagram (Figure P1.2 or a clean redraw), a few plain sentences. This is where the current Mission page's field content migrates.
2. **The four capabilities, one capacity.** Extended Engagement, Aesthetic Awareness, Adaptive Coherence, Expressive Influence, each in its fixed color, each resolving into the single integrated capacity that is ACI. The capability card is the repeating unit.
3. **The four aspects, one design object.** Shape, Style, Story, Statement, the four dimensions a design artifact carries, joined with its shared life into the design object.
4. **The four AI models, one orchestration.** World Models, Large Language Models, Causal Models, Diffusion, each meeting one capability with its offer-and-avoid pair (from Figure 5.3, final-card values per Section 2), resolving into the multi-model orchestration of Figure 1.6. The orchestration itself offers convergence and avoids contradiction, so the site presents multi-model fluency as a temptation to hold in check, not a goal.
5. **The four archetypes, one Council.** The four capability dæmon archetypes, resolving into the Creative Council that convenes them around one design object.
6. **Five practitioners, five philosophies.** The iconic practitioner exemplar and the Chinese philosophy that anchor each of the five Part I chapters, including the convergence chapter, shown as the inspirational spine beneath the matrix. Philosophies per the manuscript: zhīxíng héyī, guān and tiānrén héyī, wú wéi, gǎnyìng, wénrén.

Each "4" element uses the same capability-card pattern and the four fixed colors; each "1" is the convergence beat. Every card links to the Gauge to self-assess that capability, and to the book for the full treatment.

**Assess (`/gauge/`).** The ACI Gauge, nested here as the assess step and surfaced globally as the fast way in. Part A situates the work on the IDeaLs scaffold and names the design object. Part B measures the four capabilities across their two modes, the felt excitation, and the aspect. The output is the field diagram plus a developmental reading. The Gauge feeds both the plan and the dæmon intake. Content and scoring are fixed in v0.3 Section 6; this spec changes only where it lives. The Gauge instrument's home is ACI Lab (Section 3.5); this assess step deep-links into it in a developmental framing, and returning practitioners re-calibrate from the Lab.

**Plan (`/plan/`).** The developmental plan, the passport. From the Gauge reading it names where to widen (the thinner mode of the weakest capability), which archetype to design a dæmon around, which discipline in Part II foregrounds that capability, and, later, which program fits. The plan is saved to My journey and is the object the rest of the journey addresses.

**Primary action:** Take the Gauge. **Then:** design your dæmon, or go to your discipline.

### 6.2 Part II, In Practice (`/practice/`)

**Job:** show ACI at work in the creative disciplines, indexed by discipline, with the meaning-making skill as the cross-cutting lens.

**Overview (`/practice/`).**

- What a creative discipline is, in the book's terms.
- The cross-cutting lens: leading **with** creativity and leading **for** creativity, the skills for cultivating meaning in any discipline. This is the frame the visitor reads each discipline through, not the entry index.
- The **discipline chooser**: the eight disciplines of Part II (Chapters 6 to 13). A person finds themselves fast.

**Discipline template (one page per discipline, eight in all).** Each discipline page carries three facets, the same three everywhere:

1. **Forecast and insights.** The near-future forecast that opens the chapter, with its verified signals. (Governed by `aci-signal-evidence`.)
2. **Practitioner stories.** The worked dæmons for that discipline, two per discipline in the book (sixteen across Part II), each a named practitioner instantiating an archetype against the AI system of a real discipline.
3. **Design your dæmon.** The studio, opened pre-set to this discipline, so the visitor practices where they already work.

The eight disciplines: Fine, Built, Tangible, Moving, Sensory, Playful, Social, and Reflective Arts. (See open question 9.2 on the seven-versus-eight count in v0.3.)

**Cross-link:** a Part I plan that names a capability routes here to the disciplines that foreground it.

**Primary action:** design your dæmon for your discipline.

### 6.3 Part III, For Change (`/change/`)

**Job:** show how ACI scaffolds transformation in systemically complex situations, where individual capability is necessary but not sufficient.

**Overview (`/change/`).** The systemic claim: why complex change needs a scaffold and a Council, not one strong capability. The register is collective and applied.

1. **The IDeaLs scaffold (`/change/ideals/`).** The method for scoping a complex challenge, the same frame Part A of the Gauge already uses (Aspiration, Innovation as meaning, Intervention, Cultivation). Here it is applied to a systemic situation rather than a personal one.
2. **Practitioner stories (`/change/stories/`).** The Part III cast: Sofia, the cooperative BetterFutures, home eldercare in Ciudad Nezahualcóyotl. Framed as invitations, non-spoiler, ending on read the book.
3. **Design your dæmons.** The studio opened as a Council: convene one dæmon per capability around one shared design object, chair the friction, integrate through your own judgment.

**Primary action:** scope a challenge with the scaffold, then convene a Council.

---

## 7. Recurring components

Specify these once, reuse across parts. The design system inventory in v0.3 Section 3.5 still applies; these are the journey-specific additions.

- **The 4→1 module.** Four elements in their fixed colors resolving into one convergence. Used for capabilities, aspects, models, and archetypes. One interaction pattern, one visual, four contents. This is the site's signature and should be specified in the design brief as such.
- **The capability card.** Name, aspect, the AI architecture it meets, its offer-and-avoid pair, its two modes, its excitation, in its fixed color. Links to the Gauge and the book. (Colors from Figure 5.3, fixed.)
- **The Gauge (assess).** As v0.3 Section 6. Now a component of Part I.
- **The Design-Your-Dæmon studio.** The nine-step cycle from the book Appendix, entered at three depths (capability, discipline, Council). Outputs the standing brief, the config card, and the pasteable system prompt, plus the standing readers' audit and the fade signal. The existing prototype at `/prototype/daemon-studio/` is the flow reference.
- **The developmental plan (passport).** Created from a Gauge reading, saved to My journey, addressed by Parts II and III.
- **The practitioner-story pattern.** Exemplar, the capability or discipline they hold, the AI system they face, the dæmon they design. Used in Part I (the five exemplars), Part II (the sixteen dæmons), and Part III (the cast).
- **The forecast pattern.** The near-future forecast that opens each Part II discipline, with verified signals and the discipline's design object.

---

## 8. Imagery and figures

Images will be uploaded to the repository. This is the plan for where they live and where they appear, so the site's visual world stays continuous with the book.

**Folder convention.** Compress before committing (the infrastructure brief flags an oversized asset in the sibling repo). Live text over figures, never text baked into an image, so both languages and accessibility are served.

- `assets/pix/` for people and photographs (already holds the author photos).
- `assets/figures/` proposed, for the book's canonical graphics.
- `assets/archetypes/` proposed, for the dæmon and chapter illustrations.

**Canonical graphics, and where each appears:**

| Figure | What it is | Where in the IA |
|---|---|---|
| Figure P1.2 | The Field of Creative Capability | Part I learn, the field section; the Gauge result echoes it |
| Figure 5.3 | The Ecology of Creative Capabilities | Part I learn, the 4→1 matrix; source of the fixed colors and offer-and-avoid pairs |
| Figure 1.6 | AI Models and the Learning Lifecycle | Part I learn, the four models to one orchestration |
| Figure A.1 | The dæmon design cycle | The studio |
| Figure P2.1 | The terrain of Part II | Part II overview, the discipline chooser |

**Illustrations:**

- The **archetype dæmon illustrations** (the book's archetype art) sit on the capability cards and in the studio's archetype templates.
- The **Part II chapter cover posters** (the editorial-collage posters, one per discipline) head each discipline page. (See the `aci-chapter-illustration` method.)

**Consistency rule.** The site's look and feel is anchored to the book: its figures, its archetype art, its editorial-poster typography, and the parchment palette already fixed in the design tokens. The site should read as continuous with the book, not detached from it. The eventual design brief builds a state-of-the-art expression on this foundation.

---

## 9. Phase mapping and the pilot slice

### 9.1 How the existing build maps

- **Home (`/`)** becomes the invitation, the entry to the journey. The route stays.
- **Mission (`/mission/`)** content migrates into Part I learn (the field, the capabilities, the dæmon, why now). The route can redirect to `/framework/` or remain as a short standalone in the supporting ring.
- **Community (`/community/`)** stays, in the supporting ring, unchanged.
- **The shell** (header, footer, language switch, design tokens, i18n loader, endorsers loader) is reused as is. The header nav changes from the current four-item Phase 1 nav to the three doors plus the Gauge action.
- **A gap to close regardless of this spec:** the i18n catalogs currently hold chrome and nav keys only, so page-body copy falls back to inline English. Bilingual parity needs the page-body keys added to `en.json` and `zh.json` as pages are built.

### 9.2 The recommended pilot slice (depth before breadth)

Build one complete vertical to prove the pattern, then repeat:

1. **All of Part I:** the learn matrix, the Gauge, and the plan.
2. **One Part II discipline,** chosen for signal strength and closeness to the authors, fully built with forecast, stories, and studio.
3. **One Part III story,** built as the systemic example with the IDeaLs scaffold.

Everything else inherits the templates.

---

## 10. Decisions and open questions (scope is a moving target)

**Resolved in this pass (14 August 2026):**

- **Pilot slice discipline:** the Built Arts (Chapter 7).
- **Part II disciplines:** eight, confirmed (Chapters 6 to 13: Fine, Built, Tangible, Moving, Sensory, Playful, Social, Reflective Arts), matching the book and the sixteen worked dæmons.
- **My journey in Phase 1:** held locally in the browser with export, account-backed later. (Section 3.4.)
- **Studio and Lab naming:** ACI Studio, where making happens; ACI Lab, where calibration, testing, and research happen. Calibration lives in both Part I and the Lab, framed distinctly. (Section 3.5.)
- **Framework values:** the finalized archetype cards were read and `assets/content/framework.json` reconciled to them (taglines, mode names Engagement/Extension and the rest, excitations, offers-and-avoids, the Council's Cultivation and Manifestation). The live Mission copy is reconciled.
- **CN terminology:** placeholders stand for Yilin and the SUES ACI Lab to validate; the framework values are centralized in `framework.json` and the i18n catalogs for their sign-off.

**Still open:**

- **Editorial pass** on the 24 Gauge items, carried forward from the addendum. This one is yours.
- **Further sources**, if they exist beyond the figures and the archetype cards already in the folder: the latest master manuscript and a permissions workbook with updated Figure 5.3 and P1.2 captions.
- **The Mens-versus-Membra attribution of the capability modes.** The cards name the two modes per capability (Engagement/Extension, and so on) and place them left and right, matching the Disposition and Orientation poles on Figure P1.2, but the sources describe the axis attribution differently. Confirm before any copy labels the modes by axis.
- **ACI Lab access:** which sub-areas are public and which are gated for pilots and the SUES ACI Lab.
- **Studio and Lab placement:** promoted to primary navigation, or kept as persistent workspaces. (Section 3.5.)
- **The Chinese treatment of the dæmon ligature** (from v0.3 Section 3.7).

---

*End of specification, version 1.1.*
