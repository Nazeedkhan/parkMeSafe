import React from 'react'
import eye from './eye.svg';
import './AreaManegerList.css'
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';


function AreaManegerList() {
    return (
        <div className='container main12' style={{ padding: "7vh 7vw", backgroundColor: "white" }}>
            <div className='mb-5' style={{ textAlign: "center", width: "100%", paddingBottom: "14px" }}>
                <span className='pb-3' style={{ fontSize: "xx-large", color: "#59599d", paddingBttom: " 20px", paddingBottom: "20px", borderBottom: "1px solid #59599d" }}>Area Manager List</span>
            </div>
            <div className='d-flex justify-content-end align-items-center mr-3' >
                <span className='mr-4' >Search Site:</span>
                <input class="form-control col-lg-3 col-md-4 col-sm-12 me-2" type="search" placeholder="Search" aria-label="Search" />
            </div>

            <div className='overflow-auto fixTableHead mt-5'>
                <table className='w-full'>
                    <thead style={{ height: "70px" }}>
                        <tr>
                            <th className='w-20 p-3 color-change font-semibold traking-wide text-center'>Sr.No</th>
                            <th className='w-24 p-3 color-change font-semibold traking-wide text-center'>Name</th>
                            <th className='w-24 p-3 color-change font-semibold traking-wide text-center'>Total Sites</th>
                            <th className='p-3 color-change font-semibold traking-wide text-center'>Date:Review</th>
                            <th className='w-24 p-3 color-change font-semibold traking-wide text-center'>View Profile</th>
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-100'>
                        <tr style={{ height: "40px" }}>
                            <td className='traking-wide text-center'>1</td>
                            <td className='traking-wide text-center'>Dibyendu</td>
                            <td className='traking-wide text-center'>
                                <div style={{ margin: "7px auto" }}>
                                    20
                                    <br />
                                    <img className="eye-btn-12" src={eye} alt="eye" />
                                </div>

                            </td>
                            <td className='traking-wide text-center'>25/05/22: Nice Atmosphere. Guards are...</td>
                            <td className='traking-wide text-center'>
                                <Link to='/areaManegerProfile' type="button" class="btn btn-success view-btn-12" ><span className='small'>View</span></Link>
                            </td>
                        </tr>
                        <tr style={{ height: "40px", backgroundColor: 'rgba(226, 252, 222, 0.41)' }}>
                            <td className='traking-wide text-center'>1</td>
                            <td className='traking-wide text-center'>Dibyendu</td>
                            <td className='traking-wide text-center'>
                                <div style={{ margin: "7px auto" }}>
                                    20
                                    <br />
                                    <img className="eye-btn-12" src={eye} alt="eye" />
                                </div>
                            </td>
                            <td className='traking-wide text-center'>25/05/22: Nice Atmosphere. Guards are...</td>
                            <td className='traking-wide text-center'>
                                <button type="button" class="btn btn-success view-btn-12" ><span className='small'>View</span></button>
                            </td>
                        </tr>
                        <tr style={{ height: "40px" }}>
                            <td className='traking-wide text-center'>1</td>
                            <td className='traking-wide text-center'>Dibyendu</td>
                            <td className='traking-wide text-center'>
                                <div style={{ margin: "7px auto" }}>
                                    20
                                    <br />
                                    <img className="eye-btn-12" src={eye} alt="eye" />
                                </div>
                            </td>
                            <td className='traking-wide text-center'>25/05/22: Nice Atmosphere. Guards are...</td>
                            <td className='traking-wide text-center'>
                                <button type="button" class="btn btn-success view-btn-12" ><span className='small'>View</span></button>
                            </td>
                        </tr>
                        <tr style={{ height: "40px", backgroundColor: 'rgba(226, 252, 222, 0.41)' }}>
                            <td className='traking-wide text-center'>1</td>
                            <td className='traking-wide text-center'>Dibyendu</td>
                            <td className='traking-wide text-center'>
                                <div style={{ margin: "7px auto" }}>
                                    20
                                    <br />
                                    <img className="eye-btn-12" src={eye} alt="eye" />
                                </div>
                            </td>
                            <td className='traking-wide text-center'>25/05/22: Nice Atmosphere. Guards are...</td>
                            <td className='traking-wide text-center'>
                                <button type="button" class="btn btn-success view-btn-12" ><span className='small'>View</span></button>
                            </td>
                        </tr>
                        <tr style={{ height: "40px" }}>
                            <td className='traking-wide text-center'>1</td>
                            <td className='traking-wide text-center'>Dibyendu</td>
                            <td className='traking-wide text-center'>
                                <div style={{ margin: "7px auto" }}>
                                    20
                                    <br />
                                    <img className="eye-btn-12" src={eye} alt="eye" />
                                </div>
                            </td>
                            <td className='traking-wide text-center'>25/05/22: Nice Atmosphere. Guards are...</td>
                            <td className='traking-wide text-center'>
                                <button type="button" class="btn btn-success view-btn-12" ><span className='small'>View</span></button>
                            </td>
                        </tr>
                        <tr style={{ height: "40px", backgroundColor: 'rgba(226, 252, 222, 0.41)' }}>
                            <td className='traking-wide text-center'>1</td>
                            <td className='traking-wide text-center'>Dibyendu</td>
                            <td className='traking-wide text-center'>
                                <div style={{ margin: "7px auto" }}>
                                    20
                                    <br />
                                    <img className="eye-btn-12" src={eye} alt="eye" />
                                </div>
                            </td>
                            <td className='traking-wide text-center'>25/05/22: Nice Atmosphere. Guards are...</td>
                            <td className='traking-wide text-center'>
                                <button type="button" class="btn btn-success view-btn-12" ><span className='small'>View</span></button>
                            </td>
                        </tr>
                        <tr style={{ height: "40px" }}>
                            <td className='traking-wide text-center'>1</td>
                            <td className='traking-wide text-center'>Dibyendu Pal</td>
                            <td className='traking-wide text-center'>
                                <div style={{ margin: "7px auto" }}>
                                    20
                                    <br />
                                    <img className="eye-btn-12" src={eye} alt="eye" />
                                </div>
                            </td>
                            <td className='traking-wide text-center'>25/05/22: Nice Atmosphere. Guards are...</td>
                            <td className='traking-wide text-center'>
                                <button type="button" class="btn btn-success view-btn-12" ><span className='small'>View</span></button>
                            </td>
                        </tr>
                        <tr style={{ height: "40px", backgroundColor: 'rgba(226, 252, 222, 0.41)' }}>
                            <td className='traking-wide text-center'>1</td>
                            <td className='traking-wide text-center'>Dibyendu</td>
                            <td className='traking-wide text-center'>
                                <div style={{ margin: "7px auto" }}>
                                    20
                                    <br />
                                    <img className="eye-btn-12" src={eye} alt="eye" />
                                </div>
                            </td>
                            <td className='traking-wide text-center'>25/05/22: Nice Atmosphere. Guards are...</td>
                            <td className='traking-wide text-center'>
                                <button type="button" class="btn btn-success view-btn-12" ><span className='small'>View</span></button>
                            </td>
                        </tr>
                        <tr style={{ height: "40px" }}>
                            <td className='traking-wide text-center'>1</td>
                            <td className='traking-wide text-center'>Dibyendu</td>
                            <td className='traking-wide text-center'>
                                <div style={{ margin: "7px auto" }}>
                                    20
                                    <br />
                                    <img src={eye} alt="eye" />
                                </div>
                            </td>
                            <td className='traking-wide text-center'>25/05/22: Nice Atmosphere. Guards are </td>
                            <td className='traking-wide text-center'>
                                <button type="button" class="btn btn-success view-btn-12" ><span className='small'>View</span></button>
                            </td>
                        </tr>
                        <tr style={{ height: "40px", backgroundColor: 'rgba(226, 252, 222, 0.41)' }}>
                            <td className='traking-wide text-center'>1</td>
                            <td className='traking-wide text-center'>Dibyendu</td>
                            <td className='traking-wide text-center'>
                                <div style={{ margin: "7px auto" }}>
                                    20
                                    <br />
                                    <img src={eye} alt="eye" />
                                </div>
                            </td>
                            <td className='traking-wide text-center'>25/05/22: Nice Atmosphere. Guards are </td>
                            <td className='traking-wide text-center'>
                                <button type="button" class="btn btn-success view-btn-12" ><span className='small'>View</span></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AreaManegerList