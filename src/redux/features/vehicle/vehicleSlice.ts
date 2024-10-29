import { createSlice } from "@reduxjs/toolkit";
import { fetchVehicleData } from "../../api/vehicleThunks";

interface VehicleState {
  list: IVehicle[];
  isLoading: boolean;
  error: string | null;
}

const initialState: VehicleState = {
  list: [],
  isLoading: false,
  error: null,
};

const vehicleSlice = createSlice({
  name: "vehicles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVehicleData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchVehicleData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list = action.payload;
      })
      .addCase(fetchVehicleData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Failed to fetch vehicle data";
      });
  },
});

export default vehicleSlice.reducer;
