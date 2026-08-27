import api from "./api";

export const getEquipments = () => api.get("/equipment");

export const addEquipment = (data, token) =>
  api.post("/equipment", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const updateEquipment = (id, data, token) =>
  api.put(`/equipment/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const deleteEquipment = (id, token) =>
  api.delete(`/equipment/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });