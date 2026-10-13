# PlayTorrio TV for webOS

This repository contains an Enact/React-based webOS TV app scaffold suitable for a living-room streaming app.

This update adds:
- A real HTML5-based Player component (src/Player.js) with remote/keyboard controls, seek, volume, fullscreen and subtitles support placeholder.
- A simple API client (src/services/api.js) that will call a configured backend (window.__PLAYTORRIO_API__) or return mock data.
- Wiring in src/App.js to open the player and play media from the API/mock.
- Player styles (src/player.css).

## How to configure your backend

You can host a small JSON endpoint that returns a structure like:

{
  "featured": [ { "id": "f1", "title": "New Releases", "color":"#22c55e", "src":"https://.../file.mp4", "poster":"https://.../img.jpg" } ],
  "rows": [ { "name":"Trending", "items": [ {"id":"m1","title":"Movie 1","src":"https://.../m1.mp4"} ] } ]
}

To point the app at your backend, set a global in the index.html before the app loads (or serve a small script):

<script>
  window.__PLAYTORRIO_API__ = 'https://your-api.example.com';
</script>

Or host the API under the same origin and the client will call `/home` and `/details/:id` automatically.

## Run

npm install
npm start

## Build and package

npm run build
ares-package .
ares-install --device <TV_IP> <generated ipk>
