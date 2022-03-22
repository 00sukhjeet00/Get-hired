import React from "react";
import Filter from "../../../Component/Filter";
export default function Quiz() {
  return (
    <div className="container-fuild">
      <Filter />
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div
          style={{
            flex: "8",
            marginLeft: "2rem",
            display: "grid",
            placeItems: "center",
          }}
        >
          <div
            className="card shadow"
            style={{ width: "38rem", marginBottom: "1rem" }}
          >
            <h5 className="card-header">Featured</h5>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card shadow"
            style={{ width: "38rem", marginBottom: "1rem" }}
          >
            <h5 className="card-header">Featured</h5>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div style={{ flex: "4", display: "grid", placeItems: "center" }}>
          <div className="card shadow" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Filter</h5>
              
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                    checked
                  />
                  <label className="form-check-label" for="defaultCheck1">
                    Aptitude
                  </label>
                </div>
              </li>
              <li className="list-group-item">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck2"
                  />
                  <label className="form-check-label" for="defaultCheck2">
                    SoftSkill
                  </label>
                </div>
              </li>
              <li className="list-group-item">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck3"
                  />
                  <label className="form-check-label" for="defaultCheck3">
                    Coding
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
