import React from 'react'
import avatar from './avatar.svg'
import './Navbar.css'

function Navbar() {
    const hamburgerOnClick = () => {
        document.getElementById("mobile-view-sidebar-12").classList.remove("d-none")
    }
    return (
        <div className='d-flex align-items-center' style={{ width: "100%" }}>
            <div className='d-flex col-lg-2 col-md-2 col-sm-2 col-2 justify-content-start' style={{ padding: 0 }}>
                <span className="time-10 time-in-navbar-12" style={{ fontSize: "25px", paddingLeft: "5px" }}>11:30</span>
                <button id='toggle-btn-in-navbar-12' className="navbar-toggler" type="button" style={{marginBottom: 0}} data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation" onClick={hamburgerOnClick}>
                    <i class="fa-solid fa-bars"></i>
                </button>
                {/* <i class="fa-solid fa-bars toggle-btn-in-navbar-12"></i> */}
            </div>

            <div className='d-flex col-lg-8 col-md-8 col-sm-8 col-8 justify-content-center' style={{ padding: 0 }}>
                <form className="d-flex justify-content-center" style={{ width: "100%" }}>
                    <input className="search-bar-in-navbar-12 form-control" type="search" placeholder="Search..." style={{ borderRadius: "10px", backgroundColor: 'white' }} />
                </form>
            </div>
            <div className='d-flex col-lg-2 col-md-2 col-sm-2 col-2 justify-content-end' style={{ padding: 0 }}>
                <a className="" href="#"><img src={avatar} alt="avatar" style={{ width: "55px", padding: "0.5rem 5px" }} /></a>
            </div>
        </div>
    )
}

export default Navbar