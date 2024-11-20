import { Icon } from "@iconify/react/dist/iconify.js";

const BedDetails = () => {
  return (
    <div className="py-8  border-b-2 space-y-6">
      <p className="text-xl font-medium">Where you’ll sleep</p>
      <div className="flex  gap-4 ">
        <div className="p-6 border-2  rounded-md space-y-6">
          <figure>
            <Icon icon="hugeicons:bed-double" className="text-2xl" />
          </figure>
          <div className="space-y-2">
            <p className="font-medium">Bedroom 1</p>
            <p className="text-sm">1 double bed</p>
          </div>
        </div>
        <div className="p-6 border-2  rounded-md space-y-6">
          <figure>
            <Icon icon="hugeicons:bed-double" className="text-2xl" />
          </figure>
          <div className="space-y-2">
            <p className="font-medium">Bedroom 1</p>
            <p className="text-sm">1 double bed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BedDetails;
