import { createSlice } from "@reduxjs/toolkit";

const filterVehiclesSlice = createSlice({
  name: "filterVehicles",
  initialState: {
    list: [],
    selectedVehicle: null,
  },
  reducers: {
    setVehicles: (state, action) => {
      state.list = action.payload;
    },
    selectVehicle: (state, action) => {
      state.selectedVehicle = action.payload;
    },
  },
});

export const { setVehicles, selectVehicle } = filterVehiclesSlice.actions;
export default filterVehiclesSlice.reducer;
