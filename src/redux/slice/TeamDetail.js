import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  teamDetail: JSON.parse(localStorage.getItem("teamDetail")) || null,
  loading: false,
};

const teamDetailSlice = createSlice({
  name: "teamDetail",
  initialState,
  reducers: {
    setTeamDetail(state, action) {
      state.teamDetail = action.payload;
      localStorage.setItem("teamDetail", JSON.stringify(action.payload));
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { setTeamDetail, setLoading } = teamDetailSlice.actions;
export default teamDetailSlice.reducer;
