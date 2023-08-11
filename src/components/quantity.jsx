export default function Quantity(quantity, setQuantity) {
  function handleSetQuantity(e) {
    setQuantity(Number(e.target.value));
  }

  return (
    <div className="quantity">
      <button>&minus;</button>
      <input
        type="text"
        value={quantity}
        onChange={(e) => e.target.value && handleSetQuantity}
        disabled={true}
      />
      <button>+</button>
    </div>
  );
}
