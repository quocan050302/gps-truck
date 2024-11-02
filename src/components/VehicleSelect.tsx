import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AppDispatch, RootState } from "../redux/store";
import { fetchVehicleData } from "../redux/api/vehicleThunks";
import Select from "./ui/Select";

interface SelectProp {
  onChange: (value: string) => void;
}

const VehicleSelect = ({ onChange }: SelectProp) => {
  const dispatch = useDispatch<AppDispatch>();
  const { list } = useSelector((state: RootState) => state.vehicles);

  useEffect(() => {
    dispatch(fetchVehicleData());
  }, [dispatch]);

  const options = list.map((item) => ({
    value: item.imei,
    label: `${item.vehicle_name} - ${item.imei}`,
  }));

  return (
    <Select
      options={options}
      onChange={onChange}
      placeholder="Select a vehicle"
    />
  );
};

export default VehicleSelect;
