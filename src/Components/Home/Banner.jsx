import React from 'react';

export default function Banner() {
  return (
    <div>
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div
                className="banner_item align-items-center"
                style={{ backgroundImage: 'url(images/banner_1.jpg)' }}
              >
                <div className="banner_category">
                  <a href="categories.html">Women's</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="banner_item align-items-center"
                style={{ backgroundImage: 'url(images/banner_2.jpg)' }}
              >
                <div className="banner_category">
                  <a href="categories.html">Accessories</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="banner_item align-items-center"
                style={{ backgroundImage: 'url(images/banner_3.jpg)' }}
              >
                <div className="banner_category">
                  <a href="categories.html">Men's</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
