import React from "react";
import "./UserProfile.css"
import $ from "jquery"

function UserProfile(){

    const muteOnClick = () => {
        document.getElementById("muteBtn11").classList.add("d-none");
        document.getElementById("resumeBtn11").classList.remove("d-none");
      };
      const resumeOnClick = () => {
        document.getElementById("muteBtn11").classList.remove("d-none");
        document.getElementById("resumeBtn11").classList.add("d-none");
      };
    
      $(document).ready(function () {
        $(".mdb-select").materialSelect();
      });


    return(
        <div>
            <div
        className="containerz-10 main12"
        style={{ padding: "7vh 7vw", backgroundColor: "white" }}
      >
        <div
          className="mb-5"
          style={{ textAlign: "center", width: "100%", paddingBottom: "14px" }}
        >
          <span
            className="pb-3"
            style={{
              fontSize: "xx-large",
              color: "#59599d",
              padding: "0px 50px 20px 50px",
              borderBottom: "1px solid #59599d",
            }}
          >
            Profile
          </span>
        </div>
        <div className="row">
          <div class="d-flex justify-content-center align-items-center mb-4 col-lg-6 col-md-6 col-sm-12">
            <span
              style={{
                fontSize: "24px",
                borderBottom: "1px solid black",
                fontWeight: "700",
              }}
            >
              User Information
            </span>
          </div>
          <div class="d-flex justify-content-end align-items-center mb-4 col-lg-6 col-md-6 col-sm-12">
            <button
              id="muteBtn11"
              class="py-1 profile-page-btn-11"
              onClick={muteOnClick}
              style={{
                boxShadow: "rgb(174 168 168) 0px 3px 6px",
                borderRadius: "5px",
                background: "rgba(214, 252, 208, 1)",
                border: "none",
                width: "80px",
              }}
            >
              Mute
            </button>

            <button
              id="resumeBtn11"
              class="py-1 profile-page-btn-11 d-none"
              onClick={resumeOnClick}
              style={{
                boxShadow: "rgb(174 168 168) 0px 3px 6px",
                borderRadius: "5px",
                background: "rgba(214, 252, 208, 1)",
                border: "none",
              }}
            >
              Resume
            </button>
          </div>
        </div>
        <form
          className="row justify-content-around form-padding-10"
          style={{
            textAlign: "start",
            boxShadow: "rgb(174 168 168) 0px 3px 6px",
            borderRadius: "16px",
          }}
        >
          <div className="row justify-content-around">
            <div class="mb-3 col-lg-5 col-md-5 col-sm-12">
              <label for="exampleInputEmail1" class="form-label">
                First Name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Name"
              />
            </div>
            <div class="mb-3 col-lg-5 col-md-5 col-sm-12">
              <label for="exampleInputPassword1" class="form-label">
                Last Name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Enter Mobile Number"
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
            <div class="mb-3 col-lg-5 col-md-5 col-sm-12">
              <label for="exampleInputEmail1" class="form-label">
                Mobile No.
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Mobile Number"
              />
            </div>
          </div>
          <button
            class="mt-4 profile-edit-btn-10 py-2 btn mx-auto"
            style={{
              fontSize: "large",
              boxShadow: "rgb(174 168 168) 0px 3px 6px",
              borderRadius: "5px",
              marginBottom: "15px",
              background: "rgba(214, 252, 208, 1)",
              width: "150px",
            }}
          >
            Edit
          </button>
        </form>

        
      </div>
        </div>
    )
}

export default UserProfile