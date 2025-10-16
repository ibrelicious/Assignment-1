/* app.js – interaktivitet. Laddas i index.html via <script src="app.js" defer></script> */
(() => {
  'use strict';

  // Vänta tills DOM finns (HTML -> DOM-träd)
  const ready = (fn) =>
    document.readyState === 'loading'
      ? document.addEventListener('DOMContentLoaded', fn)
      : fn();

  ready(() => {
    // 1) Hämta noder (DOM-selektering)
    const root     = document.documentElement;
    const btnTheme = document.getElementById('toggle-theme');
    const btnTime  = document.getElementById('show-time');
    const outTime  = document.getElementById('current-time');
    const yearOut  = document.getElementById('year');
    const log      = document.getElementById('log');

    if (!btnTheme || !btnTime || !outTime || !yearOut || !log) {
      console.warn('[Assignment 1] Saknar element – stämmer id:n i index.html?');
      return;
    }

    // 2) Tema + persistering
    const applyTheme = (t) => {
      root.setAttribute('data-theme', t);
      btnTheme.textContent = t === 'dark' ? 'Ljust läge' : 'Mörkt läge';
      btnTheme.setAttribute('aria-pressed', String(t === 'dark'));
    };
    const loadTheme = () => localStorage.getItem('theme') || 'light';
    const saveTheme = (t) => localStorage.setItem('theme', t);

    // 3) Logg (VG): skapa/ta bort DOM-element
    const logBadge = (text) => {
      const badge = document.createElement('span');   // skapa element
      badge.className = 'badge';
      badge.textContent = text;
      log.prepend(badge);                             // lägg till i DOM
      if (log.children.length > 5) log.lastElementChild.remove(); // ta bort
    };

    // 4) Händelser
    function toggleTheme() {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);    // uppdatera DOM-attribut + knapptext
      saveTheme(next);     // spara i localStorage
      logBadge(`Tema: ${next}`);
    }

    function showTime() {
      const now = new Date();
      outTime.textContent = now.toLocaleTimeString('sv-SE', { hour:'2-digit', minute:'2-digit', second:'2-digit' });
      logBadge(`Tid: ${outTime.textContent}`);
    }

    // 5) Init vid sidladdning (kodflöde)
    applyTheme(loadTheme());
    yearOut.textContent = new Date().getFullYear();

    // 6) Koppla händelser
    btnTheme.addEventListener('click', toggleTheme);
    btnTime.addEventListener('click', showTime);
  });
})();
