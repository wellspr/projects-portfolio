import { EXAMPLE_ACTION } from "../actions/types";

export const exampleReducer = (state={}, action) => {
    switch (action.type) {
        case EXAMPLE_ACTION:
            return action.payload;
        default:
            return state;
    }
};