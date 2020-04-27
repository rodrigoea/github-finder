import axios from "axios";
import * as users from "./users";
import * as search from "./search";

const baseURL = "http://localhost:8081/api";

export const api = axios.create({
  baseURL,
});

export default { users, search };
