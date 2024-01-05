import React from 'react'
import pms from '../Icons/pms.svg'
import dbimg from '../Icons/dashboard.svg'
import tp from '../Icons/totalParking.svg'
import revenue from '../Icons/revenue.svg'
import site from '../Icons/site.svg'
import review from '../Icons/review.svg'
import area from '../Icons/area.svg'
import adv from '../Icons/adv.svg'
import labour from '../Icons/labour.svg'
import mall from '../Icons/mall.svg'
import siteReg from '../Icons/siteReg.svg'
import user from '../Icons/user.svg'
import logout from '../Icons/logout.svg'
import vector from '../Icons/vector.svg'
import logout1 from '../Images/logout1.png'

function Mbvt() {
    return (
        <div>
            <input type="checkbox" id="check"/>
                <label for="check">
                    <i class="fas fa-bars" id="btn"></i>
                    <i class="fas fa-times" id="cancel"></i>
                </label>
                <div class="sidebar55">
                    <div style={{
                        display: "grid", gridTemplateRows: "1fr 4fr 1fr", height: "100%", border: "1px solid skyblue",
                        position: 'absolute', backgroundColor: 'white', top: "5%", left: "1%", height: "91%"
                    }}>
                        <div className='d-flex justify-content-center align-items-center'>
                            <header className='d-flex justify-content-center align-items-center' style={{
                                fontFamily: 'Gabriola',
                                fontstyle: "normal", fontWeight: "400", fontSize: "40px", paddingBottom: "10px",
                                borderBottom: "1px solid rgba(9, 132, 246, 1)", marginTop: "20px"
                            }}>
                                <img className="pms" src={pms} alt="logo" style={{ width: "20%", marginRight: "10px" }} /><span
                                    style={{ color: "rgba(1, 176, 241, 1)" }}>Park Me <span style={{
                                        "color": "#01B050"
                                    }}>Safe</span></span>
                            </header>
                        </div>
                        <div className='mx-auto sidebar-items-12' style={{ lineHeight: "47px" }}>
                            <a className='d-block' href="/"><img className="links" src={dbimg} alt="dashboard" />Dashboard</a>
                            <a className='d-block' href="#parking"><img className="links" src={tp} alt="parking" />Total parking</a>
                            <a className='d-block' href="#revenue"><img className="links" src={revenue} alt="revenue" />Total
                                Revenue</a>
                            <a className='d-block' href="#site"><img className="links" src={site} alt="site" />Total sites</a>
                            <a className='d-block' href="/customerReview"><img className="links" src={review}
                                alt="review" />Customer review</a>
                            <a className='d-block' href="#siteReg"><img className="links" src={siteReg}
                                alt="Site registration" />Site registration</a>
                            {/* <a className='d-block' href="#labour"><img className="links" src={labour} alt="Labour company" />
                    Labour company <img className="arrow" src={vector} alt="vector" /></a>
                <a className='d-block' href="#area"><img className="links" src={area} alt="Area manager" /> Area manager
                    <img className="arrow" src={vector} alt="vector" /></a> */}

                            {/* <div className="dropdown">
                    <span><img className="links" src={labour} alt="Labour company" /> Labour company <img
                            className="arrow" src={vector} alt="vector" /></span>
                    <div className="dropdown-content">
                        <a href="#dashboard">List</a>
                        <a href="#dashboard">Labour company Registration</a>
                        <a href="#dashboard">Guard List</a>
                        <a href="#dashboard">Payment Closing History</a>
                    </div>
                </div> */}
                            <div class="btn-group dropright d-block">
                                <span data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{
                                    cursor: 'pointer'
                                }}><img className="links" src={labour} alt="Labour company" style={{
                                    marginRight: "10px"
                                }} />Labour company<img className="arrow dropdown-toggle" src={vector} alt="vector" style={{
                                    marginLeft: "8px"
                                }} /></span>
                                <div class="dropdown-menu">
                                    {/*
                        <!-- Dropdown menu links --> */}
                                    <a class="dropdown-item" href="#">List</a>
                                    <a class="dropdown-item" href="#">Labour company Registration</a>
                                    <a class="dropdown-item" href="#">Guard List</a>
                                    <a class="dropdown-item" href="#">Payment Closing History</a>
                                </div>
                            </div>


                            {/* <div className="dropdown">
                    <span><img className="links" src={area} alt="Area manager" /> Area manager <img className="arrow"
                            src={vector} alt="vector" /></span>
                    <div className="dropdown-content">
                        <a className='d-block' href="/areaManegerList">List</a>
                        <a className='d-block' href="/areaManegerRegistration"> Area Manager Registration</a>
                    </div>
                </div> */}

                            <div class="btn-group dropright d-block">
                                <span data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{
                                    cursor: 'pointer'
                                }}><img className="links" src={area} alt="Labour company" style={{ marginRight: "10px" }} />Area
                                    manager<img className="arrow dropdown-toggle" src={vector} alt="vector" style={{
                                        marginLeft: "8px"
                                    }} /></span>
                                <div class="dropdown-menu">
                                    {/*
                        <!-- Dropdown menu links --> */}
                                    <a class="dropdown-item" href="#">List</a>
                                    <a class="dropdown-item" href="#">Area Manager Registration</a>
                                </div>
                            </div>

                            <div class="btn-group dropright d-block">
                                <span data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{
                                    cursor: 'pointer'
                                }}><img className="links" src={mall} alt="Labour company" style={{ marginRight: "10px" }} />Mall
                                    Owner<img className="arrow dropdown-toggle" src={vector} alt="vector" style={{
                                        marginLeft: "8px"
                                    }} /></span>
                                <div class="dropdown-menu">
                                    {/*
                        <!-- Dropdown menu links --> */}
                                    <a class="dropdown-item" href="#">List</a>
                                    <a class="dropdown-item" href="#">Mall owner registration</a>
                                </div>
                            </div>

                            <a className='d-block' href="#user"><img className="links" src={user} alt="User management" />User
                                management</a>
                            <a className='d-block' href="#adv"><img className="links" src={adv} alt="Advertise" />Advertise</a>
                        </div>
                        <div className="logout d-flex justify-content-center align-items-end">
                            <img src={logout1} alt="curve" style={{ width: '100%', height: '91px' }} />
                            <a className='d-flex align-items-center' href="#logout" style={{
                                position: 'absolute', bottom: "4%"
                            }}><img className="links1" src={logout} alt="logout" /> Log out</a>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Mbvt