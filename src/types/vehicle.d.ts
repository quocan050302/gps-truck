interface IVehicle extends InfoTableVehicle {
  vehicle_name: string;
  latitude: number;
  longitude: number;
  speed: number;
  rotation: number;
  name: string;
  status: number;
  device_id?: number;
  vehicle_type_name?: string | undefined;
  name_driver?: string;
  phone_driver?: number;
  imei?: string;
}

interface InfoTableVehicle {
  key?: string;
  total_stop_time?: number;
  total_run_time?: number;
  max_speed?: number;
  time?: number;
  fuel_percent?: number;
  temp?: number;
  distance?: number;
  address_driver?: number;
  signal_quality?: number;
  license_number?: number;
  running_time?: number;
}

interface IvehicleRoute {
  latitude: number; // latitude
  longitude: number; // longitude
  speed: number; // vehicle speed
  rotation: number; // vehicle direction
  status: number; // 0: offline, 1: lost gps, 2: stopping, 3: running
}
