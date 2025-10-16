# Assignment-1

En enkel sida som visar hur HTML, CSS och JavaScript hänger ihop.
Två knappar: visa tid + växla tema (ljust/mörkt).

# Filer
- `index.html` – strukturen (header, main, footer) och länkar in CSS + JS
- `style.css` – färger/typsnitt + små layoutklasser
- `app.js` – interaktivitet (tid, tema, logg, årtal)

Koppling i HTML:
```html
<link rel="stylesheet" href="style.css">
<script src="app.js" defer></script>


Vad händer när sidan laddas
1. HTML → DOM skapas
2. app.js kör (pga defer)
3. Hämtar element (knappar, tid, år, logg)
4. Sätter tema (ljust)
5. Skriver in aktuellt år i footern


Interaktivitet

1. Visa tid
2. Klick → showTime() → ny Date()
3. Formaterar tid (sv-SE)
4. Skriver till .time och lägger en liten badge i loggen (max 5 st)

Tema
1. Klick → toggleTheme(ljus lr mörk)
2. Växlar data-theme på <html>, uppdaterar knapptext + aria-pressed
3. Sparar valet i localStorage och loggar en badge
