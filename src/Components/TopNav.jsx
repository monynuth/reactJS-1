import React from 'react';
import ButtomNav from '../Components/ButtomNav';

export default function TopNav() {
  return (
    <div>
      <div className="top_nav">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="top_nav_left">Free shipping on all U.S. orders over $50</div>
            </div>
            <div className="col-md-6 text-right">
              <div className="top_nav_right">
                <ul className="top_nav_menu">
                  <li className="currency">
                    <a href="#">
                      USD
                      <i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="currency_selection">
                      <li><a href="#">RIEL</a></li>
                    </ul>
                  </li>
                  <li className="language">
                    <a href="#">
                      English
                      <i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="language_selection">
                      <li><a href="#">Khmer</a></li>
                    </ul>
                  </li>
                  <li className="account">
                    <a href="#">
                      My Account
                      <i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="account_selection">
                      <li>
                        <a href="#">
                          <i className="fa fa-sign-in" aria-hidden="true"></i> Sign In
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-user-plus" aria-hidden="true"></i> Register
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
      <ButtomNav/>
    </div>
  );
}
