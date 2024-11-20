import { createContext, useContext } from "react";
import { listingProps } from "../../pages/Home/index.types";

type EachDetailsContextProps = {
  specificItem: listingProps | undefined;
  isLoading: boolean;
  isFetching: boolean;
};

const EachDetailsContext = createContext<EachDetailsContextProps | undefined>(
  undefined
);

export const EachDetailsProvider = ({
  specificItem,
  isLoading,
  isFetching,
  children,
}: EachDetailsContextProps & { children: React.ReactNode }) => (
  <EachDetailsContext.Provider value={{ specificItem, isLoading, isFetching }}>
    {children}
  </EachDetailsContext.Provider>
);

export const useEachDetailsContext = () => {
  const context = useContext(EachDetailsContext);
  if (!context) {
    throw new Error(
      "useEachDetailsContext must be used within EachDetailsProvider"
    );
  }
  return context;
};
