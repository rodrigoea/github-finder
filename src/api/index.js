import axios from "axios";
import * as users from "./users";
import * as search from "./search";

const fallbackApiUrl = "http://localhost:8081/api";
const baseURL = process.env.REACT_APP_API_URL || fallbackApiUrl;

export const api = axios.create({
  baseURL,
});

export default { users, search };
