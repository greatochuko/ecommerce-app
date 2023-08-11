import { useState } from "react";
import Header from "./header";
import Cart from "./cart";
import Product from "./product";

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
