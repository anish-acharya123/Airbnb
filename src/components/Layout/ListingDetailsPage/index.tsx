import BookingSummarySection from "../SmallComponents/BookingSummarySection";
import ListingInfoSection from "../SmallComponents/ListingInfoSection";

const ListingDetailsPage = () => {
  return (
    <div className="flex justify-between">
      <ListingInfoSection />
      <BookingSummarySection />
    </div>
  );
};

export default ListingDetailsPage;
