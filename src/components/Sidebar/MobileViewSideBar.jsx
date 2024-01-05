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

import $ from 'jquery'
import { Link } from 'react-router-dom'

function MobileViewSideBar() {
  return (
    <div id='mobile-view-sidebar-12' className='d-none'>
      <div style={{ display: "grid", gridTemplateRows: "1fr 4fr 1fr", height: "100%", border: "1px solid skyblue", position: 'absolute', backgroundColor: 'white', top: "5%", left: "1%", height: "89vh", borderRadius: "10px" }}>
        <div className='d-flex justify-content-center align-items-center'>
          <header className='d-flex justify-content-center align-items-center' style={{ fontFamily: 'Gabriola', fontstyle: "normal", fontWeight: "400", fontSize: "40px", paddingBottom: "10px", borderBottom: "1px solid rgba(9, 132, 246, 1)", marginTop: "20px" }}>
            <img className="pms" src={pms} alt="logo" style={{ width: "20%", marginRight: "10px" }} /><span style={{ color: "rgba(1, 176, 241, 1)" }}>Park Me <span style={{ "color": "#01B050" }}>Safe</span></span>
          </header>
        </div>
        <div className='mx-auto sidebar-items-12' style={{ lineHeight: "41px", fontSize: "small" }}>
          <Link className='d-block' to="/" style={{color: 'black'}}><img className="links" src={dbimg} alt="dashboard" style={{ width: "11%", marginRight: "10px" }} />Dashboard</Link>
          <Link className='d-block' to="/TotalParking" style={{color: 'black'}}><img className="links" src={tp} alt="parking" style={{ width: "11%", marginRight: "10px" }} />Total parking</Link>
          <Link className='d-block' to="/TotalRevenue" style={{color: 'black'}}><img className="links" src={revenue} alt="revenue" style={{ width: "11%", marginRight: "10px" }} />Total Revenue</Link>
          <Link className='d-block' to="/TotalSite" style={{color: 'black'}}><img className="links" src={site} alt="site" style={{ width: "11%", marginRight: "10px" }} />Total sites</Link>
          <Link className='d-block' to="/customerReview" style={{color: 'black'}}><img className="links" src={review} alt="review" style={{ width: "11%", marginRight: "10px" }} />Customer review</Link>
          <Link className='d-block' to="/SiteRegisteration" style={{color: 'black'}}><img className="links" src={siteReg} alt="Site registration" style={{ width: "11%", marginRight: "10px" }} />Site registration</Link>

          <div class="btn-group dropright d-block">
            <span className='dropdown-items-in-sidebar-12' data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ cursor: 'pointer' }}><img className="links" src={labour} alt="Labour company" style={{ marginRight: "8px", width: "14%" }} />Labour company<img className="arrow dropdown-toggle" src={vector} alt="vector" style={{ marginLeft: "8px" }} /></span>
            <div class="dropdown-menu" style={{ backgroundColor: 'white' }}>
              {/* <!-- Dropdown menu links --> */}
              <Link class="dropdown-item" to="/LabourCompanyList">List</Link>
              <Link class="dropdown-item" to="/LabourCompanyRegistration">Labour company Registration</Link>
              <Link class="dropdown-item" to="/LabourCompanyGuardList">Guard List</Link>
              <Link class="dropdown-item" to="/PaymentClosingHistory">Payment Closing History</Link>
            </div>
          </div>

          <div class="btn-group dropright d-block">
            <span className='dropdown-items-in-sidebar-12' data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ cursor: 'pointer' }}><img className="links" src={area} alt="Labour company" style={{ marginRight: "8px", width: "14%" }} />Area manager<img className="arrow dropdown-toggle" src={vector} alt="vector" style={{ marginLeft: "8px" }} /></span>
            <div class="dropdown-menu" style={{ backgroundColor: 'white' }}>
              {/* <!-- Dropdown menu links --> */}
              <Link class="dropdown-item" to="/areaManegerList">List</Link>
              <Link class="dropdown-item" to="/areaManegerRegistration">Area Manager Registration</Link>
            </div>
          </div>

          <div class="btn-group dropright d-block">
            <span className='dropdown-items-in-sidebar-12' data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ cursor: 'pointer' }}><img className="links" src={mall} alt="Labour company" style={{ marginRight: "8px", width: "14%" }} />Mall Owner<img className="arrow dropdown-toggle" src={vector} alt="vector" style={{ marginLeft: "8px" }} /></span>
            <div class="dropdown-menu" style={{ backgroundColor: 'white' }}>
              {/* <!-- Dropdown menu links --> */}
              <Link class="dropdown-item" to="/MallOwnerLists">List</Link>
              <Link class="dropdown-item" to="/MallOwnerRegistration">Mall owner registration</Link>
            </div>
          </div>

          <Link className='d-block' to="/UserManagement" style={{color: 'black'}}><img className="links" src={user} alt="User management" style={{ width: "11%", marginRight: "10px" }} />User management</Link>
          <Link className='d-block' to="/Advertise" style={{color: 'black'}}><img className="links" src={adv} alt="Advertise" style={{ width: "11%", marginRight: "10px" }} />Advertise</Link>
        </div>
        <div className="logout d-flex justify-content-center align-items-end">
          <img src={logout1} alt="curve" style={{ width: '100%', height: '91px', borderRadius: "0 0 10px 10px" }} />
          <a className='d-flex align-items-center' href="#logout" style={{ position: 'absolute', bottom: "4%", color: 'black' }}><img className="links1" src={logout} alt="logout" style={{marginRight: "10px"}} />Log out</a>
        </div>
      </div >
    </div>
  )
}

export default MobileViewSideBar