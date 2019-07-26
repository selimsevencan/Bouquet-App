import { combineReducers } from 'redux';

import users from "./users";
import clear from "./clear";

export default combineReducers({
    users,
    clear,
});