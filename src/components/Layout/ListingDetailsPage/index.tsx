import { Container } from "../../Wrappers/Container";
import BookingSummarySection from "../SmallComponents/BookingSummarySection";
import ListingInfoSection from "../SmallComponents/ListingInfoSection";

const ListingDetailsPage = () => {
  return (
    <div className="flex gap-4">
      <ListingInfoSection />
      <BookingSummarySection />
    </div>
  );
};

export default ListingDetailsPage;
