import axios from "axios";

import { url } from ".";

// axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
// axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
// axios.defaults.xsrfCookieName = "csrftoken";
// axios.defaults.withCredentials = true;
axios.defaults.headers.common["cross-origin-opener-policy"] = "same-origin";
axios.defaults.headers.common["referrer-policy"] = "same-origin";
axios.defaults.headers.common["x-content-type-options"] = "nosniff";
export const signIn = async (email: string, password: string) => {
  const res = await axios.post(`${url}auth/login`, {
    email,
    password,
  });
  console.log({ res });
};
