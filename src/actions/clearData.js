export const CLEAR_DATA = "CLEAR_DATA";
export function clearData() {
  return function(dispatch) {
    dispatch({
      type: CLEAR_DATA
    });
  };
}
