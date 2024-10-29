import { Select as AntdSelect } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect, useState } from "react";
import { fetchVehicleData } from "../../redux/api/vehicleThunks";

interface OptionType {
  value: string | undefined;
  label: string;
}

interface SelectProps {
  onChange: (value: string) => void;
}

const Select = ({ onChange }: SelectProps) => {
  const { list } = useSelector((state: RootState) => state.vehicles);
  const dispatch = useDispatch();

  const [filteredOptions, setFilteredOptions] = useState<OptionType[]>([]);

  useEffect(() => {
    dispatch(fetchVehicleData());
  }, [dispatch]);

  const options = list.map((item) => ({
    value: item.imei,
    label: `${item.vehicle_name} - ${item.imei}`,
  }));

  const onSearch = (searchText: string) => {
    const filtered = options.filter(({ label }) =>
      label.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  return (
    <AntdSelect
      showSearch
      placeholder="Select a vehicle"
      optionFilterProp="label"
      onChange={onChange}
      onSearch={onSearch}
      className="w-full"
      options={filteredOptions.length > 0 ? filteredOptions : options}
    />
  );
};

export default Select;
