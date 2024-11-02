import { DatePicker, Space } from "antd";
import { Dayjs } from "dayjs";
import { useState } from "react";

const { RangePicker } = DatePicker;

interface DateRange {
  startDate: number | null;
  endDate: number | null;
}

interface DateTimePickerProps {
  onDateRangeChange: (range: DateRange) => void;
}

const DateTimePicker = ({ onDateRangeChange }: DateTimePickerProps) => {
  const [selectedDates, setSelectedDates] = useState<
    [Dayjs | null, Dayjs | null]
  >([null, null]);

  const onOk = (value: [Dayjs | null, Dayjs | null]) => {
    if (value && value[0] && value[1]) {
      const startDate = value[0].unix();
      const endDate = value[1].unix();
      onDateRangeChange({ startDate, endDate });
      setSelectedDates(value);
    }
  };

  const handleChange = (dates: [Dayjs | null, Dayjs | null]) => {
    setSelectedDates(dates);
    if (dates && dates[0] && dates[1]) {
      const startDate = dates[0].unix();
      const endDate = dates[1].unix();

      onDateRangeChange({ startDate, endDate });
    }
  };

  return (
    <div>
      <Space direction="vertical" size={12}>
        <RangePicker
          showTime={{ format: "HH:mm" }}
          format="YYYY-MM-DD HH:mm"
          value={selectedDates}
          onOk={onOk}
          onChange={handleChange}
          onCalendarChange={handleChange}
        />
      </Space>
    </div>
  );
};

export default DateTimePicker;
