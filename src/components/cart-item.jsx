import { useState } from "react";

export default function CartItem({ cartItems, product, setCartItems }) {
  const [quantity, setQuantity] = useState(product.quantity);

  function handleSetQuantity(e) {
    setQuantity(Number(e.target.value));
  }

  function handleRemoveCartItem(item) {
    setCartItems((formerItems) => formerItems.filter((i) => i !== item));
  }

  return (
    <li className="cart-item" key={cartItems.indexOf(product)}>
      <div className="details">
        <img src={product.imageURL} alt={product.name} />
        <section>
          <h2>{product.name}</h2>
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
          <button
            className="remove"
            onClick={() => handleRemoveCartItem(product)}
          >
            Remove
          </button>
        </section>
      </div>
      <p>{product.price}</p>
      <p>{product.price}</p>
    </li>
  );
}
