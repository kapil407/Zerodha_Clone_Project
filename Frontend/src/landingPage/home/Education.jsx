import React from "react";

function Education() {
  return (
    <div className="container my-5">
      <div className="row ">
        <div className="col-6 my-5">
          <img
            src="media/images/education.svg"
            alt="#"
            style={{ width: "75%" }}
          />
         
        </div>
        <div className="col-6 my-5 ">
          <h3 className="mb-5">Free and open market education</h3>

          <p className="mb-5 text-muted">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="" className="mb-5" style={{ textDecoration: "none" }}>
            Varsity <i className="fa-solid fa-arrow-right"></i>
          </a>

          <p className="my-5 text-muted">
            WTradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            TradingQ&A <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
