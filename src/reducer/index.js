import { combineReducers } from 'redux';

import users from "./users";
import clear from "./clear";
import user from "./user";

export default combineReducers({
    users,
    clear,
    user,
});