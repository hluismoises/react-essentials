export default function tabButton({ children }) {
  function handleClick() {
    console.log("Button clicked");
  }

  return (
    <div>
      <button onClick={handleClick}>{children}</button>
    </div>
  );
}
