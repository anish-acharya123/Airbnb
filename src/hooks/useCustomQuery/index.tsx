import { useQuery } from "@tanstack/react-query";
import { categoryDataProps } from "../../components/Layout/CategoryNavbar/index.types";

const fetchHotels = async (api: categoryDataProps[]) => {
  return Promise.resolve(api);
};
export const useCustomQuery = (
  querykey: string[],
  url: categoryDataProps[]
) => {
  return useQuery({
    queryKey: [querykey],
    queryFn: () => fetchHotels(url),
  });
};
