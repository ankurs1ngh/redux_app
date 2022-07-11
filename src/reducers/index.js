import changeCounter from "./incDec";

import { combineReducers } from "redux";

const reducers = combineReducers(
    {
        changeCounter
    }
);

export default reducers;