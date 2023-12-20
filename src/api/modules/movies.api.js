import axiosClient from "../client/axios";

const moviesEndpoints = {
  create: "/movies/create",
  getAll: "/movies",
  getsingle: "/movies",
  addMovieRating: "/movies/rating/add",
};

const movieApi = {
  create: async (body) => {
    try {
      const response = await axiosClient.post(moviesEndpoints.create, body);

      if (response.status !== "success") {
        return { err: response.data };
      }

      return { response };
    } catch (err) {
      return { err };
    }
  },
  getAll: async () => {
    try {
      const response = await axiosClient.get(moviesEndpoints.getAll);

      if (response.status !== "success") {
        return { err: response.data };
      }

      return { response };
    } catch (err) {
      return { err };
    }
  },
  getSingleById: async (id) => {
    try {
      const response = await axiosClient.get(
        `${moviesEndpoints.getsingle}/${id}`
      );

      if (response.status !== "success") {
        return { err: response.data };
      }

      return { response };
    } catch (err) {
      return { err };
    }
  },
  addRating: async (body) => {
    try {
      const response = await axiosClient.post(
        moviesEndpoints.addMovieRating,
        body
      );

      if (response.status !== "success") {
        return { err: response.data };
      }

      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default movieApi;
