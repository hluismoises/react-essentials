export default function tabButton({ children, onSelect }) {
  return (
    <div>
      <button onClick={onSelect}>{children}</button>
    </div>
  );
}
