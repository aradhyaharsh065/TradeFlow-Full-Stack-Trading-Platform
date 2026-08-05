import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="media/smallcaseLogo.png" />
          <p className="text-small text-muted">
            {" "}
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/streakLogo.png" style={{ width: "35%" }} />
          <p className="text-small text-muted">Algo & strategy platform.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/sensibullLogo.svg" style={{ width: "35%" }} />
          <p className="text-small text-muted">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/zerodhaFundhouse.png" style={{ width: "45%" }} />
          <p className="text-small text-muted">
            {" "}
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/goldenpiLogo.png" />
          <p className="text-small text-muted">Bonds trading platform.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/dittoLogo.png" style={{ width: "25%" }} />
          <p className="text-small text-muted">
            Personalized advice on life and health insurance. No spam and no
            mis-selling..
          </p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
