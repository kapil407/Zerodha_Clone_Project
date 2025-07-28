import React from "react";

function Team() {
  return (
    <div className="container  mb-5 ">
      <div className="row text-center text-muted">
        <h1 className="fs-3">People</h1>
      </div>
      <div className="row mt-5 mb-5 p-5  " style={{ lineHeight: "1.9" }}>
        <div className="col-6 text-center text-muted">
          <img
            src="media/images/nithinKamath.jpg"
            alt="image"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h5 className="mt-3 mb-3">Nithin Kamath</h5>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 text-muted " style={{ lineHeight: "1.9" }}>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p> Playing basketball is his zen.</p>

          <p>
            Connect on
            <a href="" style={{ textDecoration: "none" }}>
              Homepage
            </a>
            /
            <a href="" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>
            /
            <a href="" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
