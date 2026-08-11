# ACI Institute: GitHub and Hosting Infrastructure Brief

**Property:** www.aci-institute.org
**Prepared for:** a new chat session, to be pasted or attached at the start
**Date:** 21 July 2026
**Scope:** repository, hosting, domain, file conventions, and the update workflow. Design and content are covered separately in the ACI Institute design brief.

---

## 0. What this document is for

This brief tells a new session exactly how Joseph's existing website is wired to GitHub, and how to reproduce that wiring for a second property at www.aci-institute.org. It exists because the working pattern was established across many sessions and is easy to break if an assistant guesses at it.

Read Sections 1 and 6 before touching anything. Section 6 contains a hard constraint that has caused real damage when ignored.

---

## 1. The working rule, stated first

**Claude writes and edits files. Claude never runs git commands.**

No `git add`, no `git commit`, no `git push`, no `git status`, no touching the `.git` directory. The sandbox that Claude runs in cannot clean up the lock files it creates, so a git command issued from a session leaves the repository locked and breaks the next manual commit in GitHub Desktop.

The division of labour is:

| Step | Who |
|---|---|
| Write, edit, and validate files in the local repo folder | Claude |
| Report which files changed and suggest a commit message | Claude |
| Review the diff, commit, and push | Joseph, in GitHub Desktop |
| Build and deploy | GitHub Pages, automatically on push |

Every session that writes to a repo should end by naming the exact files it changed, giving a suggested commit message, and telling Joseph to review, commit, and push in GitHub Desktop. This is already the ending convention of the Sino-Signals daily task, and it should be the ending convention here.

---

## 2. The existing pattern, as built

This is the setup for www.josephpress.com. It is the template.

**Repository**

- GitHub repo: `github.com/jpress123/jpress123.github.io`
- Branch: `main`
- Remote: HTTPS
- Git identity: Joseph Press, josephpress1@gmail.com
- Local path: `~/Documents/GitHub/jpress123.github.io`

**Hosting**

- GitHub Pages, serving from the `main` branch, root folder
- `CNAME` file at repo root containing the custom domain, which binds the domain to the repo
- `.nojekyll` file at repo root, an empty file that tells Pages to serve the HTML as written instead of running it through Jekyll
- No build step. What is committed is what is served.

**Structure**

Plain static HTML. One `index.html` at root, and each sub-property is a folder that becomes a URL path.

```
jpress123.github.io/
├── CNAME                  → www.josephpress.com
├── .nojekyll
├── index.html             → www.josephpress.com
├── aci-academy/
│   └── index.html         → www.josephpress.com/aci-academy/
└── sino-signals/
    ├── index.html         → www.josephpress.com/sino-signals/
    ├── signals-data.json
    └── linkedin-*.md, substack-*.md
```

**The data-driven microsite pattern, worth reusing**

Sino-Signals separates content from presentation. `index.html` fetches `signals-data.json` at runtime with a relative path and renders it client-side. Adding content means editing one JSON file, never the HTML. This works on GitHub Pages because the fetch is same-origin and static.

Any part of the ACI Institute site with a growing list (research items, programs, endorsers, Gauge questions) should follow this pattern. It keeps content edits safe and makes bilingual copy a matter of keys in a config object.

**Backups**

`~/Desktop/josephpress.com-backup/` holds a copy of the site plus `BACKUP_LOG.txt`, a running log of what changed and when. Useful, and worth repeating.

---

## 3. Why aci-institute.org needs its own repository

A GitHub Pages repository can carry only one custom domain, because the binding is the single `CNAME` file at its root. `jpress123.github.io` is already bound to www.josephpress.com. A second domain therefore requires a second repository.

**Create:** `github.com/jpress123/aci-institute`
**Local path:** `~/Documents/GitHub/aci-institute`
**Serves:** www.aci-institute.org

This is a project repository rather than a user repository, which changes nothing about how it is used. Without a custom domain it would serve at `jpress123.github.io/aci-institute/`, and that URL stays live as a useful staging address while DNS propagates.

---

## 4. Setup sequence

Joseph performs steps 1, 2, 5, 6, and 7. Claude can perform steps 3 and 4 once the folder exists locally and is mounted in Cowork.

**1. Create the repository.** On GitHub, new repository named `aci-institute`, public, with a README so it is not empty. Public is required for GitHub Pages on a free account.

**2. Clone it locally.** In GitHub Desktop, File, Clone Repository, and clone to `~/Documents/GitHub/aci-institute`. This keeps both properties side by side in the same GitHub folder.

**3. Add the two binding files at the repo root.**

`CNAME`, containing exactly one line and no trailing spaces:

```
www.aci-institute.org
```

`.nojekyll`, an empty file. Its presence is what matters.

