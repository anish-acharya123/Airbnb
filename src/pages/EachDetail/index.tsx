import MaxwidthContainer from "../../components/Wrappers/Maxwidth";
import { useCustomQuery } from "../../hooks/useCustomQuery";
import useCustomSearchParams from "../../hooks/useCustomSearchParams";
import api from "../../constants/RoomsJson/room.json";
import { IjsonProps } from "../Home/index.types";
import { EachDetailsProvider } from "../../context/EachDetailsContext";
import EachHeaderSection from "../../components/Layout/SmallComponents/EachHeaderSection";
import EachImageGallery from "../../components/Layout/SmallComponents/EachImageGallery";
import ListingDetailsPage from "../../components/Layout/ListingDetailsPage";

const Eachdetails = () => {
  const { query } = useCustomSearchParams();
  const category = query("category");
  const id = query("id");

  const { data, error, isLoading, isFetching } = useCustomQuery<IjsonProps>(
    ["eachdata"],
    api
  );

  console.log(error);

  // filtering specific id element
  const filterCategory = data?.filter(
    (item) => item.category.toLowerCase() === category?.toLowerCase()
  );
  let listings;
  if (filterCategory && filterCategory?.length > 0) {
    listings = filterCategory[0]?.listings;
  }
  const specificItem = listings?.find(
    (item) => item.id === parseInt(id ?? "1")
  );
  console.log(specificItem);

  return (
    <EachDetailsProvider
      specificItem={specificItem}
      isLoading={isLoading}
      isFetching={isFetching}
    >
      <div className="py-5">
        <MaxwidthContainer>
          <EachHeaderSection />
          <EachImageGallery />
          <ListingDetailsPage />
        </MaxwidthContainer>
      </div>
    </EachDetailsProvider>
  );
};

export default Eachdetails;
