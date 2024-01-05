import React from "react";
import "./Advertise.css";
import upload from "../Icons/upload.svg";

function Advertise() {
  return (
    <div>
      <div >
        <div className="container">
          <div className="row mb-5">
            <div className="col col-all-title-10">
              <h3 className="h2-title " style={{textAlign:"center"}}>Advertise</h3>
            </div>
          </div>
        </div>
        <div className="row mt-5 advertise-box-10 mx-5 mb-3">
          <div className=" my-5 col-sm-12 col-lg-6 col-md-6">
            <p className="advertise-title-10">Mobile View</p>
            <div className="advertise-upload-10" style={{textAlign:"center"}}>
              <img src={upload} alt="upload" className="mb-4" />
              <br />
              <button className="btn upload-10 drop-all-10 mb-2" type="button">
                Upload File
              </button>
            </div>
          </div>
          <div className=" col-sm-12 col-lg-6 col-md-6 my-5">
            <p className="advertise-title-10">Desktop View</p>
            <div className="advertise-upload-10" style={{textAlign:"center"}}>
              <img src={upload} alt="upload" className="mb-4" />
              <br />
              <button className="btn upload-10 drop-all-10 mb-2" type="button">
                Upload File
              </button>
            </div>
          </div>
        </div>

        <nav aria-label="Page navigation example" className="pagination-10">
          <ul className="pagination pagination-all-10 pagination-sm justify-content-center">
            <li className="page-item disabled chevron-left-10">
              <a
                className="page-link"
                href="#"
                aria-label="Previous"
                style={{ borderRadius: "10px" }}
              >
                <span aria-hidden="true">
                  <i className="fa-solid fa-chevron-left"></i>
                </span>
                <span className="sr-only">Previous</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item totalpages-10">
              <p> / 20</p>
            </li>
            <li className="page-item chevron-right-10">
              <a
                className="page-link"
                href="#"
                aria-label="Next"
                style={{ borderRadius: "10px" }}
              >
                <span aria-hidden="true">
                  <i className="fa-solid fa-chevron-right"></i>
                </span>
                <span className="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Advertise;
