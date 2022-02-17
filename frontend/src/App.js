import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import LoginScreen from "./Screen/Login";

function App() {
  return (
    <BrowserRouter>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Prepare With Us
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>
            <form class="d-flex">
                <Link className="link" to="/login" style={{marginRight:"5px"}}>Login</Link>
                <Link className="link" to="/login">Sign Up</Link>
            </form>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
