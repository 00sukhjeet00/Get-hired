import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import LoginScreen from "./Screen/Login";
import RegisterScreen from "./Screen/Register";
import HomeScreen from "./Screen/Home";
import AptitudeScreen from "./Screen/Aptitude";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Prepare With Us
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/aptitude">
                  Aptitude
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  SoftSkill
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Coding
                </a>
              </li>
            </ul>
            <form className="d-flex">
                <Link className="link" to="/login" style={{marginRight:"5px"}}>Login</Link>
                <Link className="link" to="/register">Sign Up</Link>
            </form>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen/>}/>
        <Route path="/aptitude" element={<AptitudeScreen/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
