# 🗺️ Roadtrip Dänemark 2025 – Interaktive Web-App

**Status:** In Arbeit  
**Letzter Stand:** 2025-04-16  
**Autor:** Harun Faizi  
**Projektidee:** Web-App zur Darstellung einer Dänemark-Rundreise mit interaktiver Karte, Reisetagen, Tipps zu Essen & Kaffee sowie responsivem Design.

---

## 🚀 Ziel

Eine Web-App, die:
- alle 8 Reisetage aus einer JSON-Datei darstellt
- eine interaktive Leaflet-Karte mit Markern & Legende enthält
- automatische Dark-Mode-Unterstützung bietet
- auf GitHub Pages deploybar ist
- lokal mit `npm run dev` lauffähig ist

---

## 📦 Features (Stand zuletzt getestet)

- [x] Navigation: Start, Route, Essen & Kaffee, Karte
- [x] Tagesanzeige via JSON (`roadtrip_danemark_2025_final.json`)
- [x] Leaflet-Karte mit durchnummerierten Markern
- [x] Systembasierter Dark Mode
- [x] Vollständig responsives Layout (Mobile/Desktop)
- [ ] Google Maps Verlinkungen noch unvollständig

---

## 🧱 Tech Stack

- React 18
- React Router DOM v6
- TailwindCSS
- Leaflet & React-Leaflet
- Vite (für Dev & Build)
- GitHub Pages (`gh-pages`)

---

## 🛠 Setup lokal

```bash
git clone https://github.com/faizi-uni/my-homepage-roadtrip.git
cd my-homepage-roadtrip
npm install --legacy-peer-deps
npm run dev
```

---

## 🌍 Deployment via GitHub Pages

1. In `vite.config.js` sicherstellen:
```js
base: "/my-homepage-roadtrip/"
```

2. Dann:
```bash
npm run build
npm run deploy
```

---

## 🧾 Bekannte Probleme & Workarounds

- `react-leaflet@5` benötigt React 19 → daher `--legacy-peer-deps` bei Installation
- `gh-pages` funktioniert nur, wenn `base` korrekt gesetzt ist
- Karte zeigte weiße Seite bei falscher Version oder unvollständigem Import
- ZIP-Export über Chat instabil → GitHub bevorzugen

---

## 📌 TODO für nächste Version

- [ ] Google Maps Links in der JSON ergänzen
- [ ] Optional: kleines JSON-Edit-Tool im Frontend
- [ ] Fehlerseiten (404), Fallbacks & Loading-Zustände
- [ ] Optionale Lokalisierung (DE/EN)

---

## 📂 Datenstruktur

```
src/
├── App.jsx
├── main.jsx
├── index.css
├── components/
│   ├── Navigation.jsx
│   ├── Karte.jsx
│   └── ...
└── data/
    └── roadtrip_danemark_2025_final.json
```

---

**Kontakt:**  
Harun Faizi  
GitHub: [@faizi-uni](https://github.com/faizi-uni)

