import React from "react";

function Pricing() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h1 className="mb-3 fs-3">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See pricing <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-4">
          <div className="row ">
            <div className="col-6 border p-3 text-center">
              <h1 className="mb-3">
                <i class="fa-solid fa-indian-rupee-sign">0</i>
              </h1>
              <p>Free equity delivery and direct mutual funds</p>
            </div>
            <div className="col-6 border  p-3 text-center">
              <h1 className="mb-3">
                <i class="fa-solid fa-indian-rupee-sign">20</i>
              </h1>
              <p>Free equity delivery and direct mutual funds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
