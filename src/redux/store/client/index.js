import { createStore } from "redux";
import reducers from "../../reducers";

const createClientStore = (initialState) => {
    const store = createStore(
        reducers,
        initialState
    );
    return store;
};

export default createClientStore;