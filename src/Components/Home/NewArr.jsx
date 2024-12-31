import React from 'react';

export const NewArr = () => {
  return (
    <div>
        <div>
      <div className="new_arrivals">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="section_title new_arrivals_title">
                <h2>New Arrivals</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col text-center">
              <div className="new_arrivals_sorting">
                <ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
                  <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center active is-checked" data-filter="*">All</li>
                  <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".women">Women's</li>
                  <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".accessories">Accessories</li>
                  <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".men">Men's</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="product-grid" data-isotope='{"itemSelector": ".product-item", "layoutMode": "fitRows"}'>
                {/* Product 1 */}
                <div className="product-item men">
                  <div className="product discount product_filter">
                    <div className="product_image">
                      <img src="images/product_1.png" alt="" />
                    </div>
                    <div className="favorite favorite_left"></div>
                    <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
                      <span>-$20</span>
                    </div>
                    <div className="product_info">
                      <h6 className="product_name">
                        <a href="single.html">Fujifilm X100T 16 MP Digital Camera (Silver)</a>
                      </h6>
                      <div className="product_price">
                        $520.00<span>$590.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="red_button add_to_cart_button">
                    <a href="#">Add to Cart</a>
                  </div>
                </div>

                {/* Other Products */}
                {/* Repeat similar structure for each product as needed */}

              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="deal_ofthe_week">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-lg-6">
					<div class="deal_ofthe_week_img">
						<img src="images/deal_ofthe_week.png" alt=""/>
					</div>
				</div>
				<div class="col-lg-6 text-right deal_ofthe_week_col">
					<div class="deal_ofthe_week_content d-flex flex-column align-items-center float-right">
						<div class="section_title">
							<h2>Deal Of The Week</h2>
						</div>
						<ul class="timer">
							<li class="d-inline-flex flex-column justify-content-center align-items-center">
								<div id="day" class="timer_num">03</div>
								<div class="timer_unit">Day</div>
							</li>
							<li class="d-inline-flex flex-column justify-content-center align-items-center">
								<div id="hour" class="timer_num">15</div>
								<div class="timer_unit">Hours</div>
							</li>
							<li class="d-inline-flex flex-column justify-content-center align-items-center">
								<div id="minute" class="timer_num">45</div>
								<div class="timer_unit">Mins</div>
							</li>
							<li class="d-inline-flex flex-column justify-content-center align-items-center">
								<div id="second" class="timer_num">23</div>
								<div class="timer_unit">Sec</div>
							</li>
						</ul>
						<div class="red_button deal_ofthe_week_button"><a href="#">shop now</a></div>
					</div>
				</div>
			</div>
		</div>
	</div>

    </div>
    <div className="best_sellers">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <div className="section_title new_arrivals_title">
              <h2>Best Sellers</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="product_slider_container">
              <div className="owl-carousel owl-theme product_slider">

                {/* Slide 1 */}
                <div className="owl-item product_slider_item">
                  <div className="product-item">
                    <div className="product discount">
                      <div className="product_image">
                        <img src="images/product_1.png" alt="" />
                      </div>
                      <div className="favorite favorite_left"></div>
                      <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
                        <span>-$20</span>
                      </div>
                      <div className="product_info">
                        <h6 className="product_name">
                          <a href="single.html">Fujifilm X100T 16 MP Digital Camera (Silver)</a>
                        </h6>
                        <div className="product_price">$520.00<span>$590.00</span></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Repeat for other slides */}
                {/* Example for Slide 2 */}
                <div className="owl-item product_slider_item">
                  <div className="product-item women">
                    <div className="product">
                      <div className="product_image">
                        <img src="images/product_2.png" alt="" />
                      </div>
                      <div className="favorite"></div>
                      <div className="product_bubble product_bubble_left product_bubble_green d-flex flex-column align-items-center">
                        <span>new</span>
                      </div>
                      <div className="product_info">
                        <h6 className="product_name">
                          <a href="single.html">Samsung CF591 Series Curved 27-Inch FHD Monitor</a>
                        </h6>
                        <div className="product_price">$610.00</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Add remaining slides following the same pattern */}
              </div>

              {/* Slider Navigation */}
              <div className="product_slider_nav_left product_slider_nav d-flex align-items-center justify-content-center flex-column">
                <i className="fa fa-chevron-left" aria-hidden="true"></i>
              </div>
              <div className="product_slider_nav_right product_slider_nav d-flex align-items-center justify-content-center flex-column">
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="benefit">
      <div className="container">
        <div className="row benefit_row">
          {/* Benefit 1 */}
          <div className="col-lg-3 benefit_col">
            <div className="benefit_item d-flex flex-row align-items-center">
              <div className="benefit_icon">
                <i className="fa fa-truck" aria-hidden="true"></i>
              </div>
              <div className="benefit_content">
                <h6>free shipping</h6>
                <p>Suffered Alteration in Some Form</p>
              </div>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="col-lg-3 benefit_col">
            <div className="benefit_item d-flex flex-row align-items-center">
              <div className="benefit_icon">
                <i className="fa fa-money" aria-hidden="true"></i>
              </div>
              <div className="benefit_content">
                <h6>cash on delivery</h6>
                <p>The Internet Tend To Repeat</p>
              </div>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="col-lg-3 benefit_col">
            <div className="benefit_item d-flex flex-row align-items-center">
              <div className="benefit_icon">
                <i className="fa fa-undo" aria-hidden="true"></i>
              </div>
              <div className="benefit_content">
                <h6>45 days return</h6>
                <p>Making it Look Like Readable</p>
              </div>
            </div>
          </div>

          {/* Benefit 4 */}
          <div className="col-lg-3 benefit_col">
            <div className="benefit_item d-flex flex-row align-items-center">
              <div className="benefit_icon">
                <i className="fa fa-clock-o" aria-hidden="true"></i>
              </div>
              <div className="benefit_content">
                <h6>opening all week</h6>
                <p>8AM - 09PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
