// hooks/useGetAddress.ts
import { useEffect, useState } from "react";
import { fetchAddress } from "../services/address";

interface Location {
  lat: number;
  lon: number;
}

const useGetAddress = ({ lat, lon }: Location) => {
  const [address, setAddress] = useState<Address | null>(null);

  useEffect(() => {
    const getAddress = async () => {
      const fetchedAddress = await fetchAddress(lat, lon);
      setAddress(fetchedAddress);
    };

    if (lat && lon) {
      getAddress();
    }
  }, [lat, lon]);

  return address;
};

export default useGetAddress;
