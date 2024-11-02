import { Marker } from "react-leaflet";
import L from "leaflet";
import ReactDOMServer from "react-dom/server";
import Truck from "./Truck";
import Car from "./Car";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import VehicleRefresher from "./VehicleRefresher";
import { selectVehicle } from "../redux/features/vehicle/filterSlice";
import "leaflet-rotatedmarker";
import { forwardRef } from "react";

type ModalRef = {
  open: () => void;
  close: () => void;
};

const VehicleList = forwardRef<ModalRef>((_, ref) => {
  const { list } = useSelector((state: RootState) => state.vehicles);
  const dispatch = useDispatch();
  return (
    <>
      <VehicleRefresher />

      {list.map((vehicle) => {
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
            eventHandlers={{
              click: () => {
                if (ref && "current" in ref && ref.current) {
                  ref.current.open();
                }
                dispatch(selectVehicle(vehicle));
              },
            }}
          ></Marker>
        );
      })}
    </>
  );
});

export default VehicleList;
