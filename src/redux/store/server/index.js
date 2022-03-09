import { createStore } from "redux";
import reducers from "../../reducers";

const createServerStore = (req) => {
    const store = createStore(
        reducers,
        {}
    );
    return store;
};

export default createServerStore;