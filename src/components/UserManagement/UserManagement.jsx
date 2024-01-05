import React from "react";
import "./UserManagement.css";
import filter from "../Icons/filter.svg";
import { Link } from "react-router-dom";

function UserManagement() {
  return (
    <div>
      <div >
        <div className="container">
          <div className="row mb-4">
            <div className="col col-all-title-10">
              <h3 className="h2-title" style={{textAlign:"center"}}>User Management</h3>
            </div>
          </div>

          <div className="ml-md-3">
            <div className="filtericon-manage-10 pl-md-3 ml-md-5">
              <img className="filter" src={filter} alt="filter" />
            </div>
            <div className="row ">
              <div className="col-3 ">
                <div className="btn-group pull-left manage-10">
                  <a
                    href="/yetToCome"
                    className="btn drop-all-10 btn-secondary manage-btn-10 dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Select
                  </a>
                  <div className="dropdown-menu dropdown-menu-right manage-menu-10">
                    <a
                      href="/yetToCome"
                      className="dropdown-item manage-menuitem-10"
                    >
                      2 Wheeler
                    </a>
                    <a
                      href="/yetToCome"
                      className="dropdown-item manage-menuitem-10"
                    >
                      4 Wheeler
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 ">
            <div className="table responsive table-manage-10">
              <table
                id="myTable-manage-10"
                role="grid"
                className="table table-striped table-sm table-css table-responnsive "
                cellspacing="0"
                width="100%"
              >
                <thead>
                  <tr role="row">
                    <th
                      className="th-sm cell-all-10"
                      tabindex="0"
                      aria-controls="myTable"
                      rowspan="1"
                      colspan="1"
                      style={{ width: "53px" }}
                    >
                      Sr.No
                    </th>
                    <th
                      className="th-sm cell-all-10"
                      tabindex="0"
                      aria-controls="myTable"
                      rowspan="1"
                      colspan="1"
                      style={{ width: "57px" }}
                    >
                      Name
                    </th>
                    <th
                      className="th-sm cell-all-10"
                      tabindex="0"
                      aria-controls="myTable"
                      rowspan="1"
                      colspan="1"
                      style={{ width: "58px" }}
                    >
                      Total Booking
                    </th>
                    <th
                      className="th-sm cell-all-10"
                      tabindex="0"
                      aria-controls="myTable"
                      rowspan="1"
                      colspan="1"
                      style={{ width: "58px" }}
                    >
                      Total Payment
                    </th>
                    <th
                      className="th-sm cell-all-10"
                      tabindex="0"
                      aria-controls="myTable"
                      rowspan="1"
                      colspan="1"
                      style={{ width: "57px" }}
                    >
                      Date: Review
                    </th>
                    <th
                      className="th-sm cell-all-10"
                      tabindex="0"
                      aria-controls="myTable"
                      rowspan="1"
                      colspan="1"
                      style={{ width: "56px" }}
                    >
                      View Profile
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr role="row">
                    <td className="cell-all-10"></td>
                    <td className="cell-all-10"></td>
                    <td className="cell-all-10">
                      <Link
                        to="/userTotalBooking"
                        exact
                        className="btn drop-all-10 btn-sm button-manage-10"
                      >
                        View
                      </Link>
                    </td>
                    <td className="cell-all-10">
                      <Link
                        to="/userTotalPayment"
                        exact
                        className="btn drop-all-10 btn-sm button-manage-10"
                      >
                        View
                      </Link>
                    </td>
                    <td className="cell-all-10"></td>
                    <td className="cell-all-10">
                      <Link
                        to="/UserProfile"
                        exact
                        className="btn drop-all-10 btn-sm button-manage-10"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                  <tr role="row">
                    <td className="cell-all-10"></td>
                    <td className="cell-all-10"></td>
                    <td className="cell-all-10"></td>
                    <td className="cell-all-10"></td>
                    <td className="cell-all-10"></td>
                    <td className="cell-all-10"></td>
                  </tr>
                  <tr role="row">
                    <td className="cell-all-10"></td>
                    <td className="cell-all-10"></td>
                    <td className="cell-all-10"></td>
                    <td className="cell-all-10"></td>
                    <td className="cell-all-10"></td>
                    <td className="cell-all-10"></td>
                  </tr>
                  <tr role="row">
                    <td className="cell-all-10"></td>
                    <td className="cell-all-10"></td>
                    <td className="cell-all-10"></td>
                    <td className="cell-all-10"></td>
                    <td className="cell-all-10"></td>
                    <td className="cell-all-10"></td>
                  </tr>
                  <tr role="row">
                    <td className="cell-all-10"></td>
                    <td className="cell-all-10"></td>
                    <td className="cell-all-10"></td>
                    <td className="cell-all-10"></td>
                    <td className="cell-all-10"></td>
                    <td className="cell-all-10"></td>
                  </tr>
                  <tr role="row">
                    <td className="cell-all-10"></td>
                    <td className="cell-all-10"></td>
                    <td className="cell-all-10"></td>
                    <td className="cell-all-10"></td>
                    <td className="cell-all-10"></td>
                    <td className="cell-all-10"></td>
                  </tr>
                  <tr role="row">
                    <td className="cell-all-10"></td>
                    <td className="cell-all-10"></td>
                    <td className="cell-all-10"></td>
                    <td className="cell-all-10"></td>
                    <td className="cell-all-10"></td>
                    <td className="cell-all-10"></td>
                  </tr>
                  <tr role="row">
                    <td className="cell-all-10"></td>
                    <td className="cell-all-10"></td>
                    <td className="cell-all-10"></td>
                    <td className="cell-all-10"></td>
                    <td className="cell-all-10"></td>
                    <td className="cell-all-10"></td>
                  </tr>
                </tbody>
              </table>
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
    </div>
  );
}

export default UserManagement;
