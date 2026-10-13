import React from 'react';

export default function Search({onOpen}){
  return (
    <div style={{padding:20}}>
      <h2>Search</h2>
      <p>Search is a lightweight UI placeholder. Connect it to your backend by implementing /search?q=... in src/services/api.js</p>
      <div style={{marginTop:12}}>
        <input placeholder="Search title, actor, tag..." style={{width:'60%',padding:12,borderRadius:8,border:'1px solid rgba(255,255,255,0.06)'}} />
        <button style={{marginLeft:12,padding:'10px 14px',borderRadius:8}}>Search</button>
      </div>
      <div style={{marginTop:20}}>
        <p>Quick results will show here.</p>
      </div>
    </div>
  );
}
