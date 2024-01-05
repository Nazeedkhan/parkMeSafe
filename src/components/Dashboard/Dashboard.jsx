import React from "react";
import "./Dashboard.css";
import filter from "../Icons/filter.svg";
import eye from "../Icons/eye.svg";
import bike from "../Icons/bike.svg";
import car from "../Icons/car.svg";

import Bargraph from "../Bargraph/Bargraph";
import BikePieChart from "../BikePieChart/BikePieChart";
import CarPieChart from "../CarPieChart/CarPieChart";
import { Link } from "react-router-dom";
// import Navbar from "../Navbar/Navbar";
// import Sidebar from "../Sidebar/Sidebar";

function Dashboard() {
    return (
        <div>

            <div >
                <div className="filters">
                    <span className="filtericon" ><img className="filter" src={filter} alt="filter" /></span>
                    <div>
                        <div className="boxfilter">
                            <div className="dailyfilter">
                                <div className="daily">
                                    Select
                                </div>
                                <div className="dropdown-arrow1"></div>
                                <div className="dropdown-menu">
                                    <ul>
                                        <li>Daily</li>
                                        <li>Monthly</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="custom">
                                <input type="date"
                                    value="2018-07-22"
                                    min="2018-01-01" />
                            </div>
                            <div className="to">
                                <p>To</p>
                            </div>
                            <div className="custom1">
                                <input type="date"
                                    value="2018-07-22"
                                    min="2018-01-01" />
                            </div>
                        </div>
                    </div>

                </div>
                <br />
                <div className="dashboardDetails">
                    <div className="container container-10">
                        <div className="row da-cols">
                            <div className="col-lg col-sm-8 col-md-6 col-12 da-col da-col-graph-10 pb-2">
                                <p className="da-text" style={{ textAlign: "center" }}>Total parking book</p>
                                <div className="d-flex ">
                                    <div className="row mx-auto">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                            <img src={bike} alt="bike" className='car' />
                                            <BikePieChart />
                                        </div>


                                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                            <img src={car} alt="car" className='car' />
                                            <CarPieChart />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg col-md-6 da-col ">
                                <p className="da-text1">Total Revenue</p>
                                <Bargraph />
                            </div>
                            <div className="w-100"></div>
                            <div className="col-sm col-12 da-col pb-2">
                                <p className="da-text" style={{ textAlign: "center" }}>Total Sites</p>
                                <div className="row da-cols" >
                                    <div className="col eye" style={{ textAlign: "center" }}>
                                        <Link to="/TotalSite"><button ><img src={eye} alt="eye" />View</button></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm col-12 da-col pb-2">
                                <p className="da-text" style={{ textAlign: "center" }}>Customer review</p>
                                <div className='row da-cols'>
                                    <div className='col da-reviews da-reviews-10'>
                                        <p className='da-review-name'>John :</p>
                                        <br />
                                        <p className='da-review'>Best parking and good management</p>
                                    </div>
                                    <div className='w-100'></div>
                                    <div className='col da-more' style={{ textAlign: "center" }}>
                                        <Link to="/customerReview"><button >View more</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
