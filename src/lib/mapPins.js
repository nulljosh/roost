// Every listing as its own pin turns into an unreadable pile of price pills at
// city zoom, so show a subset until the map is zoomed in far enough to separate
// them.
// ponytail: a stride, not a cluster library. If pins ever need count bubbles
// that split on click, that is when leaflet.markercluster earns its place.

const CAPS = [
  [11, 8],
  [12, 12],
  [13, 22],
  [14, 36]
]

export function capForZoom(zoom) {
  for (const [maxZoom, cap] of CAPS) {
    if (zoom <= maxZoom) return cap
  }
  return Infinity
}

// Strides the list instead of slicing it, so the pins that survive are spread
// across the city rather than bunched wherever the first N happen to sit.
export function visibleForZoom(listings, zoom) {
  const cap = capForZoom(zoom)
  if (listings.length <= cap) return listings
  const step = listings.length / cap
  const out = []
  for (let i = 0; i < cap; i++) out.push(listings[Math.floor(i * step)])
  return out
}
