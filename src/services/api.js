// Simple API client with fallback to mock data
const API_BASE = window.__PLAYTORRIO_API__ || '';

async function fetchJson(path){
  if(!API_BASE){
    // no base configured — return null so callers can fallback
    return null;
  }
  const res = await fetch(`${API_BASE}${path}`);
  if(!res.ok) throw new Error('API error');
  return res.json();
}

export async function fetchHome(){
  // Try API first
  try{
    const data = await fetchJson('/home');
    if(data) return data;
  }catch(e){ console.warn('API home failed', e); }

  // Fallback mock data
  return {
    featured: [
      { id: 'f1', title: 'New Releases', color:'#22c55e', src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', poster: '' , label:'Featured'},
      { id: 'f2', title: 'Top Series', color:'#3b82f6', src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', poster: '' , label:'Series'}
    ],
    rows: [
      { name: 'Continue Watching', items: [{id:'c1',title:'Midnight Run', src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4'},{id:'c2',title:'Neon City', src:'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'}] },
      { name: 'Trending Now', items: [{id:'t1',title:'Rebel Moon', src:'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}] }
    ]
  };
}

export async function fetchDetails(id){
  if(!API_BASE) return { id, title: `Title ${id}`, description: 'No backend configured. This is mock detail.' };
  return await fetchJson(`/details/${id}`);
}

export async function fetchSearch(q){
  if(!API_BASE) return null;
  return await fetchJson(`/search?q=${encodeURIComponent(q)}`);
}

export async function fetchLibrary(){
  if(!API_BASE) return null;
  return await fetchJson(`/library`);
}
