export const simpleAction1 = () => dispatch => {
    dispatch({
      type: "SIMPLE_ACTION1",
      payload: {
          "one": "res1",
          "two": "res2"
      }
    });
  };

export const simpleAction2 = () => dispatch => {
  dispatch({
    type: "SIMPLE_ACTION2",
    payload: {
        "three": "res3"
    }
  });
};