import React from "react";
import ReactStopwatch from "react-stopwatch";

export default function Exam(props) {
  return (
    <div className="container-fuild">
      <div style={{ display: "flex", justifyContent: "" }}>
        <div
          style={{
            flex: "8",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <div>
            <div
              className="shadow rounded"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "80%",
                padding: "1rem",
                height: "60vh",
                width:"80vh"
              }}
            >
              <div className="form-floating mb-3">
                <h6>Q: {props.index+1}/{props.questions.length} {props.questions[props.index]?.title}</h6>
              </div>
              <div className="mb-3" style={{}}>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    value={props.questions[props.index].options[0]}
                    onChange={(e) =>
                      props.setans( e.target.value)
                    }
                    checked={props.ans === props.questions[props.index].options[0] ? true : false}
                  />
                  <label className="form-check-label" for="flexRadioDefault1">
                    {props.questions[props.index].options[0]}
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    value={props.questions[props.index].options[1]}
                    onChange={(e) =>
                      props.setans( e.target.value)
                    }
                    checked={props.ans === props.questions[props.index].options[1] ? true : false}
                  />
                  <label className="form-check-label" for="flexRadioDefault2">
                    {props.questions[props.index].options[1]}
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault3"
                    value={props.questions[props.index].options[2]}
                    onChange={(e) =>
                      props.setans( e.target.value)
                    }
                    checked={props.ans === props.questions[props.index].options[2] ? true : false}
                  />
                  <label className="form-check-label" for="flexRadioDefault3">
                    {props.questions[props.index].options[2]}
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault4"
                    value={props.questions[props.index].options[3]}
                    onChange={(e) =>
                      props.setans( e.target.value)
                    }
                    checked={props.ans === props.questions[props.index].options[3] ? true : false}
                  />
                  <label className="form-check-label" for="flexRadioDefault4">
                    {props.questions[props.index].options[3]}
                  </label>
                </div>
              </div>
              <button className="btn btn-primary" onClick={()=>{
                props.handleAns()
              }}>Next</button>
            </div>
          </div>
        </div>
        <div
          style={{
            flex: "4",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "90vh",
          }}
        >
          <ReactStopwatch
            seconds={0}
            minutes={0}
            hours={0}
            limit="00:00:10"
            onChange={({ hours, minutes, seconds }) => {
              // do something
            }}
            onCallback={() => console.log("Finish")}
            render={({ formatted, hours, minutes, seconds }) => {
              return (
                <div>
                  <p>Formatted: {formatted}</p>
                  {/* <p>Hours: {hours}</p>
                  <p>Minutes: {minutes}</p>
                  <p>Seconds: {seconds}</p> */}
                </div>
              );
            }}
          />
        </div>
      </div>
    </div>
  );
}
