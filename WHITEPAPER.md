# Roost Technical Whitepaper

**v2.0.1** | August 2026

Browse homes anywhere on earth.

Roost is a map of what's for sale or for rent, filters that narrow it, and
favourites that survive a reload. Every price in the local currency, every label in
the local language. React and Vite, no backend beyond Supabase Auth.

## Problem

Every listings site optimizes for the brokerage, not the buyer, listings are
paginated behind lead-capture forms, the map is an afterthought, and filter
state resets on every navigation. Roost inverts that: the map is the app, and
the filter state is the URL.

## Map and Listings

Leaflet with Zillow-style price-pill markers rather than generic pins, the
price is the thing a buyer scans for, so it renders in the marker instead of
in a popup that costs a click. Filters (price range, beds, property type, sort
order) narrow the same in-memory listing set that the map and list view share,
so the two can never disagree about what matches.

The dataset is 50 mock BC listings (Vancouver, Victoria, Kelowna) in
`src/data`. A real MLS/CREA feed is licensed per-brokerage and is the open
dependency before this holds live inventory; the mock set exists so the UI and
filter logic are finished and testable before that contract exists.

## Auth and Persistence

Supabase Auth (email + password, forgot-password flow, session persistence)
gates the profile and saved-search preferences. Favorites are deliberately
`localStorage`, not a Supabase table: favoriting should work before signing in,
and a favorite is worth nothing to anyone but the person who set it.

## Design

Dark Editorial, flat backgrounds, no gradients, blue accent, `tokens.css`
shared with the portfolio design system.

## Stack

| Layer | Tech |
|-------|------|
| Frontend | React + Vite, PWA |
| Map | Leaflet |
| Auth | Supabase |
| Data | Mock JSON (`src/data`), pending an MLS feed |

## License

MIT 2026, Joshua Trommel
