// redux/slices/profileSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  teamDetail: JSON.parse(localStorage.getItem("teamDetail")) || null,
  loading: false,
};

const teamDetailSlice = createSlice({
  name: "teamData",
  initialState,
  reducers: {
    setTeamDetail(state, action) {
      state.teamDetail = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    }
  },
});

export const { setTeamData, setLoading } = teamDetailSlice.actions;
export default teamDetailSlice.reducer;
