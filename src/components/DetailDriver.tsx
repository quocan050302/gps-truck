const DetailDriver = ({
  filterDataVehicle,
}: {
  filterDataVehicle: IVehicle;
}) => {
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${hours > 0 ? `${hours} giờ ` : ""}${minutes} phút ${secs} giây`;
  };
  return (
    <div className="border border-gray-300 p-1 flex flex-col gap-[2px]">
      <div className="text-[13px]">
        <span className="font-bold">Tài xế: </span>
        {filterDataVehicle?.name_driver}
      </div>
      <div className="text-[13px]">
        <span className="font-bold">Số bằng lái: </span>
        {filterDataVehicle?.license_number}
      </div>
      <div className="text-[13px]">
        <span className="font-bold">SĐT Tài xế: </span>
        {filterDataVehicle?.phone_driver}
      </div>
      <div className="text-[13px]">
        <span className="font-bold">Lái xe liên tục: </span>
        {filterDataVehicle?.running_time
          ? formatTime(filterDataVehicle?.running_time)
          : "00:00:00"}
      </div>
      <div className="text-[13px]">
        <span className="font-bold">Tổng lái xe/Ngày: </span>
        {filterDataVehicle?.total_run_time
          ? formatTime(filterDataVehicle?.total_run_time)
          : "00:00:00"}
      </div>
    </div>
  );
};

export default DetailDriver;
