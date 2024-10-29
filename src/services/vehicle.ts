import api from "./axiosClient";

const VEHICLE_API_URL = "https://soc01.midvietnam.net/api/v1/realtime/gps";

const fetchVehicleData = async (): Promise<IVehicle[]> => {
  try {
    const response = await api.get(VEHICLE_API_URL);
    if (response.data.result) {
      const vehicleList = Array.isArray(response.data.data)
        ? response.data.data
        : Object.values(response.data.data);

      return vehicleList;
    } else {
      throw new Error(response.data.message || "Failed to fetch vehicle data");
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message || "An unknown error occurred.");
    }
    throw new Error("An unknown error occurred.");
  }
};

export default {
  fetchVehicleData,
};
