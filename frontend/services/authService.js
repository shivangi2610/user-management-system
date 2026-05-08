import axios from "axios";

export const loginUser = async (data) => {

  const response = await axios.post("http://localhost:3051/api/auth/login", data, {
    headers: {
      "Content-Type": "application/json"
    },
    // withCredentials: true
  });
  return response.data;
};