import { Table, Tooltip } from "antd";
import { createStyles } from "antd-style";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { formatDuration, formatTime } from "../utils/utils";
import { ColumnType } from "antd/es/table";
import { selectVehicle } from "../redux/features/vehicle/filterSlice";
import { forwardRef } from "react";
import { Typography } from "antd";

const { Text } = Typography;

interface StatisticProps {
  mapRef: React.RefObject<L.Map>;
}
type ModalRef = {
  open: () => void;
  close: () => void;
};
const useStyle = createStyles(({ css }) => {
  return {
    customTable: css`
      .ant-table {
        .ant-table-container {
          .ant-table-body,
          .ant-table-content {
            scrollbar-width: thin;
            scrollbar-color: #eaeaea transparent;
            scrollbar-gutter: stable;
            scroll-behavior: smooth;
          }
        }
      }
      .ant-table-thead > tr > .ant-table-cell {
        font-size: 13px;
        background-color: #f5f5f5;
        /* white-space: nowrap; */
        text-align: center;
      }
      .small-row td {
        font-size: 12px;
        text-align: center;

        /* white-space: nowrap; */
      }
    `,
    customTableCell: css`
      .ant-table-cell {
        padding: 4px 8px !important;
      }
    `,
  };
});

const columns: ColumnType[] = [
  {
    title: "",
    dataIndex: "signal_quality",
    key: "signal_quality",
    fixed: "left",
    render: (signal_quality) => {
      let label, svgPath;

      if (signal_quality === null || signal_quality === undefined) {
        label = "Mất tín hiệu";
        svgPath =
          "M16 198c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8s8-3.58 8-8v-32c0-4.42-3.58-8-8-8zm43.6-48c-4.42 0-8 3.58-8 8v64c0 4.42 3.58 8 8 8s8-3.58 8-8v-64c0-4.42-3.58-8-8-8zm47.2 8c-4.42 0-8 3.58-8 8v57.6c0 4.42 3.58 8 8 8s8-3.58 8-8v-57.6c0-4.42-3.58-8-8-8zm53.6 64c-4.42 0-8 3.58-8 8v12.8c0 4.42 3.58 8 8 8s8-3.58 8-8v-12.8c0-4.42-3.58-8-8-8zm44.8-208c-4.42 0-8 3.58-8 8v199.856l-28.8-28.8V72.048c0-4.42-3.58-8-8-8s-8 3.58-8 8v79.872l-28.8-28.8v-9.472c0-4.42-3.58-8-8-8s-8 3.58-8 8v1.664L32 72.048c-4.42-4.42-11.52-4.42-16 0-4.42 4.42-4.42 11.52 0 16l178.88 178.88c4.42 4.42 11.52 4.42 16 0s4.42-11.52 0-16V24c0-4.42-3.58-8-8-8z";
      } else if (signal_quality >= 0 && signal_quality <= 20) {
        label = "Tín hiệu kém";
        svgPath =
          "M40 180a12 12 0 0 0-12 12v8a12 12 0 0 0 24 0v-8a12 12 0 0 0-12-12Z";
      } else if (signal_quality > 20 && signal_quality <= 40) {
        label = "Tín hiệu yếu";
        svgPath =
          "M40 180a12 12 0 0 0-12 12v8a12 12 0 0 0 24 0v-8a12 12 0 0 0-12-12Z M80 140a12 12 0 0 0-12 12v48a12 12 0 0 0 24 0v-48a12 12 0 0 0-12-12Z";
      } else if (signal_quality > 40 && signal_quality <= 60) {
        label = "Tín hiệu trung bình";
        svgPath =
          "M40 180a12 12 0 0 0-12 12v8a12 12 0 0 0 24 0v-8a12 12 0 0 0-12-12Z M80 140a12 12 0 0 0-12 12v48a12 12 0 0 0 24 0v-48a12 12 0 0 0-12-12Z M120 100a12 12 0 0 0-12 12v88a12 12 0 0 0 24 0v-88a12 12 0 0 0-12-12Z";
      } else if (signal_quality > 60 && signal_quality <= 80) {
        label = "Tín hiệu tốt";
        svgPath =
          "M40 180a12 12 0 0 0-12 12v8a12 12 0 0 0 24 0v-8a12 12 0 0 0-12-12Z M80 140a12 12 0 0 0-12 12v48a12 12 0 0 0 24 0v-48a12 12 0 0 0-12-12Z M120 100a12 12 0 0 0-12 12v88a12 12 0 0 0 24 0v-88a12 12 0 0 0-12-12Z M160 60a12 12 0 0 0-12 12v128a12 12 0 0 0 24 0V72a12 12 0 0 0-12-12Z";
      } else if (signal_quality > 80 && signal_quality <= 100) {
        label = "Tín hiệu mạnh";
        svgPath =
          "M40 180a12 12 0 0 0-12 12v8a12 12 0 0 0 24 0v-8a12 12 0 0 0-12-12Z M80 140a12 12 0 0 0-12 12v48a12 12 0 0 0 24 0v-48a12 12 0 0 0-12-12Z M120 100a12 12 0 0 0-12 12v88a12 12 0 0 0 24 0v-88a12 12 0 0 0-12-12Z M160 60a12 12 0 0 0-12 12v128a12 12 0 0 0 24 0V72a12 12 0 0 0-12-12Z M200 20a12 12 0 0 0-12 12v168a12 12 0 0 0 24 0V32a12 12 0 0 0-12-12Z";
      }

      return (
        <Tooltip title={label}>
          <div className="w-4 h-4">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 256 256"
              className="size-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d={svgPath}></path>
            </svg>
          </div>
        </Tooltip>
      );
    },
  },
  {
    title: "Biển số",
    dataIndex: "vehicle_name",
    key: "vehicle_name",
  },
  {
    title: "Tốc độ | Giới hạn",
    dataIndex: "max_speed",
    key: "max_speed",
    width: 150,
  },
  {
    title: "Thời gian",
    dataIndex: "time",
    key: "time",
  },
  {
    title: "TG dừng đỗ",
    dataIndex: "total_stop_time",
    key: "total_stop_time",
    width: 150,
  },
  {
    title: "TG xe chạy",
    dataIndex: "total_run_time",
    key: "total_run_time",
    width: 150,
  },
  {
    title: "Tài xế",
    dataIndex: "name_driver",
    key: "name_driver",
    render: (name: number) => (name !== null && !!name ? name : "-"),
  },
  {
    title: "Nhiên liệu",
    dataIndex: "fuel_percent",
    key: "fuel_percent",
    render: (fuel: number) => (fuel !== null && !!fuel ? `${fuel}%` : "-"),
    width: 100,
  },
  {
    title: "Nhiệt độ",
    dataIndex: "temp",
    key: "temp",
    render: (temp: number) => (temp !== null && !!temp ? temp : "-"),
    width: 100,
  },
  {
    title: "KM/ngày",
    dataIndex: "distance",
    key: "distance",
    sorter: (a, b) => a.distance - b.distance,
    width: 100,
  },
  {
    title: "Địa chỉ tài xế",
    dataIndex: "address_driver",
    key: "address_driver",
    width: 300,
    render: (text) => (
      <Text
        className="w-[300px] text-[12px]"
        ellipsis={{
          tooltip: text,
        }}
      >
        {text}
      </Text>
    ),
  },
  {
    title: "IMEI",
    dataIndex: "imei",
    key: "imei",
  },

  {
    title: "",
    key: "operation",
    fixed: "right",
  },
];

