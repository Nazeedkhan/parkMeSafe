import React from "react";
import "./MallOwnerRegistration.css";

const MallOwnerRegistration = () => {
  return (
    <>
      <div className="wholeBox13">
        <div className="heading13">
          <h3 className="haedings__13">Mall Owner Registration</h3>
        </div>

        <div className="borderbox13">
          <form>
            <div className="flexbox">
              <div className="mb-3">
                <div className="firstBox13">
                  <label htmlFor="siteName13" className="form-label siteName13">
                    Name
                  </label>
                  <input
                    type="input"
                    className="form-control firstinput13"
                    aria-describedby="siteName13"
                    placeholder="Enter Name"
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <div className="secondBox">
                  <label
                    htmlFor="siteAddress13"
                    className="form-label siteAddress13"
                  >
                    Mobile Number
                  </label>
                  <input
                    type="input"
                    className="form-control secondinput13"
                    aria-describedby="siteAddress13"
                    placeholder="Enter Mobile Number"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="flexbox">
              <div className="mb-3">
                <div className="firstBox13">
                  <label htmlFor="siteName13" className="form-label siteName13">
                    E-Mail
                  </label>
                  <input
                    type="input"
                    className="form-control firstinput13"
                    aria-describedby="siteName13"
                    placeholder="Enter E-Mail"
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <div className="secondBox">
                  <label
                    htmlFor="siteAddress13"
                    className="form-label siteAddress13 secondSiteAddress13 responsiveAddress13"
                  >
                    Address
                  </label>
                  <input
                    type="input"
                    className="form-control secondinput13"
                    aria-describedby="siteAddress13"
                    placeholder="Enter Address"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="flexbox">
              <div className="mb-3">
                <div className="firstBox13">
                  <label
                    htmlFor="siteName13"
                    className="form-label siteName13 altAddress13 responsiveAltNo13 altres"
                  >
                    Alt Mobile Number
                  </label>
                  <input
                    type="input"
                    className="form-control firstinput13"
                    aria-describedby="siteName13"
                    placeholder="Enter Mobile Number"
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <div className="secondBox">
                  <label
                    htmlFor="siteAddress13"
                    className="form-label siteAddress13 secondSiteName13 responsiveSiteName13"
                  >
                    Site Name
                  </label>
                  <input
                    type="input"
                    className="form-control secondinput13"
                    aria-describedby="siteAddress13"
                    placeholder="Enter Site Name"
                    required
                  />
                </div>
              </div>
            </div>

            <div
              className="buttonRegister"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "11vw",
                marginBottom: "5vh",
                marginTop: "3vh",
              }}
            >
              <button
                type="button"
                class="btn btn-success coloredButton13"
                style={{ marginRight: "10vw" }}
              >
                Register
              </button>
            </div>
          </form>
        </div>

        <div
          className="pagination"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "black",
            margin: "3px",
            marginLeft: "10vh",
            marginTop: "4vh",
          }}
        >
          <a style={{ color: "black", margin: "3px" }} href="YetToCome">
            &laquo;
          </a>
          <a style={{ color: "black", margin: "3px" }} href="YetToCome">
            1
          </a>
          <a
            style={{ border: "none", color: "black", margin: "3px" }}
            href="YetToCome"
          >
            /
          </a>
          <a
            style={{ border: "none", color: "black", margin: "3px" }}
            href="YetToCome"
          >
            3
          </a>
          <a style={{ color: "black", margin: "3px" }} href="YetToCome">
            &raquo;
          </a>
        </div>
      </div>
    </>
  );
};

export default MallOwnerRegistration;


