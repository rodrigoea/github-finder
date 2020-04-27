import { api } from "./";

export const searchUser = (username) => {
  return api.get(`/search/users/${username}`).then((res) => {
    return res.data;
  });
};
