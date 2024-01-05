import React from "react";
import "./UserTotalPayment.css"

import download from "../Icons/download.svg"

function UserTotalPayment() {
    return (
        <div>
           
            <div >
                <div className="container">
                    <div className="row mb-4">
                        <div className="col col-all-title-10">
                            <h3 className="h2-title" style={{textAlign:"center"}}>Total Payment</h3>
                        </div>
                    </div>

                    <div className="col-sm-12 ">
                        <div className="table responsive table-mgePayment-10">
                            <table id="myTable-mgePayment-10" role="grid" className="table table-striped table-sm table-css table-responnsive " cellspacing="0" width="100%">
                                <thead>
                                    <tr role="row">
                                        <th className="th-sm cell-all-10" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" style={{ width: "53px" }} >Sr.No

                                        </th>
                                        <th className="th-sm cell-all-10" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" style={{ width: "57px" }} >Date

                                        </th>
                                        <th className="th-sm cell-all-10" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" style={{ width: "58px" }} >Payment Method

                                        </th>
                                        <th className="th-sm cell-all-10" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" style={{ width: "58px" }} >Amount

                                        </th>
                                        <th className="th-sm cell-all-10" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" style={{ width: "57px" }} >Site Name

                                        </th>
                                        <th className="th-sm cell-all-10" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" style={{ width: "56px" }} >Slot

                                        </th>
                                        <th className="th-sm cell-all-10" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" style={{ width: "56px" }} >Download Receipt

                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr role="row">
                                        <td className="cell-all-10"></td>
                                        <td className="cell-all-10"></td>
                                        <td className="cell-all-10"> </td>
                                        <td className="cell-all-10"> </td>
                                        <td className="cell-all-10"></td>
                                        <td className="cell-all-10"> </td>
                                        <td className="cell-all-10">
                                            <button type="button" className="btn drop-all-10 btn-all-10"><img src={download} alt="download" /></button>
                                        </td>
                                    </tr>
                                    <tr role="row">
                                        <td className="cell-all-10"></td>
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
                                        <td className="cell-all-10"></td>
                                    </tr>
                                    <tr role="row">
                                        <td className="cell-all-10"></td>
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
                                        <td className="cell-all-10"></td>
                                    </tr>
                                    <tr role="row">
                                        <td className="cell-all-10"></td>
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
                                        <td className="cell-all-10"></td>
                                    </tr>
                                    <tr role="row">
                                        <td className="cell-all-10"></td>
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
                                <a className="page-link" href="#" aria-label="Previous" style={{ borderRadius: "10px" }}>
                                    <span aria-hidden="true"><i className="fa-solid fa-chevron-left"></i></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item totalpages-10"><p> / 20</p></li>
                            <li className="page-item chevron-right-10">
                                <a className="page-link" href="#" aria-label="Next" style={{ borderRadius: "10px" }}>
                                    <span aria-hidden="true"><i className="fa-solid fa-chevron-right"></i></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default UserTotalPayment