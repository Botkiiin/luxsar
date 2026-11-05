# LUXAR Premium Auto Detailing website

Static multi-language website (EN / RU / UK / NL) for GitHub Pages or Vercel.

## Files
- `index.html` — homepage
- `prices.html` — prices and interactive window-tint configurator
- `styles.css` — styling
- `script.js` — language switching, booking request and 3D configurator
- `assets/` — site images and logo

## Window tint configurator
The viewer now builds a smoother 3D vehicle mesh for each body category, with a rounded body shell, curved cabin, individual side-glass zones, windshield, wheels and selectable glass highlighting. Drag to rotate; wheel or pinch to zoom.

The 3D scene uses the existing Three.js r128 CDN include in `prices.html`, so an internet connection is required. This is a custom procedural 3D visualization, not a photorealistic manufacturer-specific GLB model. Check it in a browser before publishing and do not advertise it as an exact vehicle fitment model.

## Publish
Upload the contents of this folder to the root of the GitHub repository (not the containing folder itself). Keep the `assets` folder beside the HTML, CSS and JS files.
