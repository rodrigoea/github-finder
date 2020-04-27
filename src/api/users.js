import { api } from "./";

export const getUsers = (since) => {
  return api.get(`/users?since=${since}`).then((res) => {
    return res.data;
  });
};

export const getUserDetails = async (username) => {
  const user = await api.get(`/users/${username}/details`);
  const repos = await api.get(`/users/${username}/repos`);
  return {
    data: {
      user: {
        ...user.data.data,
      },
      repos: [...repos.data.data],
    },
  };
};

export const getUserRepos = (username) => {
  return api.get(`/users/${username}/repos`).then((res) => {
    return res.data;
  });
};
