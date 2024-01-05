import React from 'react'
import './AreaManegerRegistration.css'

function AreaManegerRegistration() {
    return (
        <div className='container main12' style={{ padding: "7vh 7vw", backgroundColor: "white" }}>
            <div id='registration-heading-div-12' className='mb-5' style={{ textAlign: "center", width: "100%", paddingBottom: "14px" }}>
                <span id='registration-heading-12' className='pb-3' style={{ fontSize: "xx-large", color: "#59599d", paddingBttom: " 20px", paddingBottom: "20px" }}>Area Manager Registration</span>
            </div>
            <form className='row justify-content-around form-padding-12' style={{ textAlign: 'start', boxShadow: "rgb(174 168 168) 0px 3px 6px", borderRadius: "16px" }}>
                <div className='row justify-content-around'>
                    <div class="mb-3 col-lg-5 col-md-5 col-sm-12">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Name' />
                    </div>
                    <div class="mb-3 col-lg-5 col-md-5 col-sm-12">
                        <label for="exampleInputPassword1" class="form-label">Mobile No.</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" placeholder='Enter Mobile Number' />
                    </div>
                    <div class="mb-3 col-lg-5 col-md-5 col-sm-12">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Email' />
                    </div>
                    <div class="mb-3 col-lg-5 col-md-5 col-sm-12">
                        <label for="exampleInputPassword1" class="form-label">Address</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" placeholder='Enter Address' />
                    </div>
                    <div class="mb-3 col-lg-5 col-md-5 col-sm-12">
                        <label for="exampleInputEmail1" class="form-label">Alternative Mobile No.</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Mobile Number' />
                    </div>
                    <div class="mb-2 col-lg-5 col-md-5 col-sm-12">
                        <label for="exampleInputEmail1" class="form-label">Sites Allot<span>(Optional)</span></label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                </div>
                <button type="submit" class="mt-4 mb-3 px-5 py-2 btn mx-auto register-btn-12" style={{ color: "white", fontSize: "large", fontWeight: "bold", boxShadow: "rgb(174 168 168) 0px 3px 6px", borderRadius: "5px",width: "170px" }}>Register</button>
            </form>
        </div >

    )
}

export default AreaManegerRegistration
