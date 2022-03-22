import React, { useState } from "react";
export default function Filter() {
  const [tab, settab] = useState(1)
  return (
    <div
      style={{
        display: "flex",
        flexDirection:"column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "0.5rem",
        padding:"1rem 0rem"
      }}
    >
      <div className="form-floating mb-3 w-50">
        <input
          type="text"
          className="form-control"
          id="search"
          placeholder="Search"
        />
        <label for="search">Search</label>
      </div>
      {/* <button className="btn btn-dark" style={{height:"2.5rem",marginBottom:"1rem" ,marginLeft:"1rem"}}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-filter"
          viewBox="0 0 16 16"
        >
          <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
        </svg>
      </button> */}
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <button className={`nav-link ${tab===0 && 'active'}`} onClick={()=>{settab(0)}}>
            Past
          </button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${tab===1 && 'active'}`} aria-current="page" onClick={()=>{settab(1)}}>
            Active
          </button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${tab===2 && 'active'}`} onClick={()=>{settab(2)}}>
            Upcoming
          </button>
        </li>
      </ul>
    </div>
  );
}
