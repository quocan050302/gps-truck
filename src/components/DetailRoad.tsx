import { Typography } from "antd";
import useGetAddress from "../hooks/useGetAddress";
import { Link } from "react-router-dom";

const { Text } = Typography;

const DetailRoad = ({ filterDataVehicle }: { filterDataVehicle: IVehicle }) => {
  const address = useGetAddress({
    lat: filterDataVehicle.latitude,
    lon: filterDataVehicle.longitude,
  });
  const vehicleInfo = [
    { label: "Biển số:", value: filterDataVehicle?.vehicle_name },
    { label: "Tên hiển thị:", value: filterDataVehicle?.vehicle_name },
    { label: "IMEI:", value: filterDataVehicle?.imei },
    {
      label: "Loại PT:",
      value: (
        <Text
          ellipsis={{
            tooltip: filterDataVehicle?.vehicle_type_name,
          }}
        >
          {filterDataVehicle?.vehicle_type_name}
        </Text>
      ),
    },
    { label: "Tốc độ:", value: `${filterDataVehicle?.speed} km/h` },
    {
      label: "Tốc độ giới hạn:",
      value: `${filterDataVehicle?.max_speed} km/h`,
    },
    { label: "Địa chỉ:", value: address?.display_name || "" },
    {
      label: "Toạ độ:",
      value: (
        <Text copyable underline>
          <Link
            to={`https://www.google.com/maps/search/?api=1&query=${filterDataVehicle?.latitude},${filterDataVehicle?.longitude}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-[13px]"
          >
            {filterDataVehicle?.latitude},{filterDataVehicle?.longitude}
          </Link>
        </Text>
      ),
    },
    {
      label: "KM/ngày:",
      value: `${
        filterDataVehicle?.distance
          ? (filterDataVehicle.distance / 1000).toFixed(2)
          : "0"
      } km`,
    },
  ];

  return (
    <div className="border border-gray-300 p-1 flex flex-col gap-[2px]">
      {vehicleInfo.map(({ label, value }, index) => (
        <div className="text-[13px] flex gap-1" key={index}>
          <span className="font-bold flex-shrink-0">{label}</span> {value}
        </div>
      ))}
    </div>
  );
};

export default DetailRoad;
