import React, { useMemo, useState } from 'react';

const featured = [
  { id: 1, title: 'New Releases', label: 'Trending', color: '#22c55e' },
  { id: 2, title: 'Series', label: 'Drama', color: '#3b82f6' },
  { id: 3, title: 'Movies', label: 'Action', color: '#f59e0b' },
  { id: 4, title: 'Manga', label: 'Read', color: '#a78bfa' },
  { id: 5, title: 'Music', label: 'Playlists', color: '#f472b6' },
  { id: 6, title: 'Live TV', label: 'Channels', color: '#34d399' },
];

const rows = [
  { name: 'Continue Watching', items: ['Midnight Run', 'Neon City', 'Aster Vale'] },
  { name: 'Top Picks', items: ['Nocturne', 'Atlas 5', 'Skyline', 'Violet Echo'] },
  { name: 'Trending Now', items: ['Rebel Moon', 'Glass Harbor', 'The Last Signal'] },
];

const focusRing = {
  boxShadow: '0 0 0 3px rgba(96,165,250,0.9), 0 20px 35px rgba(15,23,42,0.35)',
};

function App() {
  const [active, setActive] = useState(0);
  const [selectedRow, setSelectedRow] = useState(0);

  const currentFeature = useMemo(() => featured[active], [active]);

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">P</div>
          <div>
            <div className="brand-name">PlayTorrio</div>
            <div className="brand-sub">TV Experience</div>
          </div>
        </div>

        <nav className="nav" aria-label="main navigation">
          {['Home', 'Movies', 'Series', 'Manga', 'Music', 'Live TV'].map((item, index) => (
            <button
              key={item}
              className={`nav-item ${index === selectedRow ? 'nav-item-active' : ''}`}
              onClick={() => setSelectedRow(index)}
              type="button"
            >
              {item}
            </button>
          ))}
        </nav>
      </header>

      <main className="content">
        <section className="hero" style={{ background: `linear-gradient(135deg, ${currentFeature.color}, rgba(15,23,42,0.5))` }}>
          <div className="hero-copy">
            <div className="eyebrow">{currentFeature.label}</div>
            <h1>{currentFeature.title}</h1>
            <p>
              Discover movies, series, manga, audiobooks, or music in one streaming center built for a living room experience.
            </p>
            <div className="hero-actions">
              <button type="button" className="primary-btn">Play</button>
              <button type="button" className="secondary-btn">Details</button>
            </div>
          </div>

          <div className="hero-poster" aria-label="feature poster" />
        </section>

        <section className="feature-strip">
          {featured.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={`feature-card ${index === active ? 'feature-card-active' : ''}`}
              onClick={() => setActive(index)}
              style={index === active ? focusRing : {}}
            >
              <span className="feature-dot" style={{ background: item.color }} />
              <span>{item.title}</span>
            </button>
          ))}
        </section>

        {rows.map((row) => (
          <section className="media-row" key={row.name}>
            <div className="row-header">
              <h2>{row.name}</h2>
              <span>See all</span>
            </div>

            <div className="row-items">
              {row.items.map((title, index) => (
                <button key={`${row.name}-${title}`} type="button" className="tile" style={{ animationDelay: `${index * 80}ms` }}>
                  <div className="tile-art" aria-hidden="true" />
                  <span>{title}</span>
                </button>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default App;
