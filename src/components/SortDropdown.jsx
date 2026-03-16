import React from 'react'

const SORT_OPTIONS = [
  { value: 'newest', label: 'Newest' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'sqft', label: 'Largest' }
]

export default function SortDropdown({ value, onChange }) {
  return (
    <select
      className="sort-dropdown"
      value={value}
      onChange={e => onChange(e.target.value)}
    >
      {SORT_OPTIONS.map(opt => (
        <option key={opt.value} value={opt.value}>{opt.label}</option>
      ))}
    </select>
  )
}
