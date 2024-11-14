import { useQuery } from "@tanstack/react-query";
import { IjsonProps } from "./index.types";
import { SkeletonHotel } from "../../components/UI/Skeletons";
import api from "../../constants/RoomsJson/index.json";
import MaxwidthContainer from "../../components/Wrappers/Maxwidth";
import List from "../../components/UI/List";
import Hotelsection from "../../components/UI/Hotelsection";
import Cardcontainer from "../../components/Wrappers/Cardcontainer";
import { useCallback } from "react";

const fetchHotels = async (): Promise<IjsonProps[]> => {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  return Promise.resolve(api);
};

const Hotel = () => {
  const { data, error, isLoading, isFetching } = useQuery<IjsonProps[]>({
    queryKey: ["hotels"],
    queryFn: fetchHotels,
  });
  const isDataLoading = isLoading || isFetching;

  const renderItem = useCallback(
    (item: IjsonProps) => (
      <li key={item.id} className="space-y-1 cursor-pointer">
        <Hotelsection
          price={item.pricePerNight}
          host={item.host.name}
          rating={item.rating}
          location={item.location}
          image={item.image}
          title={item.title}
          year={item.year}
        />
      </li>
    ),
    []
  );

  if (error instanceof Error)
    return <p>Error fetching data: {error.message}</p>;

  return (
    <div className="py-4">
      <MaxwidthContainer>
        {!isDataLoading ? (
          <List
            items={data}
            className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:gap-8 gap-3"
            renderItem={renderItem}
          />
        ) : (
          <Cardcontainer>
            <SkeletonHotel count={12} />
          </Cardcontainer>
        )}
      </MaxwidthContainer>
    </div>
  );
};

export default Hotel;
