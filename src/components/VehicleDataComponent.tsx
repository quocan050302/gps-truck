import { MapContainer, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import VehicleList from "./VehicleList";
import Statistic from "./Statistic";
import ModalDetailCar from "./ModalDetailCar";
import { useRef } from "react";

const VehicleDataComponent = () => {
  L.Icon.Default.mergeOptions({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconRetinaUrl:
      "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  });

  const mapRef = useRef<L.Map | null>(null);
  const modalRef = useRef(null);
  return (
    <div>
      <MapContainer
        ref={mapRef}
        center={[10.779616, 106.683792]}
        zoom={13}
        style={{ height: "100vh", width: "100%" }}
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <VehicleList ref={modalRef} />
      </MapContainer>
      <Statistic mapRef={mapRef} ref={modalRef}></Statistic>
      <ModalDetailCar ref={modalRef}></ModalDetailCar>
    </div>
  );
};

export default VehicleDataComponent;
