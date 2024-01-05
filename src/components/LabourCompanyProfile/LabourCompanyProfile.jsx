import React from "react";
import { Link } from "react-router-dom";
import "./LabourCompanyProfile.css";
import $ from "jquery";
// import add from "../Icons/add.png";
import bin from "./Green_Vector.png";

function LaC_profile() {
  const onClickDeleteButton = () => {
    const cols = document.getElementsByClassName("delete-toggle-12");
    for (let index = 0; index < cols.length; index++) {
      cols[index].classList.remove("d-none");
    }
  };

  const muteOnClick = () => {
    document.getElementById("muteBtn11").classList.add("d-none");
    document.getElementById("resumeBtn11").classList.remove("d-none");
  };
  const resumeOnClick = () => {
    document.getElementById("muteBtn11").classList.remove("d-none");
    document.getElementById("resumeBtn11").classList.add("d-none");
  };

  $(document).ready(function () {
    $(".mdb-select").materialSelect();
  });
  return (
    <>
      <div
        className="containerz11 main12"
        style={{ padding: "7vh 7vw", backgroundColor: "white" }}
      >
        <div
          className="mb-5"
          style={{ textAlign: "center", width: "100%", paddingBottom: "14px" }}
        >
          <span
            className="pb-3"
            style={{
              fontSize: "xx-large",
              color: "#59599d",
              padding: "0px 50px 20px 50px",
              borderBottom: "1px solid #59599d",
            }}
          >
            Profile
          </span>
        </div>
        <div className="row">
          <div class="d-flex justify-content-center align-items-center mb-4 col-lg-6 col-md-6 col-sm-12">
            <span
              style={{
                fontSize: "24px",
                borderBottom: "1px solid black",
                fontWeight: "700",
              }}
            >
              Labour Company Information
            </span>
          </div>
          <div class="d-flex justify-content-end align-items-center mb-4 col-lg-6 col-md-6 col-sm-12">
            <button
              id="muteBtn11"
              class="py-1 profile-page-btn-11"
              onClick={muteOnClick}
              style={{
                boxShadow: "rgb(174 168 168) 0px 3px 6px",
                borderRadius: "5px",
                background: "rgba(214, 252, 208, 1)",
                border: "none",
                width: "80px",
              }}
            >
              Mute
            </button>

            <button
              id="resumeBtn11"
              class="py-1 profile-page-btn-11 d-none"
              onClick={resumeOnClick}
              style={{
                boxShadow: "rgb(174 168 168) 0px 3px 6px",
                borderRadius: "5px",
                background: "rgba(214, 252, 208, 1)",
                border: "none",
              }}
            >
              Resume
            </button>
          </div>
        </div>
        <form
          className="row justify-content-around form-padding-12"
          style={{
            textAlign: "start",
            boxShadow: "rgb(174 168 168) 0px 3px 6px",
            borderRadius: "16px",
          }}
        >
          <div className="row justify-content-around">
            <div class="mb-3 col-lg-5 col-md-5 col-sm-12">
              <label for="exampleInputEmail1" class="form-label">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Name"
              />
            </div>
            <div class="mb-3 col-lg-5 col-md-5 col-sm-12">
              <label for="exampleInputPassword1" class="form-label">
                Alt Mobile No.
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Enter Mobile Number"
              />
            </div>
            <div class="mb-3 col-lg-5 col-md-5 col-sm-12">
              <label for="exampleInputEmail1" class="form-label">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Email"
              />
            </div>
            <div class="mb-3 col-lg-5 col-md-5 col-sm-12">
              <label for="exampleInputPassword1" class="form-label">
                Address
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Enter Address"
              />
            </div>
            <div class="mb-3 col-lg-5 col-md-5 col-sm-12">
              <label for="exampleInputEmail1" class="form-label">
                Mobile No.
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Mobile Number"
              />
            </div>
            <div class="mb-2 col-lg-5 col-md-5 col-sm-12">
              <label for="exampleInputEmail1" class="form-label">
                Site name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Site"
              />
            </div>
          </div>
          <button
            class="mt-4 profile-edit-btn-11 py-2 btn mx-auto"
            style={{
              fontSize: "large",
              boxShadow: "rgb(174 168 168) 0px 3px 6px",
              borderRadius: "5px",
              marginBottom: "15px",
              background: "rgba(214, 252, 208, 1)",
              width: "150px",
            }}
          >
            Edit
          </button>
        </form>

        <div className="row" style={{ marginTop: "64px" }}>
          <div class="d-flex justify-content-center align-items-center mt-3 mb-3 col-lg-6 col-md-6 col-sm-12">
            <span
              style={{
                fontSize: "24px",
                borderBottom: "1px solid black",
                fontWeight: "700",
              }}
            >
              Site Details
            </span>
          </div>
          <div class="d-flex justify-content-end align-items-center mt-3 mb-3 col-lg-6 col-md-6 col-sm-12">
            <button
              id="add-site-btn"
              class="py-1 btn profile-page-btn-11 mr-4"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              style={{
                boxShadow: "rgb(174 168 168) 0px 3px 6px",
                borderRadius: "5px",
                width: "150px",
                marginLeft: "0px",
                background: "rgba(214, 252, 208, 1)",
              }}
            >
              Add Site
              <i class="fa-solid fa-circle-plus ml-4"></i>
            </button>
            <button
              id="delete-site-btn"
              class="py-2 px-2 mr-2 btn profile-page-btn-11"
              onClick={onClickDeleteButton}
              style={{
                boxShadow: "rgb(174 168 168) 0px 3px 6px",
                borderRadius: "5px",
                width: "150px",
                marginLeft: "0px",
                background: "rgba(214, 252, 208, 1)",
              }}
            >
              <a
                to="/deleteSite"
                type="button"
                style={{ textDecoration: "none", color: "black" }}
              >
                <span style={{ padding: "15px" }}>Delete Site</span>
                <img src={bin} alt="" />
              </a>
              {/* <img className="ml-3" src={bin} alt="" /> */}
              {/* <i class="fa-solid fa-trash ml-3"></i> */}
            </button>
            <button
              type="submit"
              id="delete-done-btn"
              class="py-1 mr-2 btn profile-page-btn-11 d-none"
              style={{
                boxShadow: "rgb(174 168 168) 0px 3px 6px",
                borderRadius: "5px",
              }}
            >
              Done
              <i class="fa-solid fa-check ml-3"></i>
            </button>
          </div>
        </div>
        <div className="overflow-auto fixTableHead mt-3">
          <table className="w-full">
            <thead style={{ height: "70px" }}>
              <tr>
                <th className="w-20 p-3 color-change font-semibold traking-wide-12 text-center">
                  Sr.No
                </th>
                <th className="w-40 p-3 color-change font-semibold traking-wide-12 text-center">
                  {" "}
                  Site Name
                </th>
                <th className="w-30 p-3 color-change font-semibold traking-wide-12 text-center">
                  Total Guards
                </th>
                <th className="w-60 p-3 color-change font-semibold traking-wide-12 text-center">
                  View Employee
                </th>
                <th className="w-30 p-3 color-change font-semibold traking-wide-12 text-center">
                  Payment Closing Details
                </th>
                <th className="w-30 p-3 color-change font-semibold traking-wide-12 text-center">
                  Area Manager
                </th>
                <th className="w-16 p-3 color-change font-semibold traking-wide-12 text-center delete-toggle-12 d-none">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr style={{ height: "40px" }}>
                <td className="traking-wide-12 text-center px-4">01</td>
                <td className="traking-wide-12 text-center px-4">
                  Central Mall
                </td>
                <td className="traking-wide-12 text-center px-4">10</td>
                <td className="traking-wide-12 text-center px-4">
                  <button
                    class=" btn-success btnaa11"
                    style={{ width: "60px" }}
                  >
                    View
                  </button>
                </td>
                <td className="traking-wide-12 text-center px-4">
                  <button
                    class=" btn-success btnaa11"
                    style={{ width: "60px" }}
                  >
                    View
                  </button>
                </td>
                <td className="traking-wide-12 text-center px-4">
                  Ramesh Singh
                </td>
                <td className="traking-wide-12 text-center px-4 delete-toggle-12 d-none">
                  <img className="ml-4" src={bin} alt="" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* <!-- Modal --> */}
        <div
          class="modal fade"
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalCenterTitle">
                  Add Site
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <label for="exampleInputPassword1" class="form-label">
                  Site Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Site Name"
                />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LaC_profile;
