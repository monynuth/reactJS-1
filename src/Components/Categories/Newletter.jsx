import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Subscribed with email: ${email}`);
    // Add subscription logic here
  };

  return (
    <div className="newsletter">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="newsletter_text d-flex flex-column justify-content-center align-items-lg-start align-items-md-center text-center">
              <h4>Newsletter</h4>
              <p>Subscribe to our newsletter and get 20% off your first purchase</p>
            </div>
          </div>
          <div className="col-lg-6">
            <form
              className="newsletter_form d-flex flex-md-row flex-column flex-xs-column align-items-center justify-content-lg-end justify-content-center"
              onSubmit={handleSubmit}
            >
              <input
                id="newsletter_email"
                type="email"
                placeholder="Your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter_input"
                data-error="Valid email is required."
              />
              <button
                id="newsletter_submit"
                type="submit"
                className="newsletter_submit_btn trans_300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
