import React from "react";
import "./LabourCompanyGuardList.css";

const LC_Guard_List = () => {
  return (
    <div style={{ padding: "7vh 7vw" }}>
      <h1 class="header0011 mt-1">
        <span class="header_text0011">Guard List At Central Mall</span>
      </h1>
      <div class="table_main0011">
        <div className="overflow-auto fixTableHead0011 mt-3">
          <table className="w-full text">
            <thead>
              <tr class="table_header_color0011">
                <th className="w-20 p-3 font-semibold traking-wide text-center">
                  Name
                </th>
                <th className="w-24 p-3 font-semibold traking-wide text-center">
                  Mobile No.
                </th>
                <th className="w-24 p-3 font-semibold traking-wide text-center">
                  Alt Mobile No.
                </th>
                <th className="w-24 p-3 font-semibold traking-wide text-center ">
                  Email
                </th>
                <th className="w-24 p-3 font-semibold traking-wide text-center ">
                  Address
                </th>
                <th className="w-24 p-3 font-semibold traking-wide text-center ">
                  Work Timing
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr style={{ height: "40px" }}>
                <td className="traking-wide text-center">Ramesh Singh</td>
                <td className="traking-wide text-center">8089243518</td>
                <td className="traking-wide text-center">7620861988</td>
                <td className="traking-wide text-center">abc@gmail.com</td>
                <td className="traking-wide text-center">Mumbai</td>
                <td className="traking-wide text-center">11:00 AM - 5:00 PM</td>
              </tr>
              <tr class="table_row_color0011" style={{ height: "40px" }}>
                <td className="traking-wide text-center">Ramesh Singh</td>
                <td className="traking-wide text-center">8089243518</td>
                <td className="traking-wide text-center">7620861988</td>
                <td className="traking-wide text-center">abc@gmail.com</td>
                <td className="traking-wide text-center">Mumbai</td>
                <td className="traking-wide text-center">11:00 AM - 5:00 PM</td>
              </tr>
              <tr style={{ height: "40px" }}>
                <td className="traking-wide text-center">Ramesh Singh</td>
                <td className="traking-wide text-center">8089243518</td>
                <td className="traking-wide text-center">7620861988</td>
                <td className="traking-wide text-center">abc@gmail.com</td>
                <td className="traking-wide text-center">Mumbai</td>
                <td className="traking-wide text-center">11:00 AM - 5:00 PM</td>
              </tr>
              <tr class="table_row_color0011" style={{ height: "40px" }}>
                <td className="traking-wide text-center">Ramesh Singh</td>
                <td className="traking-wide text-center">8089243518</td>
                <td className="traking-wide text-center">7620861988</td>
                <td className="traking-wide text-center">abc@gmail.com</td>
                <td className="traking-wide text-center">Mumbai</td>
                <td className="traking-wide text-center">11:00 AM - 5:00 PM</td>
              </tr>{" "}
              <tr style={{ height: "40px" }}>
                <td className="traking-wide text-center">Ramesh Singh</td>
                <td className="traking-wide text-center">8089243518</td>
                <td className="traking-wide text-center">7620861988</td>
                <td className="traking-wide text-center">abc@gmail.com</td>
                <td className="traking-wide text-center">Mumbai</td>
                <td className="traking-wide text-center">11:00 AM - 5:00 PM</td>
              </tr>
              <tr class="table_row_color0011" style={{ height: "40px" }}>
                <td className="traking-wide text-center">Ramesh Singh</td>
                <td className="traking-wide text-center">8089243518</td>
                <td className="traking-wide text-center">7620861988</td>
                <td className="traking-wide text-center">abc@gmail.com</td>
                <td className="traking-wide text-center">Mumbai</td>
                <td className="traking-wide text-center">11:00 AM - 5:00 PM</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="pagination11 d-flex justify-content-center">
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
    </div>
  );
};

export default LC_Guard_List;
