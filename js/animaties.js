/* ==========================================================================
   Wise in cijfers: animaties met GSAP
   - De kop van elke pagina komt rustig in beeld.
   - De grote kerncijfers tellen op vanaf 0 zodra ze in beeld komen.
   - Kaarten, grafieken en blokken schuiven iets omhoog als je ernaartoe scrolt.
   Wie "beweging beperken" aan heeft, of geen JavaScript, ziet de pagina meteen
   zoals hij is. De animaties veranderen niets aan de inhoud.
   ========================================================================== */
(function () {
  "use strict";

  var root = document.documentElement;
  var klaar = function () { root.classList.remove("anim"); };

  var minderBeweging = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (minderBeweging || !window.gsap || !window.ScrollTrigger) {
    klaar();
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ ease: "power2.out", duration: 0.6 });
  /* Altijd op tijd klaar, ook als de computer even hapert */
  gsap.ticker.lagSmoothing(0);
  /* Alleen opacity, geen visibility: tekst blijft vindbaar (Ctrl+F) en leesbaar voor schermlezers */

  /* 1. Kop van de pagina */
  var kop = gsap.utils.toArray(".page-hero .eyebrow, .page-hero h1, .page-hero .lead, .page-hero .question");
  gsap.from(kop, { y: 16, opacity: 0, stagger: 0.08 });

  /* 1b. Foto in de kop: langzaam inzoomen bij het laden, en iets trager meescrollen dan de pagina */
  gsap.utils.toArray(".hero-media").forEach(function (media) {
    var img = media.querySelector("img");
    if (img) gsap.fromTo(img, { scale: 1.08 }, { scale: 1, duration: 6, ease: "power1.out" });
    gsap.to(media, {
      yPercent: 12,
      ease: "none",
      scrollTrigger: { trigger: media.parentElement, start: "top top", end: "bottom top", scrub: true }
    });
  });

  /* 2. Kerncijfers tellen op */
  function formatteer(waarde, decimalen) {
    return waarde.toLocaleString("nl-NL", {
      minimumFractionDigits: decimalen,
      maximumFractionDigits: decimalen
    });
  }

  gsap.utils.toArray(".count").forEach(function (el) {
    var doel = parseFloat(el.dataset.value);
    var decimalen = parseInt(el.dataset.decimals || "0", 10);
    var eind = el.textContent;
    var teller = { waarde: 0 };
    if (isNaN(doel)) return;

    el.textContent = formatteer(0, decimalen);
    gsap.to(teller, {
      waarde: doel,
      duration: 1.2,
      ease: "power1.out",
      scrollTrigger: { trigger: el, start: "top 90%", once: true },
      onUpdate: function () { el.textContent = formatteer(teller.waarde, decimalen); },
      onComplete: function () { el.textContent = eind; }
    });
  });

  /* 3. Blokken schuiven in beeld */
  var blokken = ".section-head, .stats li, .step, .card, figure.chart, .explain, .callout, .proto, .table-scroll, .content-section, ol.plan li";
  var doelen = gsap.utils.toArray(blokken).filter(function (el) {
    return !el.closest(".page-hero") && !el.parentElement.closest(blokken);
  });
  gsap.set(doelen, { y: 24, opacity: 0 });
  ScrollTrigger.batch(doelen, {
    start: "top 90%",
    once: true,
    onEnter: function (groep) {
      gsap.to(groep, { y: 0, opacity: 1, stagger: 0.08, overwrite: true });
    }
  });

  /* Grafiek 2 laadt later (lazy); daarna kloppen de posities pas */
  gsap.utils.toArray("img[loading='lazy']").forEach(function (img) {
    img.addEventListener("load", function () { ScrollTrigger.refresh(); });
  });

  klaar();
})();
