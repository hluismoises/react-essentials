export default function tabButton({ children, onSelect, isSelected }) {
  return (
    <div>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </div>
  );
}
