import React from "react";
// import { a } from "react-router-dom";
import "./LabourCompanyList.css";
import edit from "./edit icon.png";
import { Link } from "react-router-dom";

const Demo = () => {
  return (
    <>
      <div className="" style={{ padding: "7vh 7vw" }}>
        <div
          id="LabourList-heading-div-11"
          className="mb-5"
          style={{ textAlign: "center", width: "100%", paddingBottom: "14px" }}
        >
          <span
            id="LabourList-heading-11"
            className="pb-3"
            style={{
              fontSize: "xx-large",
              color: "#59599d",
              paddingBttom: " 20px",
              paddingBottom: "20px",
            }}
          >
            Labour Company List
          </span>
        </div>

        <div className="align-items-center">
          <div className="col-lg-12 mb-4 col-sm-6 col-md-12 d-flex justify-content-end align-items-center LabourList-button11">
            <button
              class=""
              style={{
                background: "linear-gradient(0deg, #D6FCD0, #D6FCD0)",
                borderRadius: "10px",
                width: "200px",
                height: "70px",
                border: "none",
              }}
            >
              <span style={{ padding: "4px" }}>
                <Link to="/LabourCompanyRegistration" style={{color: "black"}}><span style={{ padding: "4px" }}>Registration</span></Link>
                <img src={edit} alt="" />
              </span>
            </button>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row g-3">
            <div className="col-12 col-md-6 col-lg-4 mb-5">
              <div className="card">
                <div style={{ background: "#D6FCD0", height: "200px" }}></div>
                <div class="card-body text-center">
                  <Link to="/LabourCompanyProfile"><button
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
                  </button></Link>
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
        <div className="container">
          <div className="row g-3">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card ">
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
                    <a style={{ textAlign: "center" }}>View</a>
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
        <div className="pagination11 d-flex justify-content-center mt-5">
          <a href="#">&laquo;</a>
          <a href="#">1</a>
          <a style={{ border: "none" }} href="#">
            /
          </a>
          <a style={{ border: "none" }} href="#">
            3
          </a>
          <a href="#">&raquo;</a>
        </div>
      </div>
    </>
  );
};

export default Demo;
