import { useRef, useState } from "react";
import DateTimePicker from "../components/ui/DateTimePicker";
import Select from "../components/ui/Select";
import { Button, Spin } from "antd";
import { fetchVehicleRoute } from "../services/routeVehicle";
import { MapContainer, Polyline, TileLayer } from "react-leaflet";
import { LatLngTuple, Map } from "leaflet";

interface DateRange {
  startDate: number | null;
  endDate: number | null;
}

const VehicleRoad = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);
  const [dateRange, setDateRange] = useState<DateRange>({
    startDate: null,
    endDate: null,
  });
  const [positionRoute, setPositionRoute] = useState([]);
  const mapRef = useRef<Map | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = async () => {
    const userId = localStorage.getItem("uid");
    if (!userId) {
      console.error("User ID not found. Please log in.");
      return;
    }
    if (selectedVehicle && dateRange.startDate && dateRange.endDate) {
      setLoading(true);
      try {
        const data = await fetchVehicleRoute(
          selectedVehicle,
          dateRange.startDate,
          dateRange.endDate,
          Number(userId)
        );
        console.log("Vehicle Route Data:", data?.data?.route);
        setPositionRoute(data?.data?.route);
        if (positions.length > 0) {
          const latitudes = positions.map((pos) => pos[0]);
          const longitudes = positions.map((pos) => pos[1]);

          const centerLat =
            latitudes.reduce((sum, lat) => sum + lat, 0) / latitudes.length;
          const centerLng =
            longitudes.reduce((sum, lng) => sum + lng, 0) / longitudes.length;

          const center: [number, number] = [centerLat, centerLng];

          if (mapRef.current) {
            mapRef.current.setView(center, 13);
          }
        } else {
          console.error("Unexpected data structure:", data);
        }
      } catch (error) {
        console.error("Failed to fetch vehicle route data:", error);
      } finally {
        setLoading(false);
      }
    } else {
      console.error("Please select a vehicle and a valid date range.");
    }
  };
  const positions: LatLngTuple[] = Array.isArray(positionRoute)
    ? positionRoute.map(
        (point: IvehicleRoute): LatLngTuple => [point.latitude, point.longitude]
      )
    : [];

  return (
    <div>
      <div className="flex items-center justify-center gap-8 pt-4 mb-4">
        <div className="flex items-center gap-4 w-[calc((3/12)*100%)]">
          <span className="font-medium text-sm flex-shrink-0">Biển số: </span>
          <Select onChange={(value: string) => setSelectedVehicle(value)} />
        </div>
        <div className="flex items-center gap-4">
          <span className="font-medium text-sm">Thời gian: </span>
          <DateTimePicker
            onDateRangeChange={(range: DateRange) => setDateRange(range)}
          />
        </div>
        <Button
          type="primary"
          className="px-2 py-1.5 bg-blue-400 rounded-md text-sm font-medium text-white"
          onClick={handleSearch}
        >
          {loading ? <Spin size="small" /> : "Tìm kiếm"}
        </Button>
      </div>
      <MapContainer
        center={[10.779616, 106.683792]}
        zoom={13}
        style={{ height: "100vh", width: "100%" }}
        ref={mapRef}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Polyline color="blue" weight={5} opacity={0.7} positions={positions} />
      </MapContainer>
    </div>
  );
};

export default VehicleRoad;
