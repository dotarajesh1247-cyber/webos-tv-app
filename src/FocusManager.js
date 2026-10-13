import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

// FocusManager: simple roving tabindex / directional navigation helper for TV remote
// Usage: wrap the app with <FocusProvider> and use data-focus-id attributes on focusable elements

const FocusContext = createContext(null);

export function FocusProvider({children}){
  const registry = useRef(new Map());
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    const onKey = (e) => {
      if(!current) return;
      const entry = registry.current.get(current);
      if(!entry) return;
      if(e.key === 'ArrowRight') move('right');
      else if(e.key === 'ArrowLeft') move('left');
      else if(e.key === 'ArrowUp') move('up');
      else if(e.key === 'ArrowDown') move('down');
      else if(e.key === 'Enter' || e.key === ' ') {
        // activate
        entry.el && entry.el.click && entry.el.click();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [current]);

  function register(id, el, meta = {}){
    registry.current.set(id, { el, meta });
    if(!current) setCurrent(id);
  }
  function unregister(id){
    registry.current.delete(id);
    if(current === id) setCurrent([...registry.current.keys()][0] || null);
  }

  function focus(id){
    const entry = registry.current.get(id);
    if(!entry) return;
    try{ entry.el.focus(); }catch(e){}
    setCurrent(id);
  }

  function move(dir){
    // very simple directional algorithm: find elements with meta.row/meta.col and move
    const entries = Array.from(registry.current.entries()).map(([id, v]) => ({ id, el: v.el, meta: v.meta }));
    const cur = entries.find(e => e.id === current);
    if(!cur) return;
    const { row, col } = cur.meta;
    let candidates = entries.filter(e => e.id !== current && e.meta && typeof e.meta.row !== 'undefined');
    let best = null;
    let bestScore = Infinity;
    candidates.forEach(c => {
      const dr = (c.meta.row||0) - (row||0);
      const dc = (c.meta.col||0) - (col||0);
      let ok = false;
      if(dir === 'right') ok = dc > 0 && Math.abs(dr) <= 1;
      if(dir === 'left') ok = dc < 0 && Math.abs(dr) <= 1;
      if(dir === 'down') ok = dr > 0;
      if(dir === 'up') ok = dr < 0;
      if(!ok) return;
      const score = Math.abs(dr)*10 + Math.abs(dc);
      if(score < bestScore){ bestScore = score; best = c; }
    });
    if(best) focus(best.id);
  }

  return (
    <FocusContext.Provider value={{ register, unregister, focus, current }}>
      {children}
    </FocusContext.Provider>
  );
}

export function useFocus(){
  return useContext(FocusContext);
}

export function useFocusable(id, meta = {}){
  const ref = useRef(null);
  const { register, unregister, current } = useFocus();
  useEffect(() => {
    if(!id) return;
    register(id, ref.current, meta);
    return () => unregister(id);
  }, [id]);

  const isFocused = current === id;
  return { ref, tabIndex: isFocused ? 0 : -1, 'data-focus-id': id, isFocused };
}
