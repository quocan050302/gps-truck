import axios from "axios";

export const fetchAddress = async (
  lat: number,
  lon: number
): Promise<Address | null> => {
  try {
    const response = await axios.get(
      `https://add01.midvietnam.net/nominatim/reverse.php`,
      {
        params: {
          format: "jsonv2",
          lat: lat,
          lon: lon,
          "accept-language": "vi",
        },
      }
    );
    return response.data || "Address not found";
  } catch (error) {
    console.error("Error fetching address:", error);
    return null;
  }
};
