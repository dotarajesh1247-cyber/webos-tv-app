# PlayTorrio TV for webOS

This repository contains a minimal Enact/React-based webOS TV app scaffold suitable for a living-room streaming app.

## What is included
- TV-focused home screen with navigation
- Feature strip and media rows
- Detail/hero section
- Basic responsive layout
- `appinfo.json` ready for webOS packaging
- SVG assets for icon and splash screen

## Local development

```bash
npm install
npm start
```

Then open the browser at the local dev server URL.

## Build for production

```bash
npm run build
```

## Package for webOS TV

1. Install the webOS CLI if needed:

```bash
npm install -g @webosose/ares-cli
```

2. Build the app:

```bash
npm run build
```

3. Package it as an IPK from the project root:

```bash
ares-package .
```

4. Install on a TV in developer mode:

```bash
ares-install --device <TV_IP> com.dotarajesh1247.webostvapp_0.1.0_all.ipk
```

## Notes
- This is a starter app scaffold, not a full port of the existing Flutter app.
- Replace the mock media cards and detail pages with your real data flow.
- The app expects a webOS-compatible player and backend integration for movies, series, manga, and audio streaming.
