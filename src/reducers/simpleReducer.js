export default (state = {}, action) => {
  switch (action.type) {
    case "SIMPLE_ACTION1":
      return {
        ...state,
        ...action.payload
      };
    case "SIMPLE_ACTION2":
      return {
        ...state,
        ...action.payload,
        bet: "takem"
      };
    default:
      return state;
  }
};
