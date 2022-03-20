import React, { useState } from "react";

export default function Dashboard() {
  const [tab, settab] = useState(0)
  return (
    <div style={{ display: "flex", height: "94vh" }}>
      <div style={{ flex: "0.2" }}>
        <nav class="nav nav-pills nav-fill flex-column p-5">
          <button class={`nav-link ${tab===0 && 'active'}`} onClick={()=>{settab(0)}}>
            Profile
          </button>
          <button class={`nav-link ${tab===1 && 'active'}`} onClick={()=>{settab(1)}}>
            Result
          </button>
        </nav>
      </div>
      <div style={{ flex: "0.8" }}>
        {
          tab===0?(
            <h2>Profile</h2>
          ):
          (
            <h2>Result</h2>
          )
        }
      </div>
    </div>
  );
}
