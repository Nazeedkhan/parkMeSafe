import React from 'react'
import './AreaManegerProfile.css';
import deleteIcon from './deleteIcon.svg';
import $ from 'jquery'

function AreaManegerProfile() {
    const onClickEditBtn = () => {
        const inputs = document.getElementsByClassName("areaManeger-Profile-Details-12")
        for (let index = 0; index < inputs.length; index++) {
            inputs[index].classList.remove("disable-12");
        }
        document.getElementById("editBtn").classList.add('d-none')
        document.getElementById("submitEditBtn").classList.remove('d-none')
    }

    const onClickSumbitEditBtn = () => {
        const inputs = document.getElementsByClassName("areaManeger-Profile-Details-12")
        for (let index = 0; index < inputs.length; index++) {
            inputs[index].classList.add("disable-12");
        }
        document.getElementById("editBtn").classList.remove('d-none')
        document.getElementById("submitEditBtn").classList.add('d-none')
    }

    const onClickDeleteButton = () => {
        const cols = document.getElementsByClassName("delete-toggle-12")
        for (let index = 0; index < cols.length; index++) {
            cols[index].classList.remove("d-none")
        }
        document.getElementById("add-site-btn").classList.add("d-none")
        document.getElementById("delete-site-btn").classList.add("d-none")
        document.getElementById("delete-done-btn").classList.remove("d-none")
    }

    const onClickDoneButton = () => {
        const cols = document.getElementsByClassName("delete-toggle-12")
        for (let index = 0; index < cols.length; index++) {
            cols[index].classList.add("d-none")
        }
        document.getElementById("add-site-btn").classList.remove("d-none")
        document.getElementById("delete-site-btn").classList.remove("d-none")
        document.getElementById("delete-done-btn").classList.add("d-none")
    }

    const muteOnClick = () => {
        document.getElementById("muteBtn12").classList.add("d-none")
        document.getElementById("resumeBtn12").classList.remove("d-none")
    }
    const resumeOnClick = () => {
        document.getElementById("muteBtn12").classList.remove("d-none")
        document.getElementById("resumeBtn12").classList.add("d-none")
    }

    const myFunction = () => {
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        ul = document.getElementById("myUL");
        li = ul.getElementsByTagName("li");
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }

    $(document).ready(function () {
        $('.mdb-select').materialSelect();
    });

    return (
        <div className='container main12' style={{ padding: "7vh 7vw", backgroundColor: "white" }}>
            <div className='mb-5' style={{ textAlign: "center", width: "100%", paddingBottom: "14px" }}>
                <span className='pb-3' style={{ fontSize: "xx-large", color: "#59599d", padding: "0px 50px 20px 50px", borderBottom: "1px solid #59599d" }}>Profile</span>
            </div>
            <div className='row'>
                <div class="d-flex justify-content-center align-items-center mb-4 col-lg-6 col-md-6 col-sm-12">
                    <span style={{ fontSize: "24px", borderBottom: "1px solid black", fontWeight: "700" }}>Area Manager Information</span>
                </div>
                <div class="d-flex justify-content-end align-items-center mb-4 col-lg-6 col-md-6 col-sm-12">
                    <button type="submit" id='muteBtn12' class="py-1 btn profile-page-btn-12" onClick={muteOnClick} style={{ boxShadow: "rgb(174 168 168) 0px 3px 6px", borderRadius: "5px" }}>Mute</button>
                    <button type="submit" id='resumeBtn12' class="py-1 btn profile-page-btn-12 d-none" onClick={resumeOnClick} style={{ boxShadow: "rgb(174 168 168) 0px 3px 6px", borderRadius: "5px" }}>Resume</button>
                </div>
            </div>
            <form className='row justify-content-around form-padding-12' style={{ textAlign: 'start', boxShadow: "rgb(174 168 168) 0px 3px 6px", borderRadius: "16px" }}>
                <div className='row justify-content-around'>
                    <div class="mb-3 col-lg-5 col-md-5 col-sm-12">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text" class="form-control areaManeger-Profile-Details-12 disable-12" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Name' />
                    </div>
                    <div class="mb-3 col-lg-5 col-md-5 col-sm-12">
                        <label for="exampleInputPassword1" class="form-label">Mobile No.</label>
                        <input type="text" class="form-control areaManeger-Profile-Details-12 disable-12" id="exampleInputPassword1" placeholder='Enter Mobile Number' />
                    </div>
                    <div class="mb-3 col-lg-5 col-md-5 col-sm-12">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input type="email" class="form-control areaManeger-Profile-Details-12 disable-12" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Email' />
                    </div>
                    <div class="mb-3 col-lg-5 col-md-5 col-sm-12">
                        <label for="exampleInputPassword1" class="form-label">Address</label>
                        <input type="text" class="form-control areaManeger-Profile-Details-12 disable-12" id="exampleInputPassword1" placeholder='Enter Address' />
                    </div>
                    <div class="mb-3 col-lg-5 col-md-5 col-sm-12">
                        <label for="exampleInputEmail1" class="form-label">Alternative Mobile No.</label>
                        <input type="text" class="form-control areaManeger-Profile-Details-12 disable-12" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Mobile Number' />
                    </div>
                    <div class="mb-2 col-lg-5 col-md-5 col-sm-12">
                        {/* <label for="exampleInputEmail1" class="form-label">Sites Allot<span>(Optional)</span></label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /> */}
                    </div>
                </div>
                <button type="button" id='editBtn' class="mt-4 px-5 area-maneger-edit-btn py-2 btn mx-auto" onClick={onClickEditBtn} style={{ fontSize: "large", fontWeight: "bold", boxShadow: "rgb(174 168 168) 0px 3px 6px", borderRadius: "5px", width: "160px" }}>Edit</button>
                <button type="button" id='submitEditBtn' class="mt-4 px-5 area-maneger-edit-btn py-2 btn mx-auto d-none" onClick={onClickSumbitEditBtn} style={{ fontSize: "large", fontWeight: "bold", boxShadow: "rgb(174 168 168) 0px 3px 6px", borderRadius: "5px", width: "160px" }}>Submit</button>
            </form>
            <div className='row' style={{ marginTop: "64px" }}>
                <div class="d-flex justify-content-center align-items-center mt-3 mb-3 col-lg-6 col-md-6 col-sm-12">
                    <span style={{ fontSize: "24px", borderBottom: "1px solid black", fontWeight: "700" }}>Site Details</span>
                </div>
                <div class="d-flex justify-content-end align-items-center mt-3 mb-3 col-lg-6 col-md-6 col-sm-12">
                    <button type="submit" id='add-site-btn' class="py-1 btn profile-page-btn-12 mr-4" data-toggle="modal" data-target="#exampleModalCenter" style={{ boxShadow: "rgb(174 168 168) 0px 3px 6px", borderRadius: "5px" }}>
                        Add Site
                        <i class="fa-solid fa-circle-plus ml-4"></i>
                    </button>
                    <button type="submit" id='delete-site-btn' class="py-1 mr-2 btn profile-page-btn-12" onClick={onClickDeleteButton} style={{ boxShadow: "rgb(174 168 168) 0px 3px 6px", borderRadius: "5px" }}>
                        Delete Site
                        <img className='ml-3' src={deleteIcon} alt="" />
                        {/* <i class="fa-solid fa-trash ml-3"></i> */}
                    </button>
                    <button type="submit" id='delete-done-btn' class="py-1 mr-2 btn profile-page-btn-12 d-none" onClick={onClickDoneButton} style={{ boxShadow: "rgb(174 168 168) 0px 3px 6px", borderRadius: "5px" }}>
                        Done
                        <i class="fa-solid fa-check ml-3"></i>
                    </button>
                </div>
            </div>
            <div className='overflow-auto fixTableHead mt-3'>
                <table className='w-full'>
                    <thead style={{ height: "70px" }}>
                        <tr>
                            <th className='w-20 p-3 color-change font-semibold traking-wide-12 text-center'>Sr.No</th>
                            <th className='w-40 p-3 color-change font-semibold traking-wide-12 text-center'> Site Name</th>
                            <th className='w-30 p-3 color-change font-semibold traking-wide-12 text-center'>Date</th>
                            <th className='w-60 p-3 color-change font-semibold traking-wide-12 text-center'>User Reviews</th>
                            <th className='w-16 p-3 color-change font-semibold traking-wide-12 text-center delete-toggle-12 d-none'>Delete</th>
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-100'>
                        <tr style={{ height: "40px" }}>
                            <td className='traking-wide-12 text-center px-4'>1</td>
                            <td className='traking-wide-12 text-center px-4'>Central Mall</td>
                            <td className='traking-wide-12 text-center px-4'>25/05/22</td>
                            <td className='traking-wide-12 text-center px-4'>Nice Atmosphere. Guards are...</td>
                            <td className='traking-wide-12 text-center px-4 delete-toggle-12 d-none'>
                                <img className='ml-3' src={deleteIcon} alt="" />
                            </td>
                        </tr>
                        <tr style={{ height: "40px", backgroundColor: 'rgba(226, 252, 222, 0.41)' }}>
                            <td className='even-row-color traking-wide-12 text-center'>1</td>
                            <td className='even-row-color traking-wide-12 text-center'>Central Mall</td>
                            <td className='even-row-color traking-wide-12 text-center'>25/05/22</td>
                            <td className='even-row-color traking-wide-12 text-center'>Nice Atmosphere. Guards are...</td>
                            <td className='even-row-color traking-wide-12 text-center delete-toggle-12 d-none'>
                                <img className='ml-3' src={deleteIcon} alt="" />
                            </td>
                        </tr>
                        <tr style={{ height: "40px" }}>
                            <td className='traking-wide-12 text-center'>1</td>
                            <td className='traking-wide-12 text-center'>Central Mall</td>
                            <td className='traking-wide-12 text-center'>25/05/22</td>
                            <td className='traking-wide-12 text-center'>Nice Atmosphere. Guards are...</td>
                            <td className='traking-wide-12 text-center delete-toggle-12 d-none'>
                                <img className='ml-3' src={deleteIcon} alt="" />
                            </td>
                        </tr>
                        <tr style={{ height: "40px", backgroundColor: 'rgba(226, 252, 222, 0.41)' }}>
                            <td className='even-row-color traking-wide-12 text-center'>1</td>
                            <td className='even-row-color traking-wide-12 text-center'>Central Mall</td>
                            <td className='even-row-color traking-wide-12 text-center'>25/05/22</td>
                            <td className='even-row-color traking-wide-12 text-center'>Nice Atmosphere. Guards are...</td>
                            <td className='traking-wide-12 text-center delete-toggle-12 d-none'>
                                <img className='ml-3' src={deleteIcon} alt="" />
                            </td>
                        </tr>
                        <tr style={{ height: "40px" }}>
                            <td className='traking-wide-12 text-center'>1</td>
                            <td className='traking-wide-12 text-center'>Central Mall</td>
                            <td className='traking-wide-12 text-center'>25/05/22</td>
                            <td className='traking-wide-12 text-center'>Nice Atmosphere. Guards are...</td>
                            <td className='traking-wide-12 text-center delete-toggle-12 d-none'>
                                <img className='ml-3' src={deleteIcon} alt="" />
                            </td>
                        </tr>
                        <tr style={{ height: "40px", backgroundColor: 'rgba(226, 252, 222, 0.41)' }}>
                            <td className='even-row-color traking-wide-12 text-center'>1</td>
                            <td className='even-row-color traking-wide-12 text-center'>Central Mall</td>
                            <td className='even-row-color traking-wide-12 text-center'>25/05/22</td>
                            <td className='even-row-color traking-wide-12 text-center'>Nice Atmosphere. Guards are...</td>
                            <td className='traking-wide-12 text-center delete-toggle-12 d-none'>
                                <img className='ml-3' src={deleteIcon} alt="" />
                            </td>
                        </tr>
                        <tr style={{ height: "40px" }}>
                            <td className='traking-wide-12 text-center'>1</td>
                            <td className='traking-wide-12 text-center'>Central Mall</td>
                            <td className='traking-wide-12 text-center'>25/05/22</td>
                            <td className='traking-wide-12 text-center'>Nice Atmosphere. Guards are...</td>
                            <td className='traking-wide-12 text-center delete-toggle-12 d-none'>
                                <img className='ml-3' src={deleteIcon} alt="" />
                            </td>
                        </tr>
                        <tr style={{ height: "40px", backgroundColor: 'rgba(226, 252, 222, 0.41)' }}>
                            <td className='even-row-color traking-wide-12 text-center'>1</td>
                            <td className='even-row-color traking-wide-12 text-center'>Central Mall</td>
                            <td className='even-row-color traking-wide-12 text-center'>25/05/22</td>
                            <td className='even-row-color traking-wide-12 text-center'>Nice Atmosphere. Guards are...</td>
                            <td className='traking-wide-12 text-center delete-toggle-12 d-none'>
                                <img className='ml-3' src={deleteIcon} alt="" />
                            </td>
                        </tr>
                        <tr style={{ height: "40px" }}>
                            <td className='traking-wide-12 text-center'>1</td>
                            <td className='traking-wide-12 text-center'>Central Mall</td>
                            <td className='traking-wide-12 text-center'>25/05/22</td>
                            <td className='traking-wide-12 text-center'>Nice Atmosphere. Guards are...</td>
                            <td className='traking-wide-12 text-center delete-toggle-12 d-none'>
                                <img className='ml-3' src={deleteIcon} alt="" />
                            </td>
                        </tr>
                        <tr style={{ height: "40px", backgroundColor: 'rgba(226, 252, 222, 0.41)' }}>
                            <td className='even-row-color traking-wide-12 text-center'>1</td>
                            <td className='even-row-color traking-wide-12 text-center'>Central Mall</td>
                            <td className='even-row-color traking-wide-12 text-center'>25/05/22</td>
                            <td className='even-row-color traking-wide-12 text-center'>Nice Atmosphere. Guards are...</td>
                            <td className='traking-wide-12 text-center delete-toggle-12 d-none'>
                                <img className='ml-3' src={deleteIcon} alt="" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content" style={{ height: "600px" }}>
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalCenterTitle">Add Site</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <input type="text" id="myInput" onKeyUp={myFunction} placeholder="Search for names.." title="Type in a name" />

                            <ul id="myUL">
                                <li><a href="#">Adele</a></li>
                                <li><a href="#">Agnes</a></li>

                                <li><a href="#">Billy</a></li>
                                <li><a href="#">Bob</a></li>

                                <li><a href="#">Calvin</a></li>
                                <li><a href="#">Christina</a></li>
                                <li><a href="#">Cindy</a></li>
                            </ul>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn area-maneger-edit-btn">Add Site</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AreaManegerProfile