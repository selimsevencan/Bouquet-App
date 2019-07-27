import { combineReducers } from "redux";

import users from "./users";
import user from "./user";
import repos from "./repo";

export default combineReducers({
  users,
  user,
  repos
});
