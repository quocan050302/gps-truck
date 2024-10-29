import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import ReactDOMServer from "react-dom/server";
import Truck from "./Truck";
import Car from "./Car";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import VehicleRefresher from "./VehicleRefresher";

const VehicleList = () => {
  const { list } = useSelector((state: RootState) => state.vehicles);

  return (
    <>
      <VehicleRefresher />

      {list.map((vehicle) => {
        // console.log("vehicle.vehicle_name", vehicle.vehicle_name);
        const isRunning = vehicle.status === 3;
        const color = isRunning ? "green" : "black";
        return (
          <Marker
            key={vehicle.device_id}
            position={[vehicle.latitude, vehicle.longitude]}
            icon={L.divIcon({
              className: "custom-icon",
              html: ReactDOMServer.renderToString(
                vehicle.vehicle_type_name &&
                  vehicle.vehicle_type_name.includes("Ô tô con") ? (
                  <Car color={color} />
                ) : (
                  <Truck color={color} />
                )
              ),
            })}
          >
            <Popup>
              <strong>{vehicle.vehicle_name}</strong>
              <br />
              Speed: {vehicle.speed} km/h
              <br />
              Status: {isRunning ? "Running" : "Stopped"}
              <br />
              Driver: {vehicle.name_driver}
              <br />
              Phone: {vehicle.phone_driver}
            </Popup>
          </Marker>
        );
      })}
    </>
  );
};

export default VehicleList;
