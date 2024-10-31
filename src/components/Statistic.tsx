import { useState, useRef, useEffect, useCallback, forwardRef } from "react";
import TableListCar from "./TableListCar";

interface StatisticProps {
  mapRef: React.RefObject<L.Map>;
}
const Statistic = forwardRef<HTMLDivElement, StatisticProps>((props, ref) => {
  const [width, setWidth] = useState<number>(624);
  const [isResizing, setIsResizing] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const modalRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isResizing && modalRef.current) {
        const newWidth =
          e.clientX - modalRef.current.getBoundingClientRect().left;
        if (newWidth > 300) setWidth(newWidth);
      }
    },
    [isResizing]
  );

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  const handleMouseDown = () => {
    setIsResizing(true);
  };

  useEffect(() => {
    if (isResizing) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isResizing, handleMouseMove]);

  return (
    <div className="absolute top-2 left-2 bottom-2 bg-white z-[1000] shadow-2xl">
      <div
        onClick={() => setIsOpen(true)}
        className="absolute block top-[2px] right-[-30px] bg-dark-bg w-[26px] cursor-pointer rounded-sm"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 256 256"
          color="white"
          xmlns="http://www.w3.org/2000/svg"
          className="size-full"
        >
          <path d="M216,48V96a8,8,0,0,1-16,0V67.31l-42.34,42.35a8,8,0,0,1-11.32-11.32L188.69,56H160a8,8,0,0,1,0-16h48A8,8,0,0,1,216,48ZM98.34,146.34,56,188.69V160a8,8,0,0,0-16,0v48a8,8,0,0,0,8,8H96a8,8,0,0,0,0-16H67.31l42.35-42.34a8,8,0,0,0-11.32-11.32ZM208,152a8,8,0,0,0-8,8v28.69l-42.34-42.35a8,8,0,0,0-11.32,11.32L188.69,200H160a8,8,0,0,0,0,16h48a8,8,0,0,0,8-8V160A8,8,0,0,0,208,152ZM67.31,56H96a8,8,0,0,0,0-16H48a8,8,0,0,0-8,8V96a8,8,0,0,0,16,0V67.31l42.34,42.35a8,8,0,0,0,11.32-11.32Z"></path>
        </svg>
      </div>
      {isOpen && (
        <div
          ref={modalRef}
          className="max-w-[90vw] min-h-[300px] min-w-[300px] flex relative h-full"
          style={{ width: `${width}px` }}
        >
          <div className="flex-shrink-0 w-full overflow-x-auto">
            {/* <div className="w-[100%] h-[100px] bg-red-400"></div> */}
            <TableListCar mapRef={props.mapRef} ref={ref} />
          </div>
          <div
            onClick={() => setIsOpen(!open)}
            className="absolute block top-[2px] right-[-30px] bg-dark-bg w-[26px] cursor-pointer rounded-sm"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 256 256"
              color="white"
              xmlns="http://www.w3.org/2000/svg"
              className="size-full"
            >
              <path d="M144,104V64a8,8,0,0,1,16,0V84.69l42.34-42.35a8,8,0,0,1,11.32,11.32L171.31,96H192a8,8,0,0,1,0,16H152A8,8,0,0,1,144,104Zm-40,40H64a8,8,0,0,0,0,16H84.69L42.34,202.34a8,8,0,0,0,11.32,11.32L96,171.31V192a8,8,0,0,0,16,0V152A8,8,0,0,0,104,144Zm67.31,16H192a8,8,0,0,0,0-16H152a8,8,0,0,0-8,8v40a8,8,0,0,0,16,0V171.31l42.34,42.35a8,8,0,0,0,11.32-11.32ZM104,56a8,8,0,0,0-8,8V84.69L53.66,42.34A8,8,0,0,0,42.34,53.66L84.69,96H64a8,8,0,0,0,0,16h40a8,8,0,0,0,8-8V64A8,8,0,0,0,104,56Z"></path>
            </svg>
          </div>
          <div
            onMouseDown={handleMouseDown}
            className="absolute block top-0 right-0 bg-[#efefef] w-1 h-full cursor-ew-resize"
          >
            <div className="flex h-full justify-center items-center  z-[2]">
              <div
                style={{
                  backgroundColor: "var(--theme-resize-bar)",
                  borderTopRightRadius: 4,
                  borderBottomRightRadius: 4,
                }}
                className="transition-all w-[10px] hover:w-[15px] absolute left-[4px] h-[30px] flex justify-center items-center flex-col text-root_text_gray_color hover:text-root_text_color"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 192 512"
                  height="14"
                  width="14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

export default Statistic;
