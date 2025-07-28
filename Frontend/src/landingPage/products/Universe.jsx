import React from "react";

function Universe() {
  return (
    <div className="container mb-5">
      <div className="row">
        <h1 className="text-center text-muted fs-4 mb-4 mt-5">
          The Zerodha Universe
        </h1>
        <p className="text-center text-muted mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 mb-5">
          <div className="row">
            <img
              src="media/images/zerodhaFundhouse.png"
              alt="image"
              className="mb-4"
              style={{ width: "40%" }}
            />
            <p>
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="row mt-5">
            <img
              src="media/images/streakLogo.png"
              alt="image"
              className="mb-4"
              style={{ width: "40%" }}
            />
            <p>
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
        </div>
        <div className="col-4 mb-5">
          <div className="row">
            <img
              src="media/images/sensibullLogo.svg"
              alt="image"
              className="mb-4"
              style={{ width: "40%" }}
            />
            <p>
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>
          <div className="row mt-5">
            <img
              src="media/images/smallcaseLogo.png"
              alt="image"
              className="mb-4"
              style={{ width: "40%" }}
            />
            <p>
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>
        </div>
        <div className="col-4 mb-5">
          <div className="row mb-5">
            <img
              src="https://zerodha.com/static/images/partners/tijori.svg"
              alt="image"
              className="mb-3"
              style={{ width: "30%" }}
            />
            <p>
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>
          <div className="row mt-5">
            <img
              src="media/images/dittoLogo.png"
              alt="image"
              className="mb-3"
              style={{ width: "30%" }}
            />
            <p>
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>
        </div>
          <button className='btnChange '>Signup Now</button>
      </div>
    </div>
  );
}

export default Universe;
