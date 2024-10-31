import { DoubleRightOutlined } from "@ant-design/icons";
import DetailRoad from "./DetailRoad";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import DetailDriver from "./DetailDriver";
import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useMemo,
  useCallback,
} from "react";

type ModalRef = {
  open: () => void;
  close: () => void;
};

const ModalDetailCar = forwardRef<ModalRef>((_, ref) => {
  const selectedVehicle = useSelector(
    (state: RootState) => state.filterVehicles.selectedVehicle
  ) as IVehicle | null;

  const list = useSelector((state: RootState) => state.vehicles.list);
  const modalRef = useRef<HTMLDivElement>(null);

  const filterDataVehicle = useMemo(() => {
    if (selectedVehicle) {
      const filteredData = list.filter(
        (data) => data.vehicle_name === selectedVehicle.vehicle_name
      );
      return filteredData.length > 0 ? filteredData : null;
    }
    return null;
  }, [selectedVehicle, list]);

  const open = useCallback(() => {
    if (modalRef.current) {
      modalRef.current.style.transform = "translateX(0)";
    }
  }, []);

  const close = useCallback(() => {
    if (modalRef.current) {
      modalRef.current.style.transform = "translateX(120%)";
    }
  }, []);

  useImperativeHandle(ref, () => ({ open, close }), [open, close]);
  console.log("selectedVehicle", selectedVehicle);
  return (
    <div className="">
      <div
        onClick={() => (ref as React.RefObject<ModalRef>).current?.open()}
        className="absolute flex justify-center items-center p-1 top-2 right-2 bg-dark-bg w-[26px] cursor-pointer rounded-sm z-[998]"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 256 256"
          className="size-full w-6 text-center"
          color="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z"
            opacity="0.2"
          ></path>
          <path d="M144,176a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176Zm88-48A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128ZM124,96a12,12,0,1,0-12-12A12,12,0,0,0,124,96Z"></path>
        </svg>
      </div>
      <div
        ref={modalRef}
        className="w-[320px] transition-all duration-200 flex flex-col bg-white absolute top-2 right-2 shadow opacity-100 z-[999]"
      >
        <div className="flex bg-dark-bg items-center justify-between text-white py-[5px] px-2">
          <div className="text-[13px] font-medium">
            {selectedVehicle
              ? selectedVehicle.vehicle_name
              : "No device picked"}
          </div>
          <DoubleRightOutlined
            onClick={() => (ref as React.RefObject<ModalRef>).current?.close()}
            className="cursor-pointer"
          />
        </div>
        {filterDataVehicle ? (
          <div>
            <div className="p-2 text-left">
              <DetailRoad filterDataVehicle={filterDataVehicle[0]} />
            </div>
            <div className="p-2 text-left">
              <DetailDriver filterDataVehicle={filterDataVehicle[0]} />
            </div>
          </div>
        ) : (
          <div className="px-4 py-4 flex items-center justify-center h-[200px]">
            <div className="text-[13px]">
              Chọn một phương tiện để xem thông tin
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

export default ModalDetailCar;
