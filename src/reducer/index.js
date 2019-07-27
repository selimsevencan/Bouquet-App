import { combineReducers } from 'redux';

import users from "./users";
import clear from "./clear";
import user from "./user";
import repos from "./repo";

export default combineReducers({
    users,
    clear,
    user,
    repos,
});