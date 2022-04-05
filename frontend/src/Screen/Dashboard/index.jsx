import React, { useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import { apiCall } from "../../apiCall";
import { ENDPOINT } from "../../endPoint";
import Dashboard from "./component/Dashboard";

export default function DashboardScreen() {
  const [userData, setuserData] = useState(
    JSON.parse(localStorage.getItem("userData"))
  );
  const [newPassword, setnewPassword] = useState("");
  const [confirPassword, setconfirPassword] = useState("");
  const [showMSG, setshowMSG] = useState({ show: false, which: "danger" });
  const [msg, setmsg] = useState("");
  const changePassword = async (e) => {
    e.preventDefault();
    const params = {
      password: newPassword,
      confirPassword,
    };
      const res = await apiCall("POST", ENDPOINT.change_password, params);
      setmsg(res.data.msg);
      if(res.status==200)
        setshowMSG({ show: true, which: "success" });
      else
        setshowMSG({ show: true, which: "danger" });
  };
  return (
    <>
      {(showMSG.show && showMSG.which === "danger") ? (
        <SweetAlert
          danger
          onConfirm={() => {
            setshowMSG(false);
          }}
        >
          {msg}
        </SweetAlert>
      ) : (showMSG.show && showMSG.which === "success") ? (
        <SweetAlert
          success
          onConfirm={() => {
            setshowMSG(false);
          }}
        >
          {msg}
        </SweetAlert>
      ) : null}
      <Dashboard
        userData={userData}
        newPassword={newPassword}
        setnewPassword={setnewPassword}
        confirPassword={confirPassword}
        setconfirPassword={setconfirPassword}
        changePassword={changePassword}
      />
    </>
  );
}
