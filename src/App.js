:root {
  --bg-start: #020817;
  --bg-end: #0b1120;
  --panel: rgba(15, 23, 42, 0.75);
  --panel-strong: rgba(15, 23, 42, 0.92);
  --panel-soft: rgba(148, 163, 184, 0.08);
  --border: rgba(148, 163, 184, 0.15);
  --primary: #5eead4;
  --primary-2: #60a5fa;
  --accent: #22c55e;
  --white: #f8fafc;
  --muted: #cbd5e1;
  --shadow: rgba(15, 23, 42, 0.54);
}

* { box-sizing: border-box; }

html, body, #root {
  margin: 0;
  min-height: 100%;
  height: 100%;
  background: linear-gradient(180deg, var(--bg-start), var(--bg-end));
  color: var(--white);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
  background:
    radial-gradient(circle at top left, rgba(96, 165, 250, 0.16), transparent 27%),
    radial-gradient(circle at bottom right, rgba(94, 234, 212, 0.10), transparent 30%),
    linear-gradient(180deg, var(--bg-start), var(--bg-end));
}

button {
  font: inherit;
}

.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, rgba(2,8,23,0.96), rgba(15,23,42,0.96));
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 42px 14px;
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(2, 8, 23, 0.38);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(148, 163, 184, 0.06);
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 14px;
}

.brand-mark {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--primary), var(--primary-2));
  color: #03111d;
  font-weight: 900;
  box-shadow: 0 6px 18px rgba(94, 234, 212, 0.38);
}

.brand-name {
  font-size: 1.12rem;
  font-weight: 800;
  letter-spacing: 0.02em;
}

.brand-sub {
  font-size: 0.72rem;
  color: var(--muted);
}

.nav {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.nav-item {
  background: rgba(148, 163, 184, 0.06);
  border: 1px solid var(--border);
  color: var(--white);
  border-radius: 999px;
  padding: 10px 18px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 600;
}

.nav-item:hover,
.nav-item-active {
  background: linear-gradient(135deg, rgba(94, 234, 212, 0.16), rgba(96, 165, 250, 0.18));
  border-color: rgba(94, 234, 212, 0.58);
  box-shadow: inset 0 0 0 1px rgba(94, 234, 212, 0.2);
  transform: translateY(-1px);
}

.content {
  padding: 28px 42px 54px;
}

.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
  border-radius: 30px;
  padding: 36px 38px;
  min-height: 320px;
  border: 1px solid rgba(255,255,255,0.08);
  box-shadow: 0 30px 60px rgba(15, 23, 42, 0.36);
  overflow: hidden;
}

.hero-copy {
  max-width: 600px;
  position: relative;
  z-index: 1;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(15, 23, 42, 0.28);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 999px;
  padding: 8px 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 0.68rem;
  font-weight: 700;
}

.eyebrow.subtle {
  background: rgba(255,255,255,0.08);
}

.hero-copy h1 {
  margin: 18px 0 14px;
  font-size: clamp(2.3rem, 4vw, 4.4rem);
  line-height: 0.96;
  letter-spacing: -0.04em;
}

.hero-copy p {
  margin: 0;
  max-width: 540px;
  color: rgba(248,250,252,0.9);
  font-size: 1.04rem;
  line-height: 1.6;
}

.meta-row {
  margin-top: 18px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.meta-row span,
.details-meta span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.28);
  border: 1px solid rgba(255,255,255,0.08);
  color: rgba(248,250,252,0.95);
  font-size: 0.7rem;
  font-weight: 700;
}

.hero-actions,
.details-actions {
  display: flex;
  gap: 14px;
  margin-top: 26px;
}

.primary-btn,
.secondary-btn {
  border: none;
  border-radius: 999px;
  padding: 14px 22px;
  font-weight: 800;
  cursor: pointer;
  transition: transform 0.18s ease;
}

.primary-btn:hover,
.secondary-btn:hover {
  transform: translateY(-1px);
}

.primary-btn {
  background: linear-gradient(135deg, #f8fafc, #dfe9ff);
  color: #08131f;
  box-shadow: 0 14px 24px rgba(255,255,255,0.18);
}

.secondary-btn {
  background: rgba(15, 23, 42, 0.34);
  color: white;
  border: 1px solid rgba(255,255,255,0.12);
}

.hero-poster-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 330px;
}

