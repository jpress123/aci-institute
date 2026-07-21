/* ACI Institute, shared shell.
   Renders the header and footer into every page, so markup stays in one place.
   Pages include this script and their own <main id="main">; the header is
   prepended and the footer appended. Labels come from the i18n catalog. */
(function () {
  "use strict";

  var NAV = [
    ["nav.mission", "/mission/"],
    ["nav.frameworks", "/frameworks/"],
    ["nav.research", "/research/"],
    ["nav.education", "/education/"],
    ["nav.advisory", "/advisory/"],
    ["nav.community", "/community/"]
  ];

  function el(html) {
    var tpl = document.createElement("template");
    tpl.innerHTML = html.trim();
    return tpl.content.firstElementChild;
  }

  function decagon() {
    // A regular decagon, echoing the Design Object at the center of Figure 5.3.
    return '<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">' +
      '<path fill="var(--manus)" d="M12 1.5 18.17 3.51 21.99 8.76 21.99 15.24 18.17 20.49 ' +
      '12 22.5 5.83 20.49 2.01 15.24 2.01 8.76 5.83 3.51Z"/></svg>';
  }

  function langSwitch() {
    return '<div class="lang-switch" role="group" data-i18n-attr="aria-label:a11y.language">' +
      '<button type="button" data-lang="en">EN</button>' +
      '<button type="button" data-lang="zh">中文</button></div>';
  }

  function header() {
    return el(
      '<header class="site-header"><div class="header-inner wrap">' +
        '<a class="brand" href="/"><span class="brand-mark">' + decagon() + '</span>' +
          '<span class="brand-name" data-i18n="brand.name">ACI Institute</span></a>' +
        '<button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" ' +
          'data-i18n-attr="aria-label:a11y.menu">☰</button>' +
        '<nav class="site-nav" id="site-nav">' +
          NAV.map(function (n) { return '<a href="' + n[1] + '" data-i18n="' + n[0] + '"></a>'; }).join("") +
        '</nav>' +
        '<div class="header-actions">' +
          '<a class="btn btn-primary" href="/gauge/" data-i18n="cta.gauge"></a>' +
          '<a class="btn btn-quiet" href="/join/" data-i18n="cta.join"></a>' +
          langSwitch() +
        '</div>' +
      '</div></header>'
    );
  }

  function footerCol(titleKey, links) {
    return '<nav class="footer-col"><h2 data-i18n="' + titleKey + '"></h2>' +
      links.map(function (l) { return '<a href="' + l[1] + '" data-i18n="' + l[0] + '"></a>'; }).join("") +
      '</nav>';
  }

  function footer() {
    return el(
      '<footer class="site-footer"><div class="footer-inner wrap">' +
        '<div class="footer-col footer-brand">' +
          '<span class="brand-name" data-i18n="brand.name">ACI Institute</span>' +
          '<p class="footer-tagline" data-i18n="footer.tagline"></p></div>' +
        footerCol("footer.explore", NAV.concat([["cta.gauge", "/gauge/"]])) +
        footerCol("footer.forYou", [
          ["foot.creatives", "/join/"],
          ["foot.organizations", "/join/"],
          ["foot.students", "/join/"]
        ]) +
        footerCol("footer.institute", [
          ["foot.book", "/book/"],
          ["foot.join", "/join/"],
          ["foot.contact", "/contact/"],
          ["foot.josephpress", "https://www.josephpress.com"],
          ["foot.academy", "https://www.aci-academy.org"]
        ]) +
        '<div class="footer-meta">' +
          '<div class="footer-legal">' +
            '<a href="/privacy/" data-i18n="foot.privacy"></a>' +
            '<a href="/terms/" data-i18n="foot.terms"></a>' +
            '<a href="/accessibility/" data-i18n="foot.accessibility"></a>' +
          '</div>' +
          langSwitch() +
          '<p class="footer-rights" data-i18n="foot.rights"></p>' +
        '</div>' +
      '</div></footer>'
    );
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
        if (b && window.ACII18n) {
          window.ACII18n.setLang(b.getAttribute("data-lang"));
          document.body.classList.remove("nav-open");
        }
      });
    });
  }

  function render() {
    if (document.querySelector(".site-header")) return;
    document.body.appendChild(footer());
    document.body.insertBefore(header(), document.body.firstChild);
    var skip = el('<a class="skip-link" href="#main" data-i18n="a11y.skip">Skip to content</a>');
    document.body.insertBefore(skip, document.body.firstChild);
    wire();
  }

  document.addEventListener("DOMContentLoaded", function () {
    render();
    if (window.ACII18n) window.ACII18n.init();
  });

  window.ACIShell = { render: render, NAV: NAV };
})();
