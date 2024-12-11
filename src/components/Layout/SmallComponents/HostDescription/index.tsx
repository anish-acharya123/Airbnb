import Btn from "../../../UI/Btn";

const HostDescription = () => {
  return (
    <div className="py-8  border-b-2 space-y-6">
      <p>
        Come experience this unique cabin, built entirely of natural and
        recycled materials.
      </p>
      <p>
        Ideal for a Himalayan retreat experience or trekking to Sandakphu, the
        house <br /> is located directly below Samten monastery Rimbick, in the
        district of Darjeeling, state of West Bengal ....
      </p>
      <Btn
        label="Show more"
        className="flex flex-row-reverse items-center justify-center font-medium"
        labelClass="underline"
        icon="iconamoon:arrow-right-2-light"
        iconClass="text-xl"
      />
    </div>
  );
};
export default HostDescription;
