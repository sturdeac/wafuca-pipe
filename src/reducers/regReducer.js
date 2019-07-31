import { REG_COMPLETE } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case REG_COMPLETE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
