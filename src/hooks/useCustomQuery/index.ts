import { useQuery } from "@tanstack/react-query";

const fetchHotels = async <TData>(api: TData[]): Promise<TData[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return Promise.resolve(api);
};

export const useCustomQuery = <TData>(querykey: string[], url: TData[]) => {
  const { data, isLoading, isFetching, error } = useQuery<TData[]>({
    queryKey: querykey,
    queryFn: () => fetchHotels(url),
  });
  return { data, isLoading, isFetching, error };
};
