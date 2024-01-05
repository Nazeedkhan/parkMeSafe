import React, { useEffect, useState } from "react";
import "./TotalRevenue.css";
import axios from "axios";
import filter from "../Icons/filter.svg";
import excel from "../Icons/excel.svg";
import { CSVLink } from "react-csv";

function TotalRevenue() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/TotalRevenue")
      .then((res) => {
        // console.log(res);
        setData(res.data.totalRevenueData);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  // console.log(data);

  const [query, setQuery] = useState("");

  const headers = [
    { label: "Sr No.", key: "srno" },
    { label: "Site Name", key: "site_name" },
    { label: "2 Wheeler Revenue", key: "two_wheeler_revenue" },
    { label: "4 Wheeler Revenue", key: "four_wheeler_revenue" },
    { label: "Total Revenue", key: "total_revenue" },
    { label: "Site Profile", key: "site_profile" },
  ];

  const csvReport = {
    filename: "Total_Revenue_Data.csv",
    headers: headers,
    data: data,
  };

  return (
    <div>
      <div>
        <div className="container">
          <div className="row mb-4">
            <div className="col col-all-title-10">
              <h3 className="h2-title" style={{ textAlign: "center" }}>
                Total Revenue
              </h3>
            </div>
          </div>

          <div className="ml-lg-5  ml-md-1 ">
            <div className="filtericon pl-md-3 ml-md-5">
              <img className="filter" src={filter} alt="filter" />
            </div>
            <div>
              <div className="boxfilter ">
                <div className="dailyfilter">
                  <div className="daily">Select</div>
                  <div className="dropdown-arrow"></div>
                  <div className="dropdown-menu">
                    <ul>
                      <li>Daily</li>
                      <li>Monthly</li>
                    </ul>
                  </div>
                </div>

                <div className="custom-park">
                  <input type="date" value="2018-07-22" min="2018-01-01" />
                </div>
                <div className="to">
                  <p>To</p>
                </div>
                <div className="custom1-park">
                  <input type="date" value="2018-07-22" min="2018-01-01" />
                </div>
              </div>
            </div>
          </div>

          <div className="row park-row-10 ml-md-5">
            <div className="col-sm-12 col-lg-5 d-flex text-sm-left text-md-center col-xs-left mr-md-auto forms-10">
              <div>
                <div className="input-group mb-3 park-search mr-3">
                  <div className="input-group-prepend park-title-10">
                    <span>Site</span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="user"
                    placeholder="Enter Site Name"
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </div>
              </div>
              <div className="float-sm-right">
                <CSVLink {...csvReport}>
                  <button type="button" className="btn btn-all-10">
                    <img src={excel} alt="excel" width={"50%"} />
                    <br></br>
                    <p
                      style={{
                        fontSize: 7,
                        fontFamily: "Open Sans",
                        fontWeight: 150,
                      }}
                    >
                      click here to download
                    </p>
                  </button>
                </CSVLink>
              </div>
            </div>
          </div>

          <div className="col-sm-12 mt-0">
            <div className="table responsive table-rev-10">
              <table
                id="myTable1-10"
                role="grid"
                className="table table-striped table-sm table-css table-responnsive"
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
                      Site Name
                    </th>
                    <th
                      className="th-sm cell-all-10"
                      tabindex="0"
                      aria-controls="myTable"
                      rowspan="1"
                      colspan="1"
                      style={{ width: "58px" }}
                    >
                      2 Wheeler Revenue
                    </th>
                    <th
                      className="th-sm cell-all-10"
                      tabindex="0"
                      aria-controls="myTable"
                      rowspan="1"
                      colspan="1"
                      style={{ width: "58px" }}
                    >
                      4 Wheeler Revenue
                    </th>
                    <th
                      className="th-sm cell-all-10"
                      tabindex="0"
                      aria-controls="myTable"
                      rowspan="1"
                      colspan="1"
                      style={{ width: "57px" }}
                    >
                      Total Revenue
                    </th>
                    <th
                      className="th-sm cell-all-10"
                      tabindex="0"
                      aria-controls="myTable"
                      rowspan="1"
                      colspan="1"
                      style={{ width: "56px" }}
                    >
                      Site Profile
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data
                    .filter((post) => post.site_name.includes(query))
                    .map((post, index) => {
                      return (
                        <tr role="row">
                          <td className="cell-all-10">{index + 1}</td>
                          <td className="cell-all-10">{post.site_name}</td>
                          <td className="cell-all-10">
                            {post.two_wheeler_revenue}
                          </td>
                          <td className="cell-all-10">
                            {post.four_wheeler_revenue}
                          </td>
                          <td className="cell-all-10">{post.total_revenue}</td>
                          <td className="cell-all-10">{post.site_profile}</td>
                        </tr>
                      );
                    })}
                  {/* <tr role="row">
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
                  </tr> */}
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

export default TotalRevenue;
