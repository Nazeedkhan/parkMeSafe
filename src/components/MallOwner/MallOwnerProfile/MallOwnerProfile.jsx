import React from "react";
import $ from "jquery";
import "./MallOwnerProfile.css";

const MallOwnerProfile = () => {
  const onClickEditBtn = () => {
    const inputs = document.getElementsByClassName(
      "areaManeger-Profile-Details-12"
    );
    for (let index = 0; index < inputs.length; index++) {
      inputs[index].classList.remove("disable-12");
    }
    document.getElementById("editBtn").classList.add("d-none");
    document.getElementById("submitEditBtn").classList.remove("d-none");
  };

  const onClickSumbitEditBtn = () => {
    const inputs = document.getElementsByClassName(
      "areaManeger-Profile-Details-12"
    );
    for (let index = 0; index < inputs.length; index++) {
      inputs[index].classList.add("disable-12");
    }
    document.getElementById("editBtn").classList.remove("d-none");
    document.getElementById("submitEditBtn").classList.add("d-none");
  };

  // const onClickDeleteButton = () => {
  //   const cols = document.getElementsByClassName("delete-toggle-12");
  //   for (let index = 0; index < cols.length; index++) {
  //     cols[index].classList.remove("d-none");
  //   }
  //   document.getElementById("add-site-btn").classList.add("d-none");
  //   document.getElementById("delete-site-btn").classList.add("d-none");
  //   document.getElementById("delete-done-btn").classList.remove("d-none");
  // };

  // const onClickDoneButton = () => {
  //   const cols = document.getElementsByClassName("delete-toggle-12");
  //   for (let index = 0; index < cols.length; index++) {
  //     cols[index].classList.add("d-none");
  //   }
  //   document.getElementById("add-site-btn").classList.remove("d-none");
  //   document.getElementById("delete-site-btn").classList.remove("d-none");
  //   document.getElementById("delete-done-btn").classList.add("d-none");
  // };

  // const muteOnClick = () => {
  //   document.getElementById("muteBtn12").classList.add("d-none");
  //   document.getElementById("resumeBtn12").classList.remove("d-none");
  // };
  // const resumeOnClick = () => {
  //   document.getElementById("muteBtn12").classList.remove("d-none");
  //   document.getElementById("resumeBtn12").classList.add("d-none");
  // };

  // const myFunction = () => {
  //   var input, filter, ul, li, a, i, txtValue;
  //   input = document.getElementById("myInput");
  //   filter = input.value.toUpperCase();
  //   ul = document.getElementById("myUL");
  //   li = ul.getElementsByTagName("li");
  //   for (i = 0; i < li.length; i++) {
  //     a = li[i].getElementsByTagName("a")[0];
  //     txtValue = a.textContent || a.innerText;
  //     if (txtValue.toUpperCase().indexOf(filter) > -1) {
  //       li[i].style.display = "";
  //     } else {
  //       li[i].style.display = "none";
  //     }
  //   }
  // };

  $(document).ready(function () {
    $(".mdb-select").materialSelect();
  });

  return (
    <>
      <div
        className="container main12"
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
              color: "dodgerblue",
              padding: "0px 50px 20px 50px",
              borderBottom: "1px solid dodgerblue",
              boxShadow: "0px 1.5px rgba(0, 0, 0, 0.39)",
            }}
          >
            Profile
          </span>
        </div>

        <div className="btnForMuteAndResume">
          <button
            type="button"
            class="btn btn-success btnMargin"
            style={{ background: "#D6FCD0" }}
          >
            Mute
          </button>
          <button type="button" class="btn btn-success btnMargin" style={{ background: "#D6FCD0" }}>
            Resume
          </button>
        </div>
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
                Name
              </label>
              <input
                type="text"
                class="form-control areaManeger-Profile-Details-12 disable-12"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Name"
              />
            </div>
            <div class="mb-3 col-lg-5 col-md-5 col-sm-12">
              <label for="exampleInputPassword1" class="form-label">
                Mobile Number
              </label>
              <input
                type="text"
                class="form-control areaManeger-Profile-Details-12 disable-12"
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
                class="form-control areaManeger-Profile-Details-12 disable-12"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Email"
              />
            </div>
            <div class="mb-3 col-lg-5 col-md-5 col-sm-12">
              <label for="exampleInputPassword1" class="form-label">
                Address
              </label>
              <input
                type="text"
                class="form-control areaManeger-Profile-Details-12 disable-12"
                id="exampleInputPassword1"
                placeholder="Enter Address"
              />
            </div>
            <div class="mb-3 col-lg-5 col-md-5 col-sm-12">
              <label for="exampleInputEmail1" class="form-label">
                Alt Mobile Number
              </label>
              <input
                type="text"
                class="form-control areaManeger-Profile-Details-12 disable-12"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Mobile Number"
              />
            </div>
            <div class="mb-3 col-lg-5 col-md-5 col-sm-12">
              <label for="exampleInputEmail1" class="form-label">
                Site Name
              </label>
              <input
                type="text"
                class="form-control areaManeger-Profile-Details-12 disable-12"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Site Name"
              />
            </div>
          </div>
          <div className="buttonBox1">
            <button
              type="button"
              id="editBtn"
              class="mt-4 px-5 area-maneger-edit-btn py-2 btn mx-auto editBtn1"
              onClick={onClickEditBtn}
              style={{
                fontSize: "large",
                fontWeight: "bold",
                boxShadow: "rgb(174 168 168) 0px 3px 6px",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Edit
            </button>
            <button
              type="button"
              id="submitEditBtn"
              class="BtnBox001 mt-4 px-5 area-maneger-edit-btn py-2 btn mx-auto d-none submitBtn1"
              onClick={onClickSumbitEditBtn}
              style={{
                fontSize: "large",
                fontWeight: "bold",
                boxShadow: "rgb(174 168 168) 0px 3px 6px",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Submit
            </button>
          </div>
        </form>
        <div className="pagination" style={{ marginTop: "5vh" }}>
          <a href="YetToCome">&laquo;</a>
          <a href="YetToCome">1</a>
          <a style={{ border: "none" }} href="YetToCome">
            /
          </a>
          <a style={{ border: "none" }} href="YetToCome">
            3
          </a>
          <a href="YetToCome">&raquo;</a>
        </div>
      </div>
    </>
  );
};

export default MallOwnerProfile;
