export default function SearchBar({ value, onChange }) {
  return (
    <div style={styles.wrapper}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8a9e90" strokeWidth="2" style={styles.icon}>
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      <input
        type="text"
        placeholder="Search by address, city, or keyword..."
        value={value}
        onChange={e => onChange(e.target.value)}
        style={styles.input}
      />
    </div>
  );
}

const styles = {
  wrapper: {
    position: 'relative',
    flex: 1,
    minWidth: '200px'
  },
  icon: {
    position: 'absolute',
    left: '0.75rem',
    top: '50%',
    transform: 'translateY(-50%)',
    pointerEvents: 'none'
  },
  input: {
    width: '100%',
    padding: '0.6rem 0.75rem 0.6rem 2.25rem',
    background: '#1a1a1a',
    border: '1px solid #222222',
    borderRadius: '100px',
    color: '#e8e4da',
    fontSize: '0.875rem',
    outline: 'none',
    fontFamily: 'inherit'
  }
};
