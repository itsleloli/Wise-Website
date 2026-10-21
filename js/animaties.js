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

  /* 1c. Routekaart (Achtergrond): steden verschijnen, directe routes tekenen zichzelf, dan de extra route,
     en daarna stroomt er "geld" over twee directe routes.
     Zonder GSAP of met "beweging beperken" staat de kaart gewoon helemaal getekend. */
  var kaart = document.querySelector(".route-pattern");
  if (kaart) {
    var routes = gsap.utils.toArray(".route-pattern .route");
    var extra = gsap.utils.toArray(".route-pattern .route-extra");
    var stromen = gsap.utils.toArray(".route-pattern .route-flow");
    var haltes = gsap.utils.toArray(".route-pattern .stop");
    var labels = gsap.utils.toArray(".route-pattern .labels");

    /* Elke lijn krijgt een streepje zo lang als de lijn zelf, dat er eerst helemaal naast ligt */
    routes.forEach(function (pad) {
      var lengte = pad.getTotalLength();
      gsap.set(pad, { strokeDasharray: lengte, strokeDashoffset: lengte });
    });
    gsap.set(stromen.concat(extra), { opacity: 0 });

    var tl = gsap.timeline({ delay: 0.2 });
    tl.from(haltes, { scale: 0, transformOrigin: "50% 50%", duration: 0.4, stagger: 0.06, ease: "back.out(2)" })
      .from(labels, { opacity: 0, duration: 0.5 }, "-=0.2")
      .to(routes, { strokeDashoffset: 0, duration: 1.2, stagger: 0.15, ease: "power1.inOut" }, "-=0.3")
      .to(extra, { opacity: 0.9, duration: 0.6 })
      .to(stromen, { opacity: 1, duration: 0.6 }, "<");

    /* Geld en extra route bewegen alleen zolang de kop in beeld is (spaart batterij) */
    var inBeeld = { trigger: kaart, start: "top bottom", end: "bottom top", toggleActions: "play pause resume pause" };
    gsap.to(stromen, { strokeDashoffset: -44, duration: 1.6, ease: "none", repeat: -1, scrollTrigger: inBeeld });
    gsap.to(extra, { strokeDashoffset: -32, duration: 2.4, ease: "none", repeat: -1, scrollTrigger: Object.assign({}, inBeeld) });
  }

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
  var blokken = ".section-head, .stats li, .step, .card, figure.chart, .explain, .callout, .proto, .table-scroll, .content-section, ol.plan li, ol.flow li, .howto-note";
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
