import React, { useState } from "react";

export default function Dashboard() {
  const [tab, settab] = useState(0);
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <div style={{ flex: "0.2" }}>
        <nav className="nav nav-pills nav-fill flex-column p-5">
          <button
            className={`nav-link ${tab === 0 && "active"}`}
            onClick={() => {
              settab(0);
            }}
          >
            Profile
          </button>
          <button
            className={`nav-link ${tab === 1 && "active"}`}
            onClick={() => {
              settab(1);
            }}
          >
            Result
          </button>
        </nav>
      </div>
      <div
        style={{
          flex: "0.8",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "10%",
        }}
      >
        {tab === 0 ? (
          <div
            className="shadow"
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              padding: "2rem 0rem",
            }}
          >
            <h2>Profile</h2>
            <div style={{ width: "60%" }}>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  value={""}
                  disabled
                  // onChange={(e) => props.setemail(e.target.value)}
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingInput"
                  value={""}
                  // onChange={(e) => props.setemail(e.target.value)}
                />
                <label for="floatingInput">Password</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingInput"
                  value={""}
                  // onChange={(e) => props.setemail(e.target.value)}
                />
                <label for="floatingInput">Conform Password</label>
              </div>
              <button
                className="w-100 btn btn-lg btn-primary"
                type="submit"
                // onClick={(e) => props.handelLogin(e)}
              >
                Update
              </button>
            </div>
          </div>
        ) : (
          <div style={{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"}}>
          <div class="card w-50">
            <div class="card-header">Featured</div>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                See Questions
              </a>
            </div>
          </div>
          </div>
        )}
      </div>
    </div>
  );
}
