import { useState } from "react";

const initialProductList = [
  {
    name: "Android Tablet",
    description:
      "Android Tablet, 10.1 Inch Android 12 Tablet, 6GB RAM 64GB ROM, 1TB Expand, Android Tablet with 8000mAh Battery, Dual Camera, 5G WiFi, Bluetooth, FHD IPS Touch Screen, GPS, Google GMS Certified.",
    imageURL: "https://m.media-amazon.com/images/I/81TtgFNJrGL._AC_UL400_.jpg",
    price: 89.99,
    isAdded: false,
  },
  {
    name: "Android Tablet",
    description:
      "Android Tablet, 10 Inch Tablet with Stand/Glass Housing, 12GB RAM 128GB ROM with 512GB Expand Tablets, WiFi6, IPS + Touch Screen.",
    imageURL: "https://m.media-amazon.com/images/I/81LeHvThqSL._AC_AA180_.jpg",
    price: 139.0,
    isAdded: false,
  },
  {
    name: "ProCase 9",
    description:
      "ProCase 9'-10.1' Inch Universal Tablet Rotating Case, Protective Cover Stand Folio Swivel Case for 9 10 10.1 Inch Android Touchscreen Tablet, with 360 Degree Rotatable Kickstand -Black.",
    imageURL: "https://m.media-amazon.com/images/I/71hPzLUsTtL._AC_SX679_.jpg",
    price: 17.99,
    isAdded: false,
  },
  {
    name: "Playstation SONY 4",
    description:
      "Playstation SONY 4, 500GB Slim System [CUH-2215AB01], Black, 3003347 (Renewed)",
    imageURL: "https://m.media-amazon.com/images/I/51tbWVPtckL._AC_UY218_.jpg",
    price: 270.0,
    isAdded: false,
  },
  {
    name: "Android Tablet",
    description:
      "Android Tablet, 10.1 Inch Android 12 Tablet, 6GB RAM 64GB ROM, 1TB Expand, Android Tablet with 8000mAh Battery, Dual Camera, 5G WiFi, Bluetooth, FHD IPS Touch Screen, GPS, Google GMS Certified.",
    imageURL: "https://m.media-amazon.com/images/I/81TtgFNJrGL._AC_UL400_.jpg",
    price: 89.99,
    isAdded: false,
  },
  {
    name: "Android Tablet",
    description:
      "Android Tablet, 10 Inch Tablet with Stand/Glass Housing, 12GB RAM 128GB ROM with 512GB Expand Tablets, WiFi6, IPS + Touch Screen.",
    imageURL: "https://m.media-amazon.com/images/I/81LeHvThqSL._AC_AA180_.jpg",
    price: 139.0,
    isAdded: false,
  },
  {
    name: "ProCase 9",
    description:
      "ProCase 9'-10.1' Inch Universal Tablet Rotating Case, Protective Cover Stand Folio Swivel Case for 9 10 10.1 Inch Android Touchscreen Tablet, with 360 Degree Rotatable Kickstand -Black.",
    imageURL: "https://m.media-amazon.com/images/I/71hPzLUsTtL._AC_SX679_.jpg",
    price: 17.99,
    isAdded: false,
  },
  {
    name: "Playstation SONY 4",
    description:
      "Playstation SONY 4, 500GB Slim System [CUH-2215AB01], Black, 3003347 (Renewed)",
    imageURL: "https://m.media-amazon.com/images/I/51tbWVPtckL._AC_UY218_.jpg",
    price: 270.0,
    isAdded: false,
  },
];

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [productList, setProductList] = useState(initialProductList);

  function handleAddCartItem(item) {
    setCartItems((formerItems) => [...formerItems, item]);
  }

  return (
    <div className="App">
      <Header
        setCartIsOpen={setCartIsOpen}
        cartIsOpen={cartIsOpen}
        cartItems={cartItems}
      />
      {cartIsOpen ? (
        <Cart cartItems={cartItems} setCartItems={setCartItems} />
      ) : (
        <ul className="product-list">
          {productList.map((product) => (
            <Product
              setProductList={setProductList}
              productList={productList}
              cartItems={cartItems}
              product={product}
              key={productList.indexOf(product)}
              handleAddCartItem={handleAddCartItem}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

function Header({ cartIsOpen, setCartIsOpen, cartItems }) {
  return (
    <header className="App-header">
      <h1 className="logo">
        <i className="fa-solid fa-shop"></i> Shopper
      </h1>
      <form className="search-form">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </form>
      {!cartIsOpen ? (
        <button className="cart-btn" onClick={() => setCartIsOpen(true)}>
          <i className="fa-solid fa-cart-shopping"></i>
          <p className="cart-num">{cartItems.length}</p>
        </button>
      ) : (
        <button className="cart-btn" onClick={() => setCartIsOpen(false)}>
          <i className="fa-solid fa-x" style={{ color: "red" }}></i>
        </button>
      )}
    </header>
  );
}

function Product({ product, handleAddCartItem, setProductList, productList }) {
  const productIndex = productList.indexOf(product);
  let newProductList = productList.slice();
  function handleAddItem() {
    newProductList[productIndex] = { ...product, isAdded: true };
    setProductList(newProductList);
    handleAddCartItem({ ...product, quantity: 1, isAdded: true });
  }

  return (
    <li className="product">
      <img src={product.imageURL} alt={product.name} />
      <div className="product-details">
        <h2>{product.description?.substring(0, 70)}...</h2>
        <div className="action">
          <p>${product.price}</p>
          {!product.isAdded ? (
            <button onClick={handleAddItem}>Add to cart</button>
          ) : (
            <button onClick={handleAddItem}>Remove</button>
          )}
        </div>
      </div>
    </li>
  );
}

function Cart({ cartItems, setCartItems }) {
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

function CartItem({ cartItems, product, setCartItems }) {
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

function Quantity(quantity, setQuantity) {
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
