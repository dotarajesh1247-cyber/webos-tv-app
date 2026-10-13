import React, { useMemo, useState, useEffect } from 'react';
import Player from './Player';
import { fetchHome } from './services/api';

const defaultPoster = '/public/icon.svg';

function App(){
  const [data, setData] = useState(null);
  const [active, setActive] = useState(0);
  const [selectedRow, setSelectedRow] = useState(0);
  const [player, setPlayer] = useState(null); // {src, title}

  useEffect(() => {
    let mounted = true;
    fetchHome().then(d => { if(mounted) setData(d); }).catch(()=>{});
    return ()=>{ mounted = false; };
  }, []);

  const featured = useMemo(()=> data?.featured || [{id:1,title:'Loading...', color:'#22c55e'}], [data]);
  const rows = useMemo(()=> data?.rows || [], [data]);

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
        <section className="hero" style={{ background: `linear-gradient(135deg, ${featured[active]?.color || '#22c55e'}, rgba(15,23,42,0.5))` }}>
          <div className="hero-copy">
            <div className="eyebrow">{featured[active]?.label || 'Featured'}</div>
            <h1>{featured[active]?.title}</h1>
            <p>
              Discover movies, series, manga, audiobooks, or music in one streaming center built for a living room experience.
            </p>
            <div className="hero-actions">
              <button type="button" className="primary-btn" onClick={() => { setPlayer({ src: featured[active]?.src, title: featured[active]?.title, poster: featured[active]?.poster }); }}>Play</button>
              <button type="button" className="secondary-btn" onClick={() => { alert('Open details (not implemented)'); }}>Details</button>
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
              {row.items.map((it, index) => (
                <button key={`${row.name}-${it.id}`} type="button" className="tile" onClick={() => setPlayer({ src: it.src, title: it.title, poster: it.poster })}>
                  <div className="tile-art" aria-hidden="true" />
                  <span>{it.title}</span>
                </button>
              ))}
            </div>
          </section>
        ))}
      </main>

      {player && <Player src={player.src} title={player.title} poster={player.poster} onClose={() => setPlayer(null)} />}
    </div>
  );
}

export default App;
