import axios from "axios";
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
});

// Search users
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });
  // const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
  //   headers: {
  //     Authorization: `token ${GITHUB_TOKEN}`,
  //   },
  // });
  const response = await github.get(`${GITHUB_URL}/search/users?${params}`);
  // console.log(response)
  return response.data.items;
};

// Get User and his/her Repos
export const getUserAndRepos = async (login) => {
  const params = new URLSearchParams({
    sort: "created",
    per_page: 10,
  });
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos?${params}`),
  ]);
  // console.log(user)
  // console.log(repos)
  if (user.status === 404) {
    window.location = "/notfound";
  } else {
    return { user: user.data, repos: repos.data };
  }
};

// // Get user's repos
// export const getRepos = async (login) => {
//   const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
//     headers: {
//       Authorization: `token ${GITHUB_TOKEN}`,
//     },
//   });
//   const data = await response.json();
//   return data;
// };
