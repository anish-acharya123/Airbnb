import BedDetails from "../BedDetails";
import HostDescription from "../HostDescription";
import HostDetails from "../HostDetails";
import HostInfo from "../HostInfo";
import ListingHeader from "../ListingHeader";

const ListingInfoSection = () => {
  return (
    <div className="w-4/6">
      <ListingHeader />
      <HostDetails />
      <HostInfo />
      <HostDescription />
      <BedDetails />
    </div>
  );
};

export default ListingInfoSection;
