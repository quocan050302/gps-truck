import { configureStore } from "@reduxjs/toolkit";
import vehiclesReducer from "../redux/features/vehicle/vehicleSlice";
import filterVehiclesReducer from "../redux/features/vehicle/filterSlice";

const store = configureStore({
  reducer: {
    vehicles: vehiclesReducer,
    filterVehicles: filterVehiclesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
