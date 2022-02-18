import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
export default function Register() {
  return (
    <main className="main text-center">
      <form className="form-signin" style={{ width: "40%" }}>
        <h1 className="h3 mb-3 fw-normal">Register</h1>

        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
          />
          <label for="email">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly"}}>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" for="flexRadioDefault1">
              Student
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked
            />
            <label className="form-check-label" for="flexRadioDefault2">
              Professional
            </label>
          </div>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="institue"
            placeholder="Institue"
          />
          <label for="institue">Institue/Company</label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign up
        </button>
        <p className="mt-5 mb-3 text-muted">
          <Link to="/login">Already have account ?</Link>
        </p>
      </form>
    </main>
  );
}