**4. Add a placeholder `index.html`** so there is something to verify against before the real build begins.

**5. Enable GitHub Pages.** Repository Settings, Pages, Source set to Deploy from a branch, Branch set to `main`, folder set to `/ (root)`. The Custom domain field should populate from the `CNAME` file once it is pushed. Leave Enforce HTTPS unchecked until the certificate is issued, then check it.

**6. Configure DNS at the registrar.** The primary hostname is `www`, so the `www` record does the work and the apex redirects to it.

| Type | Name | Value |
|---|---|---|
| CNAME | `www` | `jpress123.github.io.` |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

Optionally add the IPv6 AAAA records on `@`: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`.

Note the trailing dot on the CNAME value. Some registrars require it, some add it automatically, and some reject it. Follow whichever form the registrar's own help text uses. Delete any parking or forwarding records the registrar created at purchase, since they will silently override the above.

**7. Wait, then secure.** DNS changes take up to 24 hours, though they are often live within an hour. Once GitHub Settings, Pages shows the domain as verified, check Enforce HTTPS. GitHub issues a Let's Encrypt certificate automatically and renews it.

---

## 5. Verification checklist

Work through this in order. Each line depends on the ones above it.

- `https://jpress123.github.io/aci-institute/` serves the placeholder page
- `dig www.aci-institute.org +short` returns `jpress123.github.io` followed by GitHub IPs
- Settings, Pages shows the custom domain with a green check and no DNS warning
- `http://www.aci-institute.org` loads the placeholder
- `http://aci-institute.org` redirects to the `www` hostname
- Enforce HTTPS is available, checked, and `https://www.aci-institute.org` loads without a certificate warning
- A trivial edit committed in GitHub Desktop appears live within about a minute

If Pages reports that the domain is already in use, the `CNAME` file is duplicated in another repository. Only one repository may claim a domain.

---

## 6. Conventions for this repository

**Files and paths**

- Lowercase, hyphenated file and folder names. No spaces, since they become URL-encoded and ugly.
- One folder per section, each with its own `index.html`, matching the pattern already used by `sino-signals` and `aci-academy`.
- Content that grows lives in JSON beside the HTML that renders it, not inside the HTML.
- Keep all user-facing copy, English and Chinese, in message objects rather than hard-coded in markup, so the bilingual requirement stays cheap.

**Assets**

Compress images before committing. The existing repo carries an 18 MB PNG that should have been a few hundred kilobytes, and a 2.8 MB photo was later reduced to 52 KB with no visible loss. Repository size is served to every visitor.

**Commit messages**

The current repository's history reads `ffff`, `asdf`, `hhh`, and `jhhjk`. That history cannot be searched, reviewed, or reverted with any confidence. Start this repository with a rule: one line, present tense, naming what changed and where.

Good: `Add Gauge question config with EN and CN copy`
Bad: `asdf`

Claude should propose a message in this form at the end of every session that writes files. Joseph can accept or edit it in GitHub Desktop.

**Cowork access**

For Claude to read or write the repository, `~/Documents/GitHub/aci-institute` must be mounted as a folder in the Cowork session. If a session reports that it cannot see the folder, that is the reason.

---

## 7. What GitHub Pages cannot do, and when to leave it

GitHub Pages serves static files. It runs no server-side code. That rules out, on this hosting:

- User accounts, sign-in, and sessions
- Stripe payments and subscription management
- A headless CMS with server-rendered content
- Any API route, database, or secret key, since everything in the repository is public
- Server-side rendering for SEO, though static HTML indexes perfectly well

Everything in the public marketing site works within these limits, including the ACI Gauge. The Gauge can run entirely client-side: questions in a JSON config, scoring in JavaScript, the chord diagram drawn with D3 in the browser, and results either shown immediately or emailed through a third-party form service. Saving a result to an account is the first feature that genuinely requires a server.

**The migration trigger.** When the member platform is built, meaning accounts, payments, or the Dæmon Marketplace, move hosting to Vercel or an equivalent. That move keeps the same GitHub repository and the same commit workflow. It adds a build step and changes where the domain's DNS points. Nothing written now is wasted, so long as the static site is built with clean separation between content and markup.

Plan for the move, and do not pre-build for it.

---

## 8. First message for the new chat

Paste this, with this document attached:

> I am building a new website at www.aci-institute.org. The domain is bought and DNS is not yet configured. Attached is the infrastructure brief describing how my existing site, www.josephpress.com, is wired to GitHub, and how to reproduce that for the new property. My separate design brief covers content and design.
>
> Read Section 1 first. You write and edit files. You never run git commands. I commit and push in GitHub Desktop.
>
> Start by walking me through Section 4, and tell me which steps I do and which you do.

---

*End of brief.*
