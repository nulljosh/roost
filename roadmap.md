# Roost Roadmap

## App Store push 2026-09-03
- [ ] Not yet in App Store Connect. Next steps: asc-name-creator probe (Roost
      itself not checked), native iOS/macOS build, signing, screenshots, ASC
      record creation, submit. Multi-hour job, own session.
- [ ] Positioning ammo from a competitor scan: Zillow reviews complain about
      broken saved commute filters, removed sold-price history, forced AI
      tagging over manual tags. Roost's edge if/when shipped: keep price
      history and manual tags simple and reliable.

## Braindump 2026-08-19
- [ ] Rename? "Roost" may not be the final name, run asc-name-creator for alternatives before any App Store record is made.

## From Apple Notes (imported 2026-08-27)
- [ ] Roost needs a landing page and iOS/Mac apps.

## Worldwide build 2026-08-28
Web app now browses anywhere on earth: Nominatim place search, real local street
names from Overpass, per-country currency/units/price levels, sale and rent
modes, and UI strings in 25 languages with RTL.

- [ ] Native iOS + macOS apps. Not started. One SwiftUI multiplatform target with
      MapKit, reusing the same market tables and generator ported to Swift.
- [ ] Login/Register/ForgotPassword copy is still English-only; the strings dict
      has the keys, the pages just do not call `t()` yet.
- [ ] Listing descriptions and feature bullets were removed: the old generated
      English prose could not be localized. Either translate a template or wait
      for a real feed.
- [ ] Inventory is generated, not real. Shape matches an MLS/IDX response so a
      feed swap is one function (`generateListings`).
- [ ] Rename check before any App Store record, run asc-name-creator.
- [ ] Landing pitch is translated into 10 of the 25 languages; the rest fall back to English.

## Demo pass 2026-08-30

Signing in worked for the first time, so the app behind /browse got a real look.
Fixed: Overpass mirrors + a 30 day localStorage cache, Esri dark tiles (CARTO
watermarks unkeyed domains), pin thinning by zoom, favorites synced to the
account, Settings preferences actually applied to browse filters and priced off
the local market, protected routes waiting for the session instead of bouncing
signed-in people to /login, the filter row wrapping instead of looking clipped,
and the detail page's mislabelled area/year stats.

- [ ] Pins still collide in dense pockets. Thinning by zoom only reduces the
      count; real declutter needs collision detection or a cluster library.
- [ ] No land check on generated coordinates. Street anchors are on land by
      construction, but the no-streets fallback can still put a home in water.
- [ ] Service worker serves the previous build for one load after a deploy.
      Every check of a fresh deploy needs a hard reload or an unregister first.
- [ ] `animate.css` is imported in `src/main.jsx` and never used: roughly 70K of
      the 108K CSS bundle.
- [ ] JS ships as one 592K chunk; Leaflet loads on the landing page where there
      is no map. Wants a route-level split.
- [ ] Login/Register/ForgotPassword copy is still English-only.
- [ ] `npm test` runs two node files. No CI runs them.
- [ ] 12 photos across 60 listings, so each image is the hero of 5 homes.
