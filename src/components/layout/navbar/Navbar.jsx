import "./Navbar.css";
import CartWidget from "/src/components/common/cartWidget/CartWidget";

const Navbar = () => {
  const cartItemsCount = 3; // Cantidad de productos en el carrito (valor de ejemplo)

  return (
    <nav className="navbar">
      <h1>TUKURA</h1>
      <h2>Conciencia Alimentaria</h2>
      <ul className="dropdown">
        <h2 className="dropdown-toggle">Nuestros Productos</h2>
        <ul className="dropdown-menu">
          <li>
            <a href="#">Todos los productos</a>
          </li>
          <li>
            <a href="#">Frutos Secos</a>
          </li>
          <li>
            <a href="#">Legumbres</a>
          </li>
          <li>
            <a href="#">Cerales</a>
          </li>
        </ul>
      </ul>
      <button className="cart-button">
        <div className="cart-count">{cartItemsCount}</div>
        <CartWidget />
      </button>
    </nav>
  );
};

export default Navbar;
