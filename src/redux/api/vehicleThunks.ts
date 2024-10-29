import { createAsyncThunk } from "@reduxjs/toolkit";
import vehicleService from "../../services/vehicle";

export const fetchVehicleData = createAsyncThunk<
  IVehicle[],
  void,
  { rejectValue: string }
>("vehicles/fetchVehicleData", async (_, { rejectWithValue }) => {
  try {
    const vehicles = await vehicleService.fetchVehicleData();
    return vehicles;
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});
