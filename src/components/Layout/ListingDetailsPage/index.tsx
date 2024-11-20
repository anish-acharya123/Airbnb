import { Container } from "../../Wrappers/Container";
import BookingSummarySection from "../SmallComponents/BookingSummarySection";
import ListingInfoSection from "../SmallComponents/ListingInfoSection";

const ListingDetailsPage = () => {
  return (
    <Container>
      <ListingInfoSection />
      <BookingSummarySection />
    </Container>
  );
};

export default ListingDetailsPage;
