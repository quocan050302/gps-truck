import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import AuthContext from "../context/AuthProvider";

const VehicleDataComponent = () => {
  const [vehicles, setVehicles] = useState<IVehicle | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    const fetchVehicleData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "https://soc01.midvietnam.net/api/v1/realtime/gps",
          {
            headers: {
              Authorization: `Bearer ${auth?.accessToken}`,
            },
          }
        );

        if (response.data.result) {
          setVehicles(response.data.data);
        } else {
          throw new Error(
            response.data.message || "Failed to fetch vehicle data"
          );
        }
      } catch (err) {
        setError(err?.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVehicleData();
  }, [auth]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  console.log(vehicles);
  // Set up default Leaflet icon
  delete L.Icon.Default.prototype?._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconRetinaUrl:
      "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  });

  return (
    <div>
      <MapContainer
        center={[10.779616, 106.683792]}
        zoom={13}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {vehicles &&
          Object.values(vehicles).map((vehicle) => (
            <Marker
              key={vehicle.device_id}
              position={[vehicle.latitude, vehicle.longitude]}
            >
              <Popup>
                <strong>{vehicle.vehicle_name}</strong>
                <br />
                Speed: {vehicle.speed} km/h
                <br />
                Status: {vehicle.status === 3 ? "Running" : "Stopped"}
                <br />
                Driver: {vehicle.name_driver}
                <br />
                Phone: {vehicle.phone_driver}
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
};

export default VehicleDataComponent;
