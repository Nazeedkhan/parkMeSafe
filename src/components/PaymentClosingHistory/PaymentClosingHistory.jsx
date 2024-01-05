import React from "react";
import "./PaymentClosingHistory.css";

const LC_Payment_History = () => {
  return (
    <>
      <h1 class="header011">
        <span class="header_text011">Payment Closing At Central Mall</span>
      </h1>
      <div class="table_main011">
        <div className="overflow-auto fixTableHead011 mt-5">
          <table className="w-full text">
            <thead>
              <tr class="table_header_color011">
                <th className="w-20 p-3 font-semibold traking-wide text-center">
                  Date
                </th>
                <th className="w-24 p-3 font-semibold traking-wide text-center">
                  Time
                </th>
                <th className="w-24 p-3 font-semibold traking-wide text-center">
                  {" "}
                  Guard
                </th>
                <th className="w-24 p-3 font-semibold traking-wide text-center ">
                  Name
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr style={{ height: "40px" }}>
                <td className="traking-wide text-center">10-05-2022</td>
                <td className="traking-wide text-center">11.30</td>
                <td className="traking-wide text-center">5</td>
                <td className="traking-wide text-center">Ramesh Singh</td>
              </tr>
              <tr class="table_row_color011" style={{ height: "40px" }}>
                <td className="traking-wide text-center">10-05-2022</td>
                <td className="traking-wide text-center">11.30</td>
                <td className="traking-wide text-center">5</td>
                <td className="traking-wide text-center">Ramesh Singh</td>
              </tr>
              <tr style={{ height: "40px" }}>
                <td className="traking-wide text-center">10-05-2022</td>
                <td className="traking-wide text-center">11.30</td>
                <td className="traking-wide text-center">5</td>
                <td className="traking-wide text-center">Ramesh Singh</td>
              </tr>
              <tr class="table_row_color011" style={{ height: "40px" }}>
                <td className="traking-wide text-center">10-05-2022</td>
                <td className="traking-wide text-center">11.30</td>
                <td className="traking-wide text-center">5</td>
                <td className="traking-wide text-center">Ramesh Singh</td>
              </tr>
              <tr style={{ height: "40px" }}>
                <td className="traking-wide text-center">10-05-2022</td>
                <td className="traking-wide text-center">11.30</td>
                <td className="traking-wide text-center">5</td>
                <td className="traking-wide text-center">Ramesh Singh</td>
              </tr>
              <tr class="table_row_color011" style={{ height: "40px" }}>
                <td className="traking-wide text-center">10-05-2022</td>
                <td className="traking-wide text-center">11.30</td>
                <td className="traking-wide text-center">5</td>
                <td className="traking-wide text-center">Ramesh Singh</td>
              </tr>
              <tr style={{ height: "40px" }}>
                <td className="traking-wide text-center">10-05-2022</td>
                <td className="traking-wide text-center">11.30</td>
                <td className="traking-wide text-center">5</td>
                <td className="traking-wide text-center">Ramesh Singh</td>
              </tr>
            </tbody>
          </table>
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
    </>
  );
};

export default LC_Payment_History;
