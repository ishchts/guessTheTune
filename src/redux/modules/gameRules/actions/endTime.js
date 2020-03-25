import types from "../types";

export const endTime = (id) => ({
  type: types.END_TIME,
  payload: { id },
})