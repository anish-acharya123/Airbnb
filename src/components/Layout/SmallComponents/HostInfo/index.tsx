import { Icon } from "@iconify/react/dist/iconify.js";
import { useEachDetailsContext } from "../../../../context/EachDetailsContext";

const HostInfo = () => {
  const { specificItem } = useEachDetailsContext();
  const Info = [
    {
      id: 1,
      icon: "qlementine-icons:location-16",
      title: "Greate Location",
      des: " Guests who stayed here in the past year loved the location.",
    },
    {
      id: 2,
      icon: "hugeicons:pin-location-01",
      title: "Pasang is a Superhost",
      des: "Superhosts are experienced, highly rated Hosts.",
    },
    {
      id: 3,
      icon: "mingcute:foot-line",
      title: "Furry friends welcome",
      des: "SBring your pets along for the stay.",
    },
  ];
  return (
    <div className="py-8 border-b-2 ">
      <ul
        className="space-y-5
        "
      >
        {Info.map((item) => (
          <li className="flex items-center" key={item.id}>
            <span className="h-10 w-10  flex items-center justify-center">
              <Icon icon={item.icon} className="text-2xl" />
            </span>
            <p className="flex flex-col  ml-6">
              <span className="font-medium ">
                {item.id !== 2
                  ? item.title
                  : `${specificItem?.host.name} is Superhost.`}
              </span>
              <span className="text-sm opacity-80">{item.des}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HostInfo;
