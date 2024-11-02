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
  const driverInfo = [
    { label: "Tài xế:", value: filterDataVehicle?.name_driver },
    { label: "Số bằng lái:", value: filterDataVehicle?.license_number },
    { label: "SĐT Tài xế:", value: filterDataVehicle?.phone_driver },
    {
      label: "Lái xe liên tục:",
      value: filterDataVehicle?.running_time
        ? formatTime(filterDataVehicle.running_time)
        : "00:00:00",
    },
    {
      label: "Tổng lái xe/Ngày:",
      value: filterDataVehicle?.total_run_time
        ? formatTime(filterDataVehicle.total_run_time)
        : "00:00:00",
    },
  ];
  return (
    <div className="border border-gray-300 p-1 flex flex-col gap-[2px]">
      {driverInfo.map(({ label, value }, index) => (
        <div className="text-[13px]" key={index}>
          <span className="font-bold">{label}</span> {value}
        </div>
      ))}
    </div>
  );
};

export default DetailDriver;
