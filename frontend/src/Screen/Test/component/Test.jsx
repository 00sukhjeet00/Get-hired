import React from "react";
import Filter from "../../../Component/Filter";
export default function Test() {
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
              <p className="card-text">
                <button className="btn btn-primary">Google</button>
                <button className="btn">Abode</button>
                <button className="btn">Deshow</button>
              </p>
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
            <div className="card-body">
              <input
                type="text"
                className="form-control"
                id="company"
                placeholder="Search By Company"
              />
              <div className="text-center mt-2">
                <button className="btn btn-primary">
                  {"Search "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
