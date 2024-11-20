import { Group } from "../../Navbar";
import { useEachDetailsContext } from "../../../../context/EachDetailsContext";

const HostDetails = () => {
  const { specificItem } = useEachDetailsContext();
  // console.log()
  return (
    <div className="py-4 border-b-2">
      <Group>
        <figure className="bg-gray-100 ">
          <img
            src={specificItem?.host.profileImage}
            alt={specificItem?.title}
            className="h-12 w-12 rounded-full"
          />
        </figure>

        <div className="ml-4">
          <p className="font-semibold text-[1.05rem]">
            Hosted by {specificItem?.host.name}
          </p>
          <p className="text-xm opacity-80">Superhost 7 years hosting</p>
        </div>
      </Group>
    </div>
  );
};

export default HostDetails;
