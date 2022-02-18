import React from "react";

export default function Home() {
  return (
    <div>
      <div style={{display:"flex",justifyContent:"space-evenly",flexDirection:"row",margin:"2rem 0"}}>
        <div className="card shadow" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="/images/A-1.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <h4 className="card-text text-center">Aptitude</h4>
            <p className="card-text text-center">Lorem ipsum dolor sit amet</p>
          </div>
        </div>
        <div className="card shadow" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="/images/images.jpeg"
            alt="Card image cap"
          />
          <div className="card-body">
            <h4 className="card-text text-center">SoftSkill</h4>
            <p className="card-text text-center">Lorem ipsum dolor sit amet</p>
          </div>
        </div>
        <div className="card shadow" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="/images/coding.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <h4 className="card-text text-center">Coding</h4>
            <p className="card-text text-center">Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </div>
      <div style={{display:"flex",justifyContent:"space-evenly",flexDirection:"row"}}>
      <div className="card shadow" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="/images/images.jpeg"
            alt="Card image cap"
          />
          <div className="card-body">
            <h4 className="card-text text-center">Quiz</h4>
            <p className="card-text text-center">Lorem ipsum dolor sit amet</p>
          </div>
        </div>
        <div className="card shadow" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="/images/images.jpeg"
            alt="Card image cap"
          />
          <div className="card-body">
            <h4 className="card-text text-center">Test</h4>
            <p className="card-text text-center">Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </div>
    </div>
  );
}
