/* ACI Institute, shared shell.
   Renders the header and footer into every page, so markup stays in one place.
   Pages include this script and their own <main id="main">; the header is
   prepended and the footer appended. Labels come from the i18n catalog, with
   an English fallback seeded here so the chrome degrades gracefully if the
   catalog fails to load. Editors change copy in /assets/i18n/en.json. */
(function () {
  "use strict";

  // Phase 1 nav. Education and Advisory are deferred, so they are omitted here.
  // Their labels remain in the catalog for when they return in a later phase.
  var NAV = [
    ["nav.mission", "/mission/"],
    ["nav.frameworks", "/frameworks/"],
    ["nav.research", "/research/"],
    ["nav.community", "/community/"]
  ];

  /* English fallback for chrome only, so the header and footer never render
     empty or as raw keys. The canonical catalog is en.json. */
  var EN = {
    "brand.name": "ACI Institute",
    "nav.mission": "Mission", "nav.frameworks": "Frameworks", "nav.research": "Research",
    "nav.education": "Education", "nav.advisory": "Advisory", "nav.community": "Community",
    "cta.gauge": "Take the Gauge", "cta.join": "Join",
    "footer.tagline": "Cultivating creative expression and experience with AI, to reclaim human agency.",
    "footer.explore": "Explore", "footer.forYou": "For you", "footer.institute": "Institute",
    "foot.creatives": "Creatives", "foot.organizations": "Organizations", "foot.students": "Students",
    "foot.book": "The Book", "foot.join": "Join", "foot.contact": "Contact",
    "foot.josephpress": "Joseph Press", "foot.academy": "ACI Academy",
    "foot.privacy": "Privacy", "foot.terms": "Terms", "foot.accessibility": "Accessibility",
    "foot.rights": "© 2026 ACI Institute",
    "a11y.skip": "Skip to content", "a11y.menu": "Menu", "a11y.language": "Language"
  };
  function lbl(key) { return EN[key] || ""; }

  function el(html) {
    var tpl = document.createElement("template");
    tpl.innerHTML = html.trim();
    return tpl.content.firstElementChild;
  }
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function link(key, href) {
    return '<a href="' + href + '" data-i18n="' + key + '">' + esc(lbl(key)) + "</a>";
  }

  function decagon() {
    // A regular decagon, echoing the Design Object at the center of Figure 5.3.
    return '<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">' +
      '<path fill="var(--manus)" d="M12 1.5 18.17 3.51 21.99 8.76 21.99 15.24 18.17 20.49 ' +
      '12 22.5 5.83 20.49 2.01 15.24 2.01 8.76 5.83 3.51Z"/></svg>';
  }

  function langSwitch() {
    return '<div class="lang-switch" role="group" data-i18n-attr="aria-label:a11y.language" aria-label="Language">' +
      '<button type="button" data-lang="en">EN</button>' +
      '<button type="button" data-lang="zh">中文</button></div>';
  }

  function header() {
    return el(
      '<header class="site-header"><div class="header-inner wrap">' +
        '<a class="brand" href="/"><span class="brand-mark">' + decagon() + '</span>' +
          '<span class="brand-name" data-i18n="brand.name">' + esc(lbl("brand.name")) + '</span></a>' +
        '<button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" ' +
          'data-i18n-attr="aria-label:a11y.menu" aria-label="Menu">☰</button>' +
        '<nav class="site-nav" id="site-nav">' +
          NAV.map(function (n) { return link(n[0], n[1]); }).join("") +
        '</nav>' +
        '<div class="header-actions">' +
          '<a class="btn btn-primary" href="/gauge/" data-i18n="cta.gauge">' + esc(lbl("cta.gauge")) + '</a>' +
          '<a class="btn btn-quiet" href="/join/" data-i18n="cta.join">' + esc(lbl("cta.join")) + '</a>' +
          langSwitch() +
        '</div>' +
      '</div></header>'
    );
  }

  function footerCol(titleKey, links) {
    return '<nav class="footer-col"><h2 data-i18n="' + titleKey + '">' + esc(lbl(titleKey)) + '</h2>' +
      links.map(function (l) { return link(l[0], l[1]); }).join("") + '</nav>';
  }

  function footer() {
    return el(
      '<footer class="site-footer"><div class="footer-inner wrap">' +
        '<div class="footer-col footer-brand">' +
          '<span class="brand-name" data-i18n="brand.name">' + esc(lbl("brand.name")) + '</span>' +
          '<p class="footer-tagline" data-i18n="footer.tagline">' + esc(lbl("footer.tagline")) + '</p></div>' +
        footerCol("footer.explore", NAV.concat([["cta.gauge", "/gauge/"]])) +
        footerCol("footer.forYou", [
          ["foot.creatives", "/join/"], ["foot.organizations", "/join/"], ["foot.students", "/join/"]
        ]) +
        footerCol("footer.institute", [
          ["foot.book", "/book/"], ["foot.join", "/join/"], ["foot.contact", "/contact/"],
          ["foot.josephpress", "https://www.josephpress.com"], ["foot.academy", "https://www.aci-academy.org"]
        ]) +
        '<div class="footer-meta">' +
          '<div class="footer-legal">' +
            link("foot.privacy", "/privacy/") + link("foot.terms", "/terms/") +
            link("foot.accessibility", "/accessibility/") +
          '</div>' +
          langSwitch() +
          '<p class="footer-rights" data-i18n="foot.rights">' + esc(lbl("foot.rights")) + '</p>' +
        '</div>' +
      '</div></footer>'
    );
  }

  function markActive() {
    var here = location.pathname.replace(/index\.html$/, "");
    if (here.length > 1) here = here.replace(/\/$/, "") + "/";
    document.querySelectorAll(".site-nav a, .footer-col a").forEach(function (a) {
      var href = a.getAttribute("href") || "";
      if (href === here || (href !== "/" && here.indexOf(href) === 0)) {
        a.setAttribute("aria-current", "page");
      }
    });
  }

  function closeMenu() {
    document.body.classList.remove("nav-open");
    var t = document.querySelector(".nav-toggle");
    if (t) t.setAttribute("aria-expanded", "false");
  }

  function wire() {
    var toggle = document.querySelector(".nav-toggle");
    if (toggle) {
      toggle.addEventListener("click", function () {
        var open = document.body.classList.toggle("nav-open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }
    document.querySelectorAll(".lang-switch").forEach(function (group) {
      group.addEventListener("click", function (e) {
        var b = e.target.closest("[data-lang]");
        if (b && window.ACII18n) { window.ACII18n.setLang(b.getAttribute("data-lang")); closeMenu(); }
      });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && document.body.classList.contains("nav-open")) closeMenu();
    });
    document.addEventListener("click", function (e) {
      if (document.body.classList.contains("nav-open") && !e.target.closest(".site-header")) closeMenu();
    });
  }

  function render() {
    if (document.querySelector(".site-header")) return;
    document.body.appendChild(footer());
    document.body.insertBefore(header(), document.body.firstChild);
    var skip = el('<a class="skip-link" href="#main" data-i18n="a11y.skip">' + esc(lbl("a11y.skip")) + "</a>");
    document.body.insertBefore(skip, document.body.firstChild);
    markActive();
    wire();
  }

  document.addEventListener("DOMContentLoaded", function () {
    render();
    if (window.ACII18n) window.ACII18n.init();
  });

  window.ACIShell = { render: render, NAV: NAV };
})();
