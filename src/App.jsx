// Basislayout einer Urlaubsrouten-Seite mit TailwindCSS
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import reisedaten from "./data/roadtrip_danemark_2025_final.json";

const KategorieTags = ({ tags }) => (
  <div className="flex flex-wrap gap-2 text-sm mt-2">
    {tags.map((tag, i) => (
      <span key={i} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">#{tag}</span>
    ))}
  </div>
);

const LinkItem = ({ name, url }) => (
  <li>
    {url ? (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        {name}
      </a>
    ) : (
      <span>{name}</span>
    )}
  </li>
);

const Reisetag = ({ tag, datum, route, fahrzeit, highlights, essen, schlafen, kategorie, notiz, hundetipp }) => (
  <section className="bg-white rounded shadow-md p-6 mb-6">
    <div className="mb-4">
      <h2 className="text-xl font-bold">Tag {tag} – {datum}</h2>
      <p className="text-sm text-gray-600">{route} • Fahrzeit: {fahrzeit}</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <h3 className="font-semibold text-blue-700 text-lg">🧭 Programmpunkte</h3>
        <ul className="list-disc ml-5 mt-1 text-sm">
          {highlights.map((point, i) => <LinkItem key={i} {...point} />)}
        </ul>
      </div>
      <div>
        <h3 className="font-semibold text-green-700 text-lg">🍽️ Essen & Kaffee</h3>
        <ul className="list-disc ml-5 mt-1 text-sm">
          {essen.map((item, i) => <LinkItem key={i} {...item} />)}
        </ul>
      </div>
      <div>
        <h3 className="font-semibold text-yellow-700 text-lg">🛏️ Schlafen</h3>
        <p className="text-sm mt-1">{schlafen}</p>
      </div>
    </div>
    <KategorieTags tags={kategorie} />
    <div className="bg-gray-50 p-3 mt-4 rounded border-l-4 border-blue-200">
      <strong>💬 Notiz:</strong> <span className="text-sm">{notiz}</span>
    </div>
    {hundetipp && (
      <div className="bg-yellow-50 text-yellow-900 mt-2 p-3 rounded text-sm">
        🐶 <strong>Hundetipp:</strong> {hundetipp}
      </div>
    )}
  </section>
);

const RouteSeite = () => (
  <main className="max-w-4xl mx-auto p-4 bg-gray-100 min-h-screen">
    <h1 className="text-2xl font-bold mb-4">🛣️ Meine Route</h1>
    {reisedaten.map((etappe, i) => (
      <Reisetag key={i} {...etappe} />
    ))}
  </main>
);

const FoodSeite = () => {
  const foodMap = {};
  reisedaten.forEach(({ datum, essen }) => {
    essen.forEach(item => {
      if (!foodMap[datum]) foodMap[datum] = [];
      foodMap[datum].push(item);
    });
  });
  return (
    <main className="max-w-3xl mx-auto p-4 bg-white min-h-screen">
      <h1 className="text-2xl font-bold mb-4">☕ Essen & Kaffee-Tipps</h1>
      {Object.entries(foodMap).map(([datum, einträge], i) => (
        <section key={i} className="mb-6">
          <h2 className="text-lg font-semibold">{datum}</h2>
          <ul className="list-disc ml-5 text-sm">
            {einträge.map((e, j) => <LinkItem key={j} {...e} />)}
          </ul>
        </section>
      ))}
    </main>
  );
};

const standorte = [
  { ort: "Hamburg", position: [53.5511, 9.9937], info: "Tag 1 – Hamburg" },
  { ort: "Lübeck", position: [53.8655, 10.6866], info: "Tag 2 – Lübeck" },
  { ort: "Fehmarn", position: [54.4371, 11.1995], info: "Tag 2 – Fehmarn" },
  { ort: "Møn (Møns Klint)", position: [54.975, 12.5], info: "Tag 3 – Møns Klint" },
  { ort: "Kopenhagen", position: [55.6761, 12.5683], info: "Tag 3–5 – Kopenhagen" },
  { ort: "Odense", position: [55.4038, 10.4024], info: "Tag 6 – Odense" },
  { ort: "Flensburg", position: [54.793, 9.4469], info: "Tag 7 – Flensburg" },
  { ort: "Kassel", position: [51.3127, 9.4797], info: "Start & Ziel – Kassel" }
];

const KarteSeite = () => (
  <main className="max-w-5xl mx-auto p-4 min-h-screen">
    <h1 className="text-2xl font-bold mb-4">🗺️ Übersichtskarte</h1>
    <MapContainer center={[54.5, 10.5]} zoom={6} className="h-[500px] rounded shadow">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {standorte.map((punkt, i) => (
        <Marker key={i} position={punkt.position}>
          <Popup>{punkt.info}</Popup>
        </Marker>
      ))}
    </MapContainer>
  </main>
);

const Navigation = () => (
  <header className="bg-blue-600 text-white p-4">
    <nav className="flex gap-6">
      <Link to="/" className="hover:underline">Start</Link>
      <Link to="/route" className="hover:underline">Route</Link>
      <Link to="/essen" className="hover:underline">Essen & Kaffee</Link>
      <Link to="/karte" className="hover:underline">Karte</Link>
    </nav>
  </header>
);

const Startseite = () => (
  <main className="max-w-3xl mx-auto p-4">
    <h1 className="text-3xl font-bold mb-4">🌍 Willkommen zu unserer Roadtrip-Website</h1>
    <p className="text-gray-700 mb-4">
      Eine inspirierende Reise von Kassel nach Kopenhagen – perfekt geplant für Zwei und Hund 🐾
    </p>
    <Link to="/route" className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
      Zur Route
    </Link>
  </main>
);

const App = () => (
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Startseite />} />
      <Route path="/route" element={<RouteSeite />} />
      <Route path="/essen" element={<FoodSeite />} />
      <Route path="/karte" element={<KarteSeite />} />
    </Routes>
  </Router>
);

export default App;
