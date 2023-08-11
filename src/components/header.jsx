export default function Header({ cartIsOpen, setCartIsOpen, cartItems }) {
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
