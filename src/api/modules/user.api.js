import axiosClient from "../client/axios";

const userEndpoints = {
  signin: "/login",
  signup: "/signup",
  updateProfile: "/profileUpdate",
  getInfo: "/profileDetails",
};

const userApi = {
  signin: async ({ username, password }) => {
    try {
      const response = await axiosClient.post(userEndpoints.signin, {
        username,
        password,
      });

      if (response.status !== "success") {
        return { err: response.data };
      }

      return { response };
    } catch (err) {
      return { err };
    }
  },
  signup: async ({ username, password, email }) => {
    try {
      const response = await axiosClient.post(userEndpoints.signup, {
        username,
        password,
        email,
      });

      if (response.status !== "success") {
        return { err: response.data };
      }

      return { response };
    } catch (err) {
      return { err };
    }
  },
  getInfo: async () => {
    try {
      const response = await axiosClient.get(userEndpoints.getInfo);

      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default userApi;
