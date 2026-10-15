/* FAQ : une seule question ouverte à la fois (en complément de l'attribut name="faq" des <details>) */
(function () {
  var details = [].slice.call(document.querySelectorAll('.faq details'));
  details.forEach(function (el) {
    el.addEventListener('toggle', function () {
      if (!el.open) return;
      details.forEach(function (autre) { if (autre !== el) autre.open = false; });
    });
  });
})();

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


/* Vidéo « En séance » : lecture automatique (sans son) quand elle est visible, pause sinon.
   Bouton lecture/pause ; pas de lecture automatique si les animations sont réduites. */
(function () {
  var carte = document.querySelector('.video-carte');
  var video = carte && carte.querySelector('video');
  if (!video) return;
  var reduit = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var manuel = false; // l'utilisateur a mis en pause lui-même

  var bouton = document.createElement('button');
  bouton.type = 'button';
  bouton.className = 'video-bouton';
  bouton.setAttribute('aria-label', 'Lecture ou pause de la vidéo');
  bouton.innerHTML = '<svg class="i-pause" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>' +
                     '<svg class="i-lire" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4.5v15l13-7.5z"/></svg>';
  carte.appendChild(bouton);

  function etat() { carte.classList.toggle('en-pause', video.paused); }
  video.addEventListener('play', etat);
  video.addEventListener('pause', etat);
  etat();

  function lire() { var p = video.play(); if (p && p.catch) p.catch(etat); }

  bouton.addEventListener('click', function () {
    if (video.paused) { manuel = false; lire(); } else { manuel = true; video.pause(); }
  });

  if (!reduit && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (entrees) {
      entrees.forEach(function (e) {
        if (e.isIntersecting) { if (!manuel) lire(); } else { video.pause(); }
      });
    }, { threshold: 0.4 }).observe(carte);
  }
})();
