import React, { createContext, useState, ReactNode } from "react";

type CurrentIndexContextType = {
  currentIndexList: number | null;
  setCurrentIndexList: React.Dispatch<React.SetStateAction<number | null>>;
};

const CurrentIndexContext = createContext<CurrentIndexContextType | undefined>(
  undefined
);

export const CurrentIndexProvider = ({ children }: { children: ReactNode }) => {
  const [currentIndexList, setCurrentIndexList] = useState<number | null>(null);

  return (
    <CurrentIndexContext.Provider
      value={{ currentIndexList, setCurrentIndexList }}
    >
      {children}
    </CurrentIndexContext.Provider>
  );
};

export default CurrentIndexContext;
