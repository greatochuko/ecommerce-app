export default function Quantity({
  quantity,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
}) {
  return (
    <div className="quantity">
      <button onClick={handleDecreaseQuantity}>&minus;</button>
      <input type="text" value={quantity} disabled={true} />
      <button onClick={handleIncreaseQuantity}>+</button>
    </div>
  );
}
