import api from "./axiosClient";

const API_URL = "https://rep01.midvietnam.net/api/v1/reports/playback";

export const fetchVehicleRoute = async (
  imei: string,
  startDate: number,
  endDate: number,
  userId: number
) => {
  try {
    const response = await api.get(`${API_URL}/${imei}`, {
      params: {
        start_date: startDate,
        end_date: endDate,
        user_id: userId,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching vehicle route:", error);
    throw error;
  }
};
