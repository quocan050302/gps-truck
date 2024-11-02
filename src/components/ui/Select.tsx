import { Select as AntdSelect } from "antd";
import { useState, useEffect } from "react";

interface OptionType {
  value: string | undefined;
  label: string;
}

interface SelectProps {
  options: OptionType[];
  onChange: (value: string) => void;
  placeholder?: string;
  defaultValue?: string;
  enableFiltering?: boolean;
}

const Select = ({
  options,
  onChange,
  placeholder = "Select an option",
  defaultValue,
  enableFiltering = true,
}: SelectProps) => {
  const [filteredOptions, setFilteredOptions] = useState<OptionType[]>(options);

  useEffect(() => {
    setFilteredOptions(options);
  }, [options]);

  const onSearch = (searchText: string) => {
    if (enableFiltering) {
      const filtered = options.filter(({ label }) =>
        label.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredOptions(filtered);
    }
  };

  return (
    <AntdSelect
      showSearch={enableFiltering}
      placeholder={placeholder}
      defaultValue={defaultValue}
      optionFilterProp="label"
      onChange={onChange}
      onSearch={onSearch}
      className="w-full"
      options={filteredOptions}
    />
  );
};

export default Select;