const TableListCar = forwardRef<HTMLDivElement, StatisticProps>(
  (props, ref) => {
    const { list } = useSelector((state: RootState) => state.vehicles);
    const { styles } = useStyle();
    const dispatch = useDispatch();
    const handleRowClick = (record: IVehicle) => {
      const filterRecord = list.filter(
        (data: IVehicle) => data.imei === record.imei
      );
      if (ref) {
        (ref as React.RefObject<ModalRef>).current?.open();
      }

      if (props.mapRef.current) {
        props.mapRef.current.setView(
          [filterRecord[0].latitude, filterRecord[0].longitude],
          100,
          { animate: true, duration: 1 }
        );
      }
      dispatch(selectVehicle(record));
    };

    const dataSource = list.map((item, index) => ({
      key: index.toString(),
      signal_quality: item.signal_quality,
      vehicle_name: item.vehicle_name,
      max_speed: `${item.speed} | ${item.max_speed}`,
      time: item.time ? formatTime(item.time) : "-",
      total_stop_time: item.total_stop_time
        ? formatDuration(item?.total_stop_time)
        : "00:00:00",
      total_run_time: item?.total_run_time
        ? formatDuration(item?.total_run_time)
        : "00:00:00",
      name_driver: item.name_driver,
      fuel_percent: item.fuel_percent,
      temp: item.temp,
      distance: item.distance
        ? parseFloat((item?.distance / 1000).toFixed(2))
        : "-",
      address_driver: item.address_driver ? item.address_driver : "-",
      imei: item.imei,
    }));

    return (
      <div className="w-full fixed-header-table">
        <Table
          className={styles.customTable}
          columns={columns}
          dataSource={dataSource}
          rowClassName={() => "small-row"}
          size="middle"
          scroll={{ y: 600, scrollToFirstRowOnChange: true, x: "max-content" }}
          onRow={(record) => ({
            onClick: () => handleRowClick(record as IVehicle),
          })}
          pagination={{
            pageSize: 20,
          }}
        />
      </div>
    );
  }
);

export default TableListCar;
