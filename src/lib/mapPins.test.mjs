import assert from 'node:assert'
import { visibleForZoom, capForZoom } from './mapPins.js'

const listings = Array.from({ length: 60 }, (_, i) => ({ id: i, lat: 49 + i / 1000 }))

// The pile of overlapping price pills at city zoom is the whole reason this exists.
assert.ok(visibleForZoom(listings, 12).length < listings.length, 'city zoom must thin the pins')
assert.equal(visibleForZoom(listings, 17).length, listings.length, 'street zoom shows every home')

// More zoom never means fewer pins.
const counts = [10, 11, 12, 13, 14, 15, 16].map(z => visibleForZoom(listings, z).length)
assert.deepEqual(counts, [...counts].sort((a, b) => a - b), 'pin count rises with zoom')
assert.ok(counts.every(c => c <= listings.length), 'never invents pins')

// Striding, not slicing: a prefix would bunch the survivors in one corner.
const shown = visibleForZoom(listings, 12)
assert.notDeepEqual(shown, listings.slice(0, shown.length), 'subset must be spread, not a prefix')
assert.ok(shown[shown.length - 1].id > listings.length / 2, 'subset reaches the far end of the list')
assert.equal(new Set(shown.map(l => l.id)).size, shown.length, 'no duplicate pins')

// A short list is never padded or trimmed.
assert.equal(visibleForZoom(listings.slice(0, 5), 11).length, 5)
assert.equal(capForZoom(20), Infinity)

console.log('mapPins: ok')
