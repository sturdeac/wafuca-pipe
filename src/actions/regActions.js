import axios from "axios";
import { GET_ERRORS, REG_COMPLETE } from "./types";

export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(
      () => history.push("/"),
      dispatch({
        type: REG_COMPLETE,
        payload:
          "Thank you for registering! You will be notified when further action is required."
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
