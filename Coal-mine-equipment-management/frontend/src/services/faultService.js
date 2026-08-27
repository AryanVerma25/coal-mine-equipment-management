import api from "./api";

export const reportFault = (data, token) =>
  api.post("/faults", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const getFaults = (token) =>
  api.get("/faults", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const assignEngineer = (id, engineerId, token) =>
  api.patch(
    `/faults/${id}/assign`,
    { engineerId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

export const startRepair = (id, token) =>
  api.patch(
    `/faults/${id}/start`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

export const completeRepair = (
  id,
  repairNotes,
  health,
  token
) =>
  api.patch(
    `/faults/${id}/complete`,
    {
      repairNotes,
      health,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );