import { createStore } from "redux";
import countreducers from "./reducers/Cartreducer";

const store = createStore(countreducers);

export default store;
