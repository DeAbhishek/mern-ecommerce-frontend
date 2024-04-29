import axios from "axios";

const USER_URL = "http://localhost:8080/auth";

export const createUser = async (userData) => {
  const response = await axios.post(`${USER_URL}/signup`, {
    email: userData.email,
    password: userData.password,
  });
  return response.data;
};

export const checkUser = async (logInData) => {
  try {
    const { data } = await axios.post(`${USER_URL}/login`, logInData);
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const signOut = (userId) =>
  new Promise((resolve, reject) => {
    resolve("success");
  });
