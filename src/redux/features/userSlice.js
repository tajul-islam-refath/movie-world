import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "User",
  initialState: {
    user: null,
    movies: [],
    movie: null,
    watchList: [],
  },
  reducers: {
    setUser: (state, action) => {
      if (action.payload === null) {
        localStorage.removeItem("mw_token");
      } else {
        if (action.payload.token)
          localStorage.setItem("mw_token", action.payload.token);
      }

      state.user = action.payload;
    },
    setListMovies: (state, action) => {
      state.movies = action.payload;
    },
    setMovie: (state, action) => {
      state.movie = action.payload;
    },
    setWatchLists: (state, action) => {
      state.watchList = action.payload;
    },
    removeWatchList: (state, action) => {
      const { movieId } = action.payload;
      state.watchList = [...state.watchList].filter(
        (e) => e._id.toString() !== movieId.toString()
      );
    },
    addWatchList: (state, action) => {
      state.watchList = [action.payload, ...state.watchList];
    },
  },
});

export const {
  setUser,
  setWatchLists,
  addWatchList,
  removeWatchList,
  setListMovies,
  setMovie,
} = userSlice.actions;

export default userSlice.reducer;
