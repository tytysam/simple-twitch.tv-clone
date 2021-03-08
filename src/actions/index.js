import streams from "../apis/streams.js";
import { SIGN_IN, SIGN_OUT, CREATE_STREAM } from "./types.js";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = (formValues) => {
  return async (dispatch) => {
    const res = await streams.post("/streams", formValues);
  };
};
