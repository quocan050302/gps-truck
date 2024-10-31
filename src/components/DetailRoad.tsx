import { Typography } from "antd";
import useGetAddress from "../hooks/useGetAddress";
import { Link } from "react-router-dom";

const { Text } = Typography;

const DetailRoad = ({ filterDataVehicle }: { filterDataVehicle: IVehicle }) => {
  const address = useGetAddress({
    lat: filterDataVehicle.latitude,
    lon: filterDataVehicle.longitude,
  });

  return (
    <div className="border border-gray-300 p-1 flex flex-col gap-[2px]">
      <div className="text-[13px]">
        <span className="font-bold">Biển số: </span>
        {filterDataVehicle?.vehicle_name}
      </div>
      <div className="text-[13px]">
        <span className="font-bold">Tên hiển thị: </span>
        {filterDataVehicle?.vehicle_name}
      </div>
      <div className="text-[13px]">
        <span className="font-bold">IMEI: </span>
        {filterDataVehicle?.imei}
      </div>
      <div className="text-[13px] flex gap-1 items-center">
        <span className="font-bold flex-shrink-0">Loại PT: </span>
        <Text
          ellipsis={{
            tooltip: filterDataVehicle?.vehicle_type_name,
          }}
        >
          {filterDataVehicle?.vehicle_type_name}
        </Text>
      </div>

      <div className="text-[13px]">
        <span className="font-bold">Tốc độ: </span>
        {filterDataVehicle?.speed} km/h
      </div>
      <div className="text-[13px]">
        <span className="font-bold">Tốc độ giới hạn: </span>
        {filterDataVehicle?.max_speed} km/h
      </div>
      <div className="text-[13px]">
        <span className="font-bold">Địa chỉ: </span>
        {address?.display_name ? address?.display_name : ""}
      </div>
      <div className="text-[13px] flex gap-1 items-center">
        <span className="font-bold">Toạ độ: </span>
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
      </div>
      <div className="text-[13px]">
        <span className="font-bold">KM/ngày: </span>
        {filterDataVehicle?.distance
          ? (filterDataVehicle?.distance / 1000).toFixed(2)
          : "0"}{" "}
        km
      </div>
    </div>
  );
};

export default DetailRoad;
