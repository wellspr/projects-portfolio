import { EXAMPLE_ACTION } from "./types";

export const exampleAction = () => async (dispatch) => {
    dispatch({
        type: EXAMPLE_ACTION,
        payload: "Hello World."
    });
};