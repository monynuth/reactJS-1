import React, { useState } from "react";
import "./App.css"; // Import your CSS file here

const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`hamburger_menu ${isMenuOpen ? "open" : ""}`}>
      <div className="hamburger_close" onClick={toggleMenu}>
        <i className="fa fa-times" aria-hidden="true"></i>
      </div>
      <div className="hamburger_menu_content text-right">
        <ul className="menu_top_nav">
          <li className="menu_item has-children">
            <a href="#">
              USD
              <i className="fa fa-angle-down"></i>
            </a>
            <ul className="menu_selection">
              <li><a href="#">CAD</a></li>
              <li><a href="#">AUD</a></li>
              <li><a href="#">EUR</a></li>
              <li><a href="#">GBP</a></li>
            </ul>
          </li>
          <li className="menu_item has-children">
            <a href="#">
              English
              <i className="fa fa-angle-down"></i>
            </a>
            <ul className="menu_selection">
              <li><a href="#">French</a></li>
              <li><a href="#">Italian</a></li>
              <li><a href="#">German</a></li>
              <li><a href="#">Spanish</a></li>
            </ul>
          </li>
          <li className="menu_item has-children">
            <a href="#">
              My Account
              <i className="fa fa-angle-down"></i>
            </a>
            <ul className="menu_selection">
              <li>
                <a href="#">
                  <i className="fa fa-sign-in" aria-hidden="true"></i>Sign In
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-user-plus" aria-hidden="true"></i>Register
                </a>
              </li>
            </ul>
          </li>
          <li className="menu_item"><a href="#">Home</a></li>
          <li className="menu_item"><a href="#">Shop</a></li>
          <li className="menu_item"><a href="#">Promotion</a></li>
          <li className="menu_item"><a href="#">Pages</a></li>
          <li className="menu_item"><a href="#">Blog</a></li>
          <li className="menu_item"><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

const Sidebar = () => (
  <div className="sidebar">
    <div className="sidebar_section">
      <div className="sidebar_title">
        <h5>Product Category</h5>
      </div>
      <ul className="sidebar_categories">
        <li><a href="#">Men</a></li>
        <li className="active">
          <a href="#">
            <span>
              <i className="fa fa-angle-double-right" aria-hidden="true"></i>
            </span>
            Women
          </a>
        </li>
        <li><a href="#">Accessories</a></li>
        <li><a href="#">New Arrivals</a></li>
        <li><a href="#">Collection</a></li>
        <li><a href="#">Shop</a></li>
      </ul>
    </div>
  </div>
);

const Product = ({ product }) => (
  <div className={`product-item ${product.category}`}>
    <div className="product product_filter">
      <div className="product_image">
        <img src={product.image} alt={product.name} />
      </div>
      {product.isNew && (
        <div className="product_bubble product_bubble_left product_bubble_green d-flex flex-column align-items-center">
          <span>New</span>
        </div>
      )}
      <div className="product_info">
        <h6 className="product_name">
          <a href="single.html">{product.name}</a>
        </h6>
        <div className="product_price">
          {product.price}
          {product.oldPrice && <span>{product.oldPrice}</span>}
        </div>
      </div>
    </div>
    <div className="red_button add_to_cart_button">
      <a href="#">Add to Cart</a>
    </div>
  </div>
);

const ProductGrid = ({ products }) => (
  <div className="product-grid">
    {products.map((product, index) => (
      <Product key={index} product={product} />
    ))}
  </div>
);

const App = () => {
  const products = [
    {
      name: "Fujifilm X100T",
      image: "images/product_1.png",
      price: "$520.00",
      oldPrice: "$590.00",
      category: "men",
    },
    // Add more products here
  ];

  return (
    <div className="container product_section_container">
      <HamburgerMenu />
      <div className="row">
        <div className="col product_section clearfix">
          <Sidebar />
          <ProductGrid products={products} />
        </div>
      </div>
    </div>
  );
};

export default App;
