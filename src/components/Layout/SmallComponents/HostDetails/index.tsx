import { Group } from "../../Navbar";
import { useEachDetailsContext } from "../../../../context/EachDetailsContext";

const HostDetails = () => {
  const { specificItem } = useEachDetailsContext();
  return (
    <div className="py-6 border-b-2">
      <Group>
        <figure className="bg-gray-100 rounded-full ">
          <img
            src={specificItem?.host.profileImage}
            alt={specificItem?.title}
            className="h-10 w-10 rounded-full"
          />
        </figure>

        <div className="ml-6">
          <p className="font-medium ">
            Hosted by {specificItem?.host.name}
          </p>
          <p className="text-sm opacity-80">
            Superhost {specificItem?.year} years hosting
          </p>
        </div>
      </Group>
    </div>
  );
};

export default HostDetails;
