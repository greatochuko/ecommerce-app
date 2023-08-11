import CartItem from "./cart-item";
import { useState } from "react";

export default function Cart({ cartItems, setCartItems }) {
  const [shipping, setShipping] = useState("standard");
  const initialValue = 0;
  const totalPrice =
    cartItems.reduce((a, b) => a + b.price * 100, initialValue) / 100;
  let totalCost;
  if (shipping === "standard") {
    totalCost = totalPrice + 5;
  }
  if (shipping === "express") {
    totalCost = totalPrice + 15;
  }

  return (
    <div className="cart">
      <div className="shopping-cart">
        <h3>
          Shopping Cart<span>{cartItems.length} Items</span>
        </h3>
        <hr />
        <div className="header">
          <h4>Product Details</h4>
          <h4>Price</h4>
          <h4>Total</h4>
        </div>
        <ul className="cart-items">
          {cartItems.map((product) => (
            <CartItem
              key={cartItems.indexOf(product)}
              product={product}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          ))}
        </ul>
      </div>
      <div className="order-summary">
        <h3>Order Summary</h3>
        <hr />
        <p>
          SubTotal ({cartItems.length} items) <span>${totalPrice}</span>
        </p>
        <div className="add-ons">
          <div className="shipping">
            <label>Shipping</label>
            <select
              value={shipping}
              onChange={(e) => setShipping(e.target.value)}
            >
              <option value="standard">Standard Delivery - $5.00</option>
              <option value="express">Express Delivery - $15.00</option>
            </select>
          </div>
          <form className="promo-form">
            <label>Promo Code</label>
            <input placeholder="Enter your code"></input>
            <button>Apply</button>
          </form>
        </div>
        <hr />
        <p>
          Total cost <span>${totalCost}</span>
        </p>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
}
