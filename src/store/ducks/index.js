import { combineReducers } from "redux";

import search from "./search";
import users from "./users";
import profile from "./profile";

export default combineReducers({
  search,
  users,
  profile,
});
