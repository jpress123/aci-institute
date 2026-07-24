/* ACI Institute, endorsers list.
   Renders the advance-praise cards from /assets/content/endorsers.json into
   #endorsers-list. Edit the JSON to add or change endorsers, no HTML needed.
   Each entry: quote, name, role, and either a photo filename in assets/pix/
   or initials for a monogram avatar. */
(function () {
  "use strict";
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function avatar(e) {
    if (e.photo) {
      return '<img class="praise-avatar" src="/assets/pix/' + esc(e.photo) +
        '" width="44" height="44" loading="lazy" alt="' + esc(e.name) + '">';
    }
    return '<span class="praise-avatar" aria-hidden="true">' + esc(e.initials) + "</span>";
  }
  function card(e) {
    return '<figure class="praise-card">' +
      '<blockquote class="praise-quote">' + esc(e.quote) + "</blockquote>" +
      '<figcaption class="praise-cite">' + avatar(e) +
        '<span class="praise-meta">' +
          '<span class="praise-name">' + esc(e.name) + "</span>" +
          (e.role ? '<span class="praise-role">' + esc(e.role) + "</span>" : "") +
        "</span>" +
      "</figcaption></figure>";
  }
  document.addEventListener("DOMContentLoaded", function () {
    var el = document.getElementById("endorsers-list");
    if (!el) return;
    fetch("/assets/content/endorsers.json", { cache: "no-cache" })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) {
        var list = (d && d.endorsers) || [];
        el.innerHTML = list.map(card).join("");
      })
      .catch(function () {});
  });
})();
