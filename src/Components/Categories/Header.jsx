import React from "react";
import "./Header.css"; // Import the CSS file for styling

const Header = () => {
  return (
    <header className="header trans_300">
      {/* Top Navigation */}
      <div className="top_nav">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="top_nav_left">
                Free shipping on all U.S. orders over $50
              </div>
            </div>
            <div className="col-md-6 text-right">
              <div className="top_nav_right">
                <ul className="top_nav_menu">
                  {/* Currency Dropdown */}
                  <li className="currency">
                    <a href="#">
                      USD
                      <i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="currency_selection">
                      <li><a href="#">CAD</a></li>
                      <li><a href="#">AUD</a></li>
                      <li><a href="#">EUR</a></li>
                      <li><a href="#">GBP</a></li>
                    </ul>
                  </li>
                  {/* Language Dropdown */}
                  <li className="language">
                    <a href="#">
                      English
                      <i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="language_selection">
                      <li><a href="#">French</a></li>
                      <li><a href="#">Italian</a></li>
                      <li><a href="#">German</a></li>
                      <li><a href="#">Spanish</a></li>
                    </ul>
                  </li>
                  {/* Account Dropdown */}
                  <li className="account">
                    <a href="#">
                      My Account
                      <i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="account_selection">
                      <li>
                        <a href="#">
                          <i className="fa fa-sign-in" aria-hidden="true"></i>
                          Sign In
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-user-plus" aria-hidden="true"></i>
                          Register
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="main_nav_container">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-right">
              <div className="logo_container">
                <a href="#">colo<span>shop</span></a>
              </div>
              <nav className="navbar">
                <ul className="navbar_menu">
                  <li><a href="index.html">Home</a></li>
                  <li><a href="#">Shop</a></li>
                  <li><a href="#">Promotion</a></li>
                  <li><a href="#">Pages</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
                <ul className="navbar_user">
                  <li><a href="#"><i className="fa fa-search" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i className="fa fa-user" aria-hidden="true"></i></a></li>
                  <li className="checkout">
                    <a href="#">
                      <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                      <span id="checkout_items" className="checkout_items">2</span>
                    </a>
                  </li>
                </ul>
                <div className="hamburger_container">
                  <i className="fa fa-bars" aria-hidden="true"></i>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Screen Menu Overlay */}
      <div className="fs_menu_overlay"></div>
    </header>
  );
};

export default Header;
