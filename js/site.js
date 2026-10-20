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


/* Vidéos « En séance » : lecture automatique (sans son) quand une vidéo est bien visible, pause sinon.
   Bouton lecture/pause sur chaque vidéo ; pas de lecture automatique si les animations sont réduites.
   Sur téléphone, les vidéos forment un carrousel à faire glisser, avec des points de repère. */
(function () {
  var conteneur = document.getElementById('videos');
  if (!conteneur) return;
  var cartes = [].slice.call(conteneur.querySelectorAll('.video-carte'));
  var reduit = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  cartes.forEach(function (carte) {
    var video = carte.querySelector('video');
    if (!video) return;
    var manuel = false; // mise en pause par l'utilisateur

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
      }, { threshold: 0.6 }).observe(carte);
    }
  });

  /* Points de repère du carrousel (visibles seulement sur téléphone, plusieurs vidéos) */
  if (cartes.length > 1) {
    var points = document.createElement('div');
    points.className = 'videos-points';
    var boutons = cartes.map(function (carte, n) {
      var b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('aria-label', 'Vidéo ' + (n + 1) + ' sur ' + cartes.length);
      b.addEventListener('click', function () {
        conteneur.scrollTo({ left: carte.offsetLeft - conteneur.offsetLeft - parseFloat(getComputedStyle(conteneur).paddingLeft), behavior: 'smooth' });
      });
      points.appendChild(b);
      return b;
    });
    conteneur.parentNode.insertBefore(points, conteneur.nextSibling);

    var attente = false;
    function maj() {
      var centre = conteneur.scrollLeft + conteneur.clientWidth / 2, meilleur = 0, ecart = Infinity;
      cartes.forEach(function (carte, n) {
        var d = Math.abs(carte.offsetLeft - conteneur.offsetLeft + carte.offsetWidth / 2 - centre);
        if (d < ecart) { ecart = d; meilleur = n; }
      });
      boutons.forEach(function (b, n) { b.setAttribute('aria-current', n === meilleur ? 'true' : 'false'); });
      attente = false;
    }
    conteneur.addEventListener('scroll', function () { if (!attente) { attente = true; requestAnimationFrame(maj); } }, { passive: true });
    window.addEventListener('resize', maj);
    maj();
  }
})();
