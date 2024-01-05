import React from "react";
import "./LabourCompanyRegistration.css";

const LC_registration = () => {
  return (
    <>
      <h1 class="header00011">
        <span class="header_text00011">Labour Company Registration</span>
      </h1>
      <div
        className="containerz11 main12"
        style={{ padding: "7vh 7vw", backgroundColor: "white" }}
      >
        <form
          className="row justify-content-around form-padding-12"
          style={{
            textAlign: "start",
            boxShadow: "rgb(174 168 168) 0px 3px 6px",
            borderRadius: "16px",
          }}
        >
          <div className="row justify-content-around">
            <div class="mb-3 col-lg-5 col-md-5 col-sm-12">
              <label for="exampleInputEmail1" class="form-label">
                Labour Company Name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Labour Company Name"
              />
            </div>
            <div class="mb-3 col-lg-5 col-md-5 col-sm-12">
              <label for="exampleInputPassword1" class="form-label">
                Postal Address
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Enter Postal Address"
              />
            </div>
            <div class="mb-3 col-lg-5 col-md-5 col-sm-12">
              <label for="exampleInputEmail1" class="form-label">
                GST No.
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter GST No."
              />
            </div>
            <div class="mb-3 col-lg-5 col-md-5 col-sm-12">
              <label for="exampleInputPassword1" class="form-label">
                Mall/Site<small>(optional)</small>
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3 col-lg-5 col-md-5 col-sm-12">
              <label for="exampleInputEmail1" class="form-label">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Email"
              />
            </div>
            <div class="mb-2 col-lg-5 col-md-5 col-sm-12">
              <label for="exampleInputEmail1" class="form-label">
                Person Name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Person Name"
              />
            </div>
            <div class="mb-2 col-lg-5 col-md-5 col-sm-12">
              <label for="exampleInputEmail1" class="form-label">
                Number
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Number"
              />
            </div>
            <div class="mb-2 col-lg-5 col-md-5 col-sm-12">
              <label for="exampleInputEmail1" class="form-label">
                {" "}
                Alt Number
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Alt number"
              />
            </div>
          </div>
          <button
            class="mt-4 px-5 py-2 mx-auto newbtn11"
            style={{
              fontSize: "large",
              boxShadow: "rgb(174 168 168) 0px 3px 6px",
              borderRadius: "5px",
              marginBottom: "15px",
              color: "white",
              background: "rgba(43, 235, 12, 0.7)",
              border: "none",
              width: "200px",
            }}
          >
            Register
          </button>
        </form>
      </div>
    </>

    // <div>
    //     <h1 class="header00011"><span class="header_text00011">Labour Company Registration</span></h1>
    //     <div class="container00011">
    //         <div class="row">
    //             <div class="col">
    //                 <label for="exampleInputEmail1" class="Label00011">Labour Company Name</label>
    //                 <input type="text" class="form-control input00011" aria-describedby="emailHelp" placeholder="Enter Labour Company Name" />

    //                 <label for="exampleInputEmail1" class="Label00011">GST No.</label>
    //                 <input type="text" class="form-control input00011" aria-describedby="emailHelp" placeholder="Enter GST number" />

    //                 <label for="exampleInputEmail1" class="Label00011">Email</label>
    //                 <input type="email" class="form-control input00011" aria-describedby="emailHelp" placeholder="Enter Email" />

    //                 <label for="exampleInputEmail1" class="Label00011">Contact number</label>
    //                 <input type="text" class="form-control input00011" aria-describedby="emailHelp" placeholder="Enter Contact Number" />

    //             </div>
    //             <div class="col">
    //                 <label for="exampleInputEmail1" class="Labelr00011">Postal Address</label>
    //                 <input type="text" class="form-control inputr00011" aria-describedby="emailHelp" placeholder="Enter Address" />

    //                 <label for="exampleInputEmail1" class="Labelr00011">Mall/Site<small>(optional)</small></label>
    //                 <input type="text" class="form-control inputr00011" aria-describedby="emailHelp" />

    //                 <label for="exampleInputEmail1" class="Labelr00011">Person Name</label>
    //                 <input type="text" class="form-control inputr00011" aria-describedby="emailHelp" placeholder="Enter Person Name" />

    //                 <label for="exampleInputEmail1" class="Labelr00011">Alt Number</label>
    //                 <input type="text" class="form-control inputr00011" aria-describedby="emailHelp" placeholder="Enter Alt number" />
    //             </div>
    //         </div>
    //         <button type="button" class="btn">Register</button>
    //     </div>
    // </div>
  );
};

export default LC_registration;
