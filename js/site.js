/* Effet d'échelle au défilement : les encadrés (.carte) sont à taille pleine
   au centre de l'écran et rétrécissent légèrement vers les bords. */
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var cartes = [].slice.call(document.querySelectorAll('.carte'));
  if (!cartes.length) return;

  var REDUCTION = 0.08;   // rétrécissement maximal (8 %)
  var ZONE_PLEINE = 0.35; // part centrale de l'écran où la taille reste pleine
  var attente = false;

  function maj() {
    var h = window.innerHeight;
    cartes.forEach(function (el) {
      var r = el.getBoundingClientRect();
      var t = Math.abs(r.top + r.height / 2 - h / 2) / (h / 2); // 0 au centre, 1 au bord
      var k = Math.min(Math.max((t - ZONE_PLEINE) / (1 - ZONE_PLEINE), 0), 1);
      k = k * k * (3 - 2 * k); // transition douce
      el.style.setProperty('--echelle', (1 - REDUCTION * k).toFixed(3));
    });
    attente = false;
  }
  function demander() {
    if (!attente) { attente = true; requestAnimationFrame(maj); }
  }

  window.addEventListener('scroll', demander, { passive: true });
  window.addEventListener('resize', demander);
  maj();
})();
