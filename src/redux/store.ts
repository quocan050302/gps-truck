import { configureStore } from "@reduxjs/toolkit";
import vehiclesReducer from "../redux/features/vehicle/vehicleSlice";

const store = configureStore({
  reducer: {
    vehicles: vehiclesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
