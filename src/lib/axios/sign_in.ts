import axios from "axios";

import { url } from ".";

axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
export const signIn = async (email: string, password: string) => {
  const res = await axios.post(`${url}auth/login`, {
    email,
    password,
  });
  console.log({ res });
};
