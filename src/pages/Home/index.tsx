import { IjsonProps, listingProps } from "./index.types";
import { useSearchParams } from "react-router-dom";
import { SkeletonHotel } from "../../components/UI/Skeletons";
import api from "../../constants/RoomsJson/room.json";
import MaxwidthContainer from "../../components/Wrappers/Maxwidth";
import List from "../../components/UI/List";
import Hotelsection from "../../components/UI/Hotelsection";
import Cardcontainer from "../../components/Wrappers/Cardcontainer";
import { useCallback } from "react";
import { useCustomQuery } from "../../hooks/useCustomQuery";
import useCustomNavigation from "../../hooks/useCustomNavigation";

const Hotel = () => {
  const { goTo } = useCustomNavigation();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("tab") ?? "Icons";
  const { data, error, isLoading, isFetching } = useCustomQuery<IjsonProps>(
    ["hotels"],
    api
  );
  const isDataLoading = isLoading || isFetching;
  let actualData = data?.filter(
    (item) => item.category.toLowerCase() === query?.toLowerCase()
  );

  if (actualData?.length === 0) {
    actualData = data?.filter(
      (item) => item.category.toLowerCase() === "icons"
    );
  }

  const renderItem = useCallback(
    (item: listingProps) => (
      <li key={item.id} className="space-y-1 cursor-pointer">
        <Hotelsection
          price={item.pricePerNight}
          host={item.host.name}
          rating={item.rating}
          location={item.location}
          image={item.image}
          title={item.title}
          year={item.year}
          onClick={
            () => goTo(`/details?category=${query}&id=${item.id}`)
            // window.open(`/details?query=${query}&id=${item.id}`, "_blank")
          }
        />
      </li>
    ),
    [query]
  );

  if (error) return <p>Error fetching data: {error.message}</p>;

  return (
    <div className="py-4 pb-10">
      <MaxwidthContainer>
        {!isDataLoading ? (
          <List
            items={actualData && actualData[0].listings}
            className="grid  lg:grid-cols-6  md:grid-cols-5 sm:grid-cols-3 grid-cols-2 md:gap-8 gap-3"
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
