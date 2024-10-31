const formatTime = (timestamp: number) => {
  if (typeof timestamp !== "number" || isNaN(timestamp)) {
    return "Invalid Date";
  }

  const date = new Date(timestamp * 1000);

  const options: Intl.DateTimeFormatOptions = {
    timeZone: "Asia/Bangkok",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };

  return new Intl.DateTimeFormat("en-GB", options)
    .format(date)
    .replace(",", "");
};

const formatDuration = (totalSeconds: number) => {
  if (totalSeconds === undefined) return "-";
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
    2,
    "0"
  );
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
};

export { formatTime, formatDuration };
