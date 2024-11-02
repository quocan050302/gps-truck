import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchVehicleData } from "../redux/api/vehicleThunks";

const VehicleRefresher = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [countdown, setCountdown] = useState<number>(10);
  const { isLoading } = useSelector((state: RootState) => state.vehicles);

  useEffect(() => {
    const fetchData = () => {
      dispatch(fetchVehicleData());
      setCountdown(10);
    };

    fetchData();

    const intervalId = setInterval(() => {
      fetchData();
    }, 10000);

    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev > 1) {
          return prev - 1;
        } else {
          return 10;
        }
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
      clearInterval(countdownInterval);
    };
  }, [dispatch]);

  return (
    <>
      {!isLoading && (
        <div className="p-4 fixed top-2 left-[50%] translate-x-[-50%] text-black rounded-sm bg-[#f6ffed] z-[1000]">
          Data will refresh in{" "}
          <span className="font-semibold">{countdown}</span> seconds!
        </div>
      )}
      {isLoading && (
        <div className="p-4 fixed top-2 left-[50%] translate-x-[-50%] text-black rounded-sm bg-[#f6ffed] z-[1000]">
          Loading data...
        </div>
      )}
    </>
  );
};

export default VehicleRefresher;
