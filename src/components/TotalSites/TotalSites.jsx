import React from "react";
import "./TotalSites.css";
import filter from "../Icons/filter.svg";
import edit from "./edit icon.png";
import { Link } from "react-router-dom";

const TotalSite = () => {
  return (
    <>
      <div className="" style={{ padding: "7vh 7vw" }}>
        <div
          id="TotalSite-heading-div-11"
          className="mb-5"
          style={{ textAlign: "center", width: "100%", paddingBottom: "14px" }}
        >
          <span
            id="TotalSite-heading-11"
            className="pb-3"
            style={{
              fontSize: "xx-large",
              color: "#59599d",
              paddingBttom: " 20px",
              paddingBottom: "20px",
            }}
          >
            Total Site
          </span>
        </div>
        <div>
          <div className=" row align-items-center">
            <div className="col-lg-6 mb-4 col-sm-12 col-md-6 d-flex justify-content-start align-items-center">
              <img className="me-3" src={filter} alt="" />
              <span style={{ padding: "10px", fontSize: "23px" }}>Site</span>
              <input
                style={{
                  borderRadius: "10px",
                  border: "1px solid #B7B1B1",
                  width: "276px",
                  height: "45px",
                }}
                type="text"
                placeholder="Enter Site"
              />
            </div>
            <div className="col-lg-6 mb-4 col-sm-12 col-md-6 d-flex justify-content-end align-items-center TotalSite_button_11">
              <Link to="/SiteRegisteration"><button
                class=""
                style={{
                  background: "linear-gradient(0deg, #D6FCD0, #D6FCD0)",
                  borderRadius: "10px",
                  width: "200px",
                  height: "70px",
                  border: "none",
                }}
              >
                <span style={{ padding: "7px" }}>Site Registration</span>
                <img src={edit} alt="" />
              </button></Link>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row g-3">
            <div className="col-12 col-md-6 col-lg-4 mb-5">
              <div className="card">
                <div style={{ background: "#D6FCD0", height: "200px" }}></div>
                <div class="card-body text-center">
                  <button
                    style={{
                      background: "linear-gradient(0deg, #D6FCD0, #D6FCD0)",
                      borderRadius: "10px",
                      width: "100px",
                      height: "50px",
                      border: "none",
                    }}
                    type="button"
                  >
                    <a style={{}}>View</a>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card">
                <div style={{ background: "#D6FCD0", height: "200px" }}></div>
                <div class="card-body text-center">
                  <button
                    style={{
                      background: "linear-gradient(0deg, #D6FCD0, #D6FCD0)",
                      borderRadius: "10px",
                      width: "100px",
                      height: "50px",
                      border: "none",
                    }}
                    type="button"
                  >
                    <a style={{}}>View</a>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card">
                <div style={{ background: "#D6FCD0", height: "200px" }}></div>
                <div class="card-body text-center">
                  <button
                    style={{
                      background: "linear-gradient(0deg, #D6FCD0, #D6FCD0)",
                      borderRadius: "10px",
                      width: "100px",
                      height: "50px",
                      border: "none",
                    }}
                    type="button"
                  >
                    <a style={{}}>View</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row g-3">
            <div className="col-12 col-md-6 col-lg-4 mb-5">
              <div className="card">
                <div style={{ background: "#D6FCD0", height: "200px" }}></div>
                <div class="card-body text-center">
                  <button
                    style={{
                      background: "linear-gradient(0deg, #D6FCD0, #D6FCD0)",
                      borderRadius: "10px",
                      width: "100px",
                      height: "50px",
                      border: "none",
                    }}
                    type="button"
                  >
                    <a style={{}}>View</a>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card">
                <div style={{ background: "#D6FCD0", height: "200px" }}></div>
                <div class="card-body text-center">
                  <button
                    style={{
                      background: "linear-gradient(0deg, #D6FCD0, #D6FCD0)",
                      borderRadius: "10px",
                      width: "100px",
                      height: "50px",
                      border: "none",
                    }}
                    type="button"
                  >
                    <a style={{}}>View</a>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card">
                <div style={{ background: "#D6FCD0", height: "200px" }}></div>
                <div class="card-body text-center">
                  <button
                    style={{
                      background: "linear-gradient(0deg, #D6FCD0, #D6FCD0)",
                      borderRadius: "10px",
                      width: "100px",
                      height: "50px",
                      border: "none",
                    }}
                    type="button"
                  >
                    <a style={{}}>View</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TotalSite;
