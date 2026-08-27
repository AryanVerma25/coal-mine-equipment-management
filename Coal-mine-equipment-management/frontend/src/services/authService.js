import api from "./api";

export const loginUser = (data) => {
  return api.post("/auth/login", data);
};

export const registerUser = (data) => {
  return api.post("/auth/register", data);
};

export const getEngineers = (token) =>
  api.get("/auth/engineers", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });