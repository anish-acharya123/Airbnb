import { useQuery } from "@tanstack/react-query";

const fetchHotels = async <TData>(api: TData[]): Promise<TData[]> => {
  return Promise.resolve(api);
};
export const useCustomQuery = <TData>(querykey: string[], url: TData[]) => {
  return useQuery<TData[]>({
    queryKey: querykey,
    queryFn: () => fetchHotels(url),
  });
};
