import axios from "axios";
export const apiCall = async (method, endPoint, params) => {
  const token = await localStorage.getItem("token");
  if (method === "POST") {
    axios
      .post(endPoint, { params, headers: { token: token } })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  } else {
    axios
      .post(endPoint, { params, headers: { token: token } })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  }
};
