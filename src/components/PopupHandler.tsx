import { memo, useEffect, useState } from "react";
import { Popup } from "react-leaflet";
import useAppContexts from "../hooks/useAppContexts";
import CurrentIndexContext from "../context/CurrentIndexProvider";
import L from "leaflet";

interface IVehicle {
  latitude: number;
  longitude: number;
}

interface ClosestVehicle {
  vehicle: IVehicle;
  distance: number;
  index: number;
}
interface PopupProp {
  popupInfo: { lat: number; lng: number } | null;
  positionRoute: IVehicle[];
}

const PopupHandler = memo(({ popupInfo, positionRoute }: PopupProp) => {
  const { setCurrentIndexList } = useAppContexts(CurrentIndexContext);
  const [popupContent, setPopupContent] = useState<string | null>(null);
  const [popupPosition, setPopupPosition] = useState<L.LatLng | null>(null);

  useEffect(() => {
    if (!popupInfo) {
      return;
    }

    const clickedLocation = L.latLng(popupInfo.lat, popupInfo.lng);

    const closestVehicle: ClosestVehicle | null =
      positionRoute.reduce<ClosestVehicle | null>((closest, vehicle, index) => {
        const vehicleLocation = L.latLng(vehicle.latitude, vehicle.longitude);
        const distance = clickedLocation.distanceTo(vehicleLocation);
        if (!closest || distance < closest.distance) {
          return { vehicle, distance, index };
        }
        return closest;
      }, null);

    if (closestVehicle) {
      const vehicle = closestVehicle.vehicle;
      setCurrentIndexList(closestVehicle.index);

      setPopupContent(
        `Closest Vehicle: Latitude ${vehicle?.latitude}, Longitude ${vehicle?.longitude}`
      );
      setPopupPosition(L.latLng(vehicle?.latitude, vehicle?.longitude));
    } else {
      setCurrentIndexList(null);
      setPopupContent(null);
      setPopupPosition(null);
    }
  }, [popupInfo, positionRoute, setCurrentIndexList]);

  return (
    <>
      {popupPosition && popupContent && (
        <Popup position={popupPosition} closeButton={true}>
          <span>{popupContent}</span>
        </Popup>
      )}
    </>
  );
});

export default PopupHandler;
