import React from 'react';

export default function Library({onOpen}){
  return (
    <div style={{padding:20}}>
      <h2>Your Library</h2>
      <p>This is a TV-optimized library view placeholder. Connect to your backend to list saved content, downloads, and watchlist.</p>
      <div style={{marginTop:16}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))',gap:12}}>
          <div style={{background:'rgba(255,255,255,0.03)',padding:12,borderRadius:10}}>Saved: Movie A</div>
          <div style={{background:'rgba(255,255,255,0.03)',padding:12,borderRadius:10}}>Downloaded: Episode 2</div>
          <div style={{background:'rgba(255,255,255,0.03)',padding:12,borderRadius:10}}>Watchlist: Anime X</div>
        </div>
      </div>
    </div>
  );
}
