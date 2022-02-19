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
            class="card shadow"
            style={{ width: "38rem", marginBottom: "1rem" }}
          >
            <h5 class="card-header">Featured</h5>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            class="card shadow"
            style={{ width: "38rem", marginBottom: "1rem" }}
          >
            <h5 class="card-header">Featured</h5>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div style={{ flex: "4", display: "grid", placeItems: "center" }}>
          <div class="card shadow" style={{ width: "18rem" }}>
            <div class="card-body">
              <h5 class="card-title">Filter</h5>
              
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                    checked
                  />
                  <label class="form-check-label" for="defaultCheck1">
                    Aptitude
                  </label>
                </div>
              </li>
              <li class="list-group-item">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck2"
                  />
                  <label class="form-check-label" for="defaultCheck2">
                    SoftSkill
                  </label>
                </div>
              </li>
              <li class="list-group-item">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck3"
                  />
                  <label class="form-check-label" for="defaultCheck3">
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