.hero-poster {
  width: 320px;
  height: 250px;
  border-radius: 28px;
  background:
    linear-gradient(160deg, rgba(255,255,255,0.18), rgba(15,23,42,0.08)),
    radial-gradient(circle at top left, rgba(255,255,255,0.18), transparent 30%),
    linear-gradient(135deg, rgba(96,165,250,0.26), rgba(34,197,94,0.18));
  border: 1px solid rgba(255,255,255,0.14);
  box-shadow: inset 0 0 30px rgba(255,255,255,0.08), 0 22px 38px rgba(2,8,23,0.4);
  position: relative;
}

.hero-poster::before {
  content: "";
  position: absolute;
  inset: 18px;
  border-radius: 20px;
  background: linear-gradient(135deg, rgba(255,255,255,0.16), rgba(15,23,42,0.2));
  border: 1px solid rgba(255,255,255,0.14);
}

.feature-strip {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 28px;
}

.feature-card {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(148, 163, 184, 0.06);
  border: 1px solid rgba(148,163,184,0.12);
  color: var(--white);
  border-radius: 14px;
  padding: 12px 18px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.feature-card:hover,
.feature-card-active {
  background: rgba(96, 165, 250, 0.12);
  border-color: rgba(96, 165, 250, 0.7);
  box-shadow: inset 0 0 0 1px rgba(96,165,250,0.16);
}

.feature-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
}

.media-row {
  margin-top: 34px;
}

.row-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.row-header h2 {
  margin: 0;
  font-size: 1.2rem;
  letter-spacing: -0.02em;
}

.row-header span {
  color: var(--muted);
  font-size: 0.8rem;
}

.row-items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 18px;
}

.tile {
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.86), rgba(30, 41, 59, 0.72));
  border: 1px solid rgba(148, 163, 184, 0.14);
  color: var(--white);
  border-radius: 18px;
  padding: 0;
  overflow: hidden;
  text-align: left;
  cursor: pointer;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 15px 30px rgba(2,8,23,0.18);
}

.tile:hover {
  transform: translateY(-3px);
  border-color: rgba(94, 234, 212, 0.45);
  box-shadow: 0 18px 34px rgba(2,8,23,0.32);
}

.tile-art {
  height: 180px;
  background:
    linear-gradient(135deg, rgba(94, 234, 212, 0.38), rgba(96,165,250,0.42)),
    linear-gradient(160deg, #1e293b, #0f172a);
  border-bottom: 1px solid rgba(255,255,255,0.12);
}

.tile-body {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 14px 14px 16px;
}

.tile-tag {
  display: inline-flex;
  padding: 5px 8px;
  border-radius: 999px;
  background: rgba(34,197,94,0.15);
  color: #b6f7d3;
  border: 1px solid rgba(34,197,94,0.3);
  font-size: 0.62rem;
  font-weight: 700;
  text-transform: uppercase;
}

.tile span {
  display: block;
  font-weight: 700;
  font-size: 0.95rem;
  flex: 1;
}

.details-backdrop {
  position: fixed;
  inset: 0;
  z-index: 30;
  background: rgba(2,8,23,0.64);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.details-panel {
  width: min(1000px, 90vw);
  display: grid;
  grid-template-columns: minmax(260px, 380px) 1fr;
  background: rgba(15, 23, 42, 0.92);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(2,8,23,0.55);
}

.details-cover {
  min-height: 360px;
  position: relative;
  border-right: 1px solid rgba(255,255,255,0.08);
}

.details-cover::before {
  content: "";
  position: absolute;
  inset: 18px;
  border-radius: 18px;
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.14);
}

.details-content {
  padding: 28px 28px 24px;
}

.details-content h2 {
  margin: 18px 0 12px;
  font-size: clamp(2rem, 3vw, 3rem);
  letter-spacing: -0.04em;
}

.details-content p {
  margin: 0;
  color: rgba(248,250,252,0.82);
  line-height: 1.7;
}

.details-meta {
  margin-top: 18px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

@media (max-width: 900px) {
  .topbar,
  .content {
    padding-left: 20px;
    padding-right: 20px;
  }

  .hero {
    flex-direction: column;
    align-items: flex-start;
  }

  .hero-poster-wrap {
    width: 100%;
    flex-basis: auto;
  }

  .hero-poster {
    width: 100%;
    max-width: 420px;
  }

  .details-panel {
    grid-template-columns: 1fr;
  }

  .details-cover {
    min-height: 220px;
    border-right: none;
    border-bottom: 1px solid rgba(255,255,255,0.08);
  }
}
