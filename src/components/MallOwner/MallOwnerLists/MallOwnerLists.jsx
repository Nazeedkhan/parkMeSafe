import React from "react";
import "./MallOwnerLists.css";
import $ from "jquery";
const MallOwnerLists = () => {
  // const [selectedDate, setSelectedDate] = useState(new Date());
  // const handleDateChange = (date) => {
  //   setSelectedDate(date);
  // };
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
    <>
      <div
        className="container main12"
        style={{ padding: "7vh 7vw", backgroundColor: "white" }}
      >
        <div
          className="mb-3"
          style={{ textAlign: "center", width: "100%", paddingBottom: "14px" }}
        >
          <span
            className="pb-3"
            style={{
              fontSize: "xx-large",
              color: "#1093a4",
              paddingBttom: " 20px",
              paddingBottom: "20px",
              borderBottom: "1px solid #1093a4",
            }}
          >
            Mall Owner List
          </span>
        </div>

        <div className="searchingBar13">
          <form1 className="searching13 searchbox13">
            <button className="buttonSearch13" type="submit">Search</button>
            <div className="placebox13">
            <input className="search13" type="search" placeholder="Search..." />
            </div>
          </form1>
        </div>
        <div className="overflow-auto fixTableHead mt-5">
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
                  Site Name
                </th>
                <th className="w-24 p-3 color-change font-semibold traking-wide text-center">
                  Mail
                </th>
                <th className="w-24 p-3 color-change font-semibold traking-wide text-center">
                  Mobile Number
                </th>
                <th className="w-24 p-3 color-change font-semibold traking-wide text-center">
                  Mall Profile
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr style={{ height: "40px" }}>
                <td className="traking-wide text-center">1</td>
                <td className="traking-wide text-center">Nazeed</td>
                <td className="traking-wide text-center">Random</td>
                <td className="traking-wide text-center">mail</td>
                <td className="traking-wide text-center">1001001</td>
                <td className="traking-wide text-center extending">
                  <button
                    type="button"
                    className="responsiveBtn1 respBtn1 btn btn-success "
                    style={{
                      borderRadius: "12px",
                      backgroundColor: "#2beb0c",
                      fontWeightt: "700",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "16px",
                    }}
                  >
                    <div className="">
                      {" "}
                      <span className="large ">
                        <a href="mallOwnerProfile">View</a>
                      </span>
                    </div>
                  </button>
                </td>
              </tr>
              <tr style={{ height: "40px", backgroundColor: "#e2fcde" }}>
                <td className="traking-wide text-center">2</td>
                <td className="traking-wide text-center">Nazeed</td>
                <td className="traking-wide text-center">Random</td>
                <td className="traking-wide text-center">mail</td>
                <td className="traking-wide text-center">1001001</td>
                <td className="traking-wide text-center extending">
                  <button
                    type="button"
                    className="responsiveBtn1 respBtn1 btn btn-success "
                    style={{
                      borderRadius: "12px",
                      backgroundColor: "#2beb0c",
                      fontWeightt: "700",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "16px",
                    }}
                  >
                    <div className="">
                      {" "}
                      <span className="large ">
                        <a href="mallOwnerProfile">View</a>
                      </span>
                    </div>
                  </button>
                </td>
              </tr>
              <tr style={{ height: "40px" }}>
                <td className="traking-wide text-center">3</td>
                <td className="traking-wide text-center">Nazeed</td>
                <td className="traking-wide text-center">Random</td>
                <td className="traking-wide text-center">mail</td>
                <td className="traking-wide text-center">1001001</td>
                <td className="traking-wide text-center extending">
                  <button
                    type="button"
                    className="responsiveBtn1 respBtn1 btn btn-success "
                    style={{
                      borderRadius: "12px",
                      backgroundColor: "#2beb0c",
                      fontWeightt: "700",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "16px",
                    }}
                  >
                    <div className="">
                      {" "}
                      <span className="large ">
                        <a href="mallOwnerProfile">View</a>
                      </span>
                    </div>
                  </button>
                </td>
              </tr>
              <tr style={{ height: "40px", backgroundColor: "#e2fcde" }}>
                <td className="traking-wide text-center">4</td>
                <td className="traking-wide text-center">Nazeed</td>
                <td className="traking-wide text-center">Random</td>
                <td className="traking-wide text-center">mail</td>
                <td className="traking-wide text-center">1001001</td>
                <td className="traking-wide text-center extending">
                  <button
                    type="button"
                    className="responsiveBtn1 respBtn1 btn btn-success "
                    style={{
                      borderRadius: "12px",
                      backgroundColor: "#2beb0c",
                      fontWeightt: "700",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "16px",
                    }}
                  >
                    <div className="">
                      {" "}
                      <span className="large ">
                        <a href="mallOwnerProfile">View</a>
                      </span>
                    </div>
                  </button>
                </td>
              </tr>
              <tr style={{ height: "40px" }}>
                <td className="traking-wide text-center">5</td>
                <td className="traking-wide text-center">Nazeed</td>
                <td className="traking-wide text-center">Random</td>
                <td className="traking-wide text-center">mail</td>
                <td className="traking-wide text-center">1001001</td>
                <td className="traking-wide text-center extending">
                  <button
                    type="button"
                    className="responsiveBtn1 respBtn1 btn btn-success "
                    style={{
                      borderRadius: "12px",
                      backgroundColor: "#2beb0c",
                      fontWeightt: "700",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "16px",
                    }}
                  >
                    <div className="">
                      {" "}
                      <span className="large ">
                        <a href="mallOwnerProfile">View</a>
                      </span>
                    </div>
                  </button>
                </td>
              </tr>
              <tr style={{ height: "40px", backgroundColor: "#e2fcde" }}>
                <td className="traking-wide text-center">6</td>
                <td className="traking-wide text-center">Nazeed</td>
                <td className="traking-wide text-center">Random</td>
                <td className="traking-wide text-center">mail</td>
                <td className="traking-wide text-center">1001001</td>
                <td className="traking-wide text-center extending">
                  <button
                    type="button"
                    className="responsiveBtn1 respBtn1 btn btn-success "
                    style={{
                      borderRadius: "12px",
                      backgroundColor: "#2beb0c",
                      fontWeightt: "700",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "16px",
                    }}
                  >
                    <div className="">
                      {" "}
                      <span className="large ">
                        <a href="mallOwnerProfile">View</a>
                      </span>
                    </div>
                  </button>
                </td>
              </tr>
              <tr style={{ height: "40px" }}>
                <td className="traking-wide text-center">7</td>
                <td className="traking-wide text-center">Nazeed</td>
                <td className="traking-wide text-center">Random</td>
                <td className="traking-wide text-center">mail</td>
                <td className="traking-wide text-center">1001001</td>
                <td className="traking-wide text-center extending">
                  <button
                    type="button"
                    className="responsiveBtn1 respBtn1 btn btn-success "
                    style={{
                      borderRadius: "12px",
                      backgroundColor: "#2beb0c",
                      fontWeightt: "700",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "16px",
                    }}
                  >
                    <div className="">
                      {" "}
                      <span className="large ">
                        <a href="mallOwnerProfile">View</a>
                      </span>
                    </div>
                  </button>
                </td>
              </tr>
              <tr style={{ height: "40px", backgroundColor: "#e2fcde" }}>
                <td className="traking-wide text-center">8</td>
                <td className="traking-wide text-center">Nazeed</td>
                <td className="traking-wide text-center">Random</td>
                <td className="traking-wide text-center">mail</td>
                <td className="traking-wide text-center">1001001</td>
                <td className="traking-wide text-center extending">
                  <button
                    type="button"
                    className="responsiveBtn1 respBtn1 btn btn-success "
                    style={{
                      borderRadius: "12px",
                      backgroundColor: "#2beb0c",
                      fontWeightt: "700",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "16px",
                    }}
                  >
                    <div className="">
                      {" "}
                      <span className="large ">
                        <a href="mallOwnerProfile">View</a>
                      </span>
                    </div>
                  </button>
                </td>
              </tr>
              <tr style={{ height: "40px" }}>
                <td className="traking-wide text-center">9</td>
                <td className="traking-wide text-center">Nazeed</td>
                <td className="traking-wide text-center">Random</td>
                <td className="traking-wide text-center">mail</td>
                <td className="traking-wide text-center">1001001</td>
                <td className="traking-wide text-center extending">
                  <button
                    type="button"
                    className="responsiveBtn1 respBtn1 btn btn-success "
                    style={{
                      borderRadius: "12px",
                      backgroundColor: "#2beb0c",
                      fontWeightt: "700",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "16px",
                    }}
                  >
                    <div className="">
                      {" "}
                      <span className="large ">
                        <a href="mallOwnerProfile">View</a>
                      </span>
                    </div>
                  </button>
                </td>
              </tr>
              <tr style={{ height: "40px", backgroundColor: "#e2fcde" }}>
                <td className="traking-wide text-center">10</td>
                <td className="traking-wide text-center">Nazeed</td>
                <td className="traking-wide text-center">Random</td>
                <td className="traking-wide text-center">mail</td>
                <td className="traking-wide text-center">1001001</td>
                <td className="traking-wide text-center extending">
                  <button
                    type="button"
                    className="responsiveBtn1 respBtn1 btn btn-success "
                    style={{
                      borderRadius: "12px",
                      backgroundColor: "#2beb0c",
                      fontWeightt: "700",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "16px",
                    }}
                  >
                    <div className="">
                      {" "}
                      <span className="large ">
                        <a href="mallOwnerProfile">View</a>
                      </span>
                    </div>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          className="pagination"
          style={{
            marginTop: "5vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color:"black"
          }}
        >
          <a style={{color:"black",margin:"3px"}} href="YetToCome">&laquo;</a>
          <a style={{color:"black",margin:"3px"}} href="YetToCome">1</a>
          <a style={{ border: "none", color: "black" }} href="YetToCome">
            /
          </a>
          <a style={{ border: "none", color: "black",margin:"3px" }} href="YetToCome">
            3
          </a>
          <a style={{ color: "black",margin:"3px" }} href="YetToCome">
            &raquo;
          </a>
        </div>
      </div>
    </>
  );
};

export default MallOwnerLists;
