import React, { useState, useEffect } from "react";
import "./CustomerReview.css";
import $ from "jquery";
import excel from "./excel.svg";
import filter from "./filter.svg";
import { CSVLink } from "react-csv";

function CustomerReview() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/customerReview")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setData(result);
      });
  }, []);
  // console.log(data);

  const [query, setQuery] = useState("");
  // console.log(data.filter(post=>post.site_name.includes("park")));

  const [selectedDate, setSelectedDate] = useState(new Date());

  const headers = [
    { label: "Sr No.", key: "srno" },
    { label: "Name", key: "name" },
    { label: "Vehicle Type", key: "vehicle_type" },
    { label: "Site Name", key: "site_name" },
    { label: "Date", key: "date" },
    { label: "Review", key: "review" },
    { label: "View Profile", key: "view_profile" },
  ];

  const csvReport = {
    filename: "Customer_Reviews_Data.csv",
    headers: headers,
    data: data,
  };
  // const [gridApi, setGridApi] = useState();

  // const onGridReady = (params) => {
  //   setGridApi(params);
  // };

  // const onclickhandlerforRecentDays=()=>{
  // }

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  document.addEventListener("DOMContentLoaded", function (e) {
    $('[name="date"]')
      .datepicker({
        format: "dd/mm/yyyy",
      })
      .on("changeDate", function (e) {
        // do somwthing here
      });
  });

  return (
    <div
      className="mx-auto main12"
      style={{
        padding: "4vh 7vw",
        backgroundColor: "white",
        marginTop: "5px",
        width: "100%",
      }}
    >
      <div
        className="mb-4"
        style={{ textAlign: "center", width: "100%", paddingBottom: "14px" }}
      >
        <span
          className="pb-3"
          style={{
            fontSize: "xx-large",
            color: "#59599d",
            paddingBttom: " 20px",
            paddingBottom: "20px",
            borderBottom: "1px solid #59599d",
          }}
        >
          Customer Review
        </span>
      </div>

      <div className="row filter-div mb-4 d-flex justify-content-start align-items-center">
        <div className="col-sm-12 col-lg-3 col-md-3  filter-and-dropdown d-flex  align-items-center">
          <img className="me-3" src={filter} alt="" />
          <div class="dropdown ml-4" style={{ padding: 0, margin: 0 }}>
            <button
              class="btn dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{
                width: "120px",
                boxShadow: "rgb(174 168 168) 0px 3px 6px",
                borderColor: "none",
              }}
            >
              Daily
            </button>
            <div
              class="dropdown-menu"
              aria-labelledby="dropdownMenuButton"
              style={{ backgroundColor: "white" }}
              // onClick={onclickhandlerforRecentDays}
            >
              <a class="dropdown-item" href="#">
                Daily
              </a>
              <a class="dropdown-item" href="#">
                Last 7 Days
              </a>
              <a class="dropdown-item" href="#">
                Last 30 Days
              </a>
            </div>
          </div>
        </div>

        <div className="d-flex col-sm-12 col-lg-6 col-md-6  align-items-center">
          <div class="stop-margin">
            <input
              type="date"
              class="form-control calender"
              name="date"
              style={{ boxShadow: "rgb(174 168 168) 0px 3px 6px" }}
            />
            {/* <i class="fa fa-calendar"></i> */}
          </div>
          <span className="mx-2">To</span>
          <div class="">
            <input
              type="date"
              class="form-control calender"
              name="date"
              style={{ boxShadow: "rgb(174 168 168) 0px 3px 6px" }}
            />
            {/* <i class="fa fa-calendar"></i> */}
          </div>
        </div>
      </div>

      <div
        className="d-flex justify-content-end align-items-center"
        style={{ marginRight: "2vw" }}
      >
        <div className="mr-4 d-flex align-items-center">
          {/* <button type="button" class="btn btn-light px-5 mx-3" style={{ boxShadow: "rgb(174 168 168) 0px 3px 6px" }}>Site</button> */}
          <span className="mr-3">Site</span>
          <input
            class="form-control"
            type="search"
            placeholder="Enter Site Name"
            aria-label="Search"
            style={{ borderRadius: "7px" }}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div>
          <CSVLink {...csvReport}>
            <img
              src={excel}
              alt=""
              style={{ marginLeft: "30%", width: "35%" }}
            />
            <p
              id="test"
              className="downloadButton"
              style={{ fontSize: "x-small", margin: 0, color: "black" }}
            >
              click here to download
            </p>
          </CSVLink>
        </div>
      </div>

      <div className="overflow-auto fixTableHead mt-4">
        <table className="w-full">
          <thead style={{ height: "70px" }}>
            <tr>
              <th className="w-20 p-3 color-change font-semibold traking-wide text-center">
                Sr.No
              </th>
              <th className="w-24 p-3 color-change font-semibold traking-wide text-center">
                Name
              </th>
              <th className="w-24 p-3 color-change font-semibold traking-wide text-center">
                Vehicle Type
              </th>
              <th className="w-24 p-3 color-change font-semibold traking-wide text-center">
                Site Name
              </th>
              <th className="w-24 p-3 color-change font-semibold traking-wide text-center">
                Time:Date
              </th>
              <th className="w-24 p-3 color-change font-semibold traking-wide text-center">
                Review
              </th>
              <th className="w-24 p-3 color-change font-semibold traking-wide text-center">
                View Profile
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.map((post, index) => (
              <tr key={index} style={{ height: "40px" }}>
                <td className="traking-wide text-center">{index + 1}</td>
                <td className="traking-wide text-center">{post.name}</td>
                <td className="traking-wide text-center">
                  {post.vehicle_type}
                </td>
                <td className="traking-wide text-center" key={post.srno}>
                  {post.site_name}
                </td>
                <td className="traking-wide text-center">{post.date}</td>
                <td className="traking-wide text-center">{post.review}</td>
                <td className="traking-wide text-center">
                  <button type="button" class="btn btn-success view-btn-12">
                    <span className="small">View</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CustomerReview;
