import React from "react";
import "./SiteRegisteration.css";

const SiteRegisteration = () => {
  return (
    <>
      <div className="wholeBox13">
        <div className="heading13">
          <h3 className="headings_13">Site Registration</h3>
        </div>

        <div className="borderBox1">
          <form>
            <div className="flexbox">
              <div className="mb-3">
                <div className="firstBox">
                  <label htmlFor="siteName13" className="form-label siteName1">
                    Site Name
                  </label>
                  <input
                    type="input"
                    className="form-control firstinput13"
                    aria-describedby="siteName13"
                    placeholder="Enter Site Name"
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <div className="secondBox">
                  <label
                    htmlFor="siteAddress13"
                    className="form-label siteAddress1"
                  >
                    Site Address
                  </label>
                  <input
                    type="input"
                    className="form-control secondinputtake"
                    aria-describedby="siteAddress13"
                    placeholder="Enter Site Address"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="mb-3">
              <div className="thirdBox">
                <label
                  htmlFor="siteName13"
                  className="form-label registrationDateBlock13 svgImage13"
                >
                  Registration Date
                </label>
                <input
                  type="date"
                  className="form-control thirdinputtake svgImageInput13 "
                  aria-describedby="registrationDate13"
                  placeholder="Select Registration Date"
                  required
                />
              </div>
            </div>

            <div className="buttonRegister13">
              <button
                type="button"
                className="coloredButtonBlock13 btn btn-success  "
                style={{ marginRight: "12vw" }}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SiteRegisteration;
