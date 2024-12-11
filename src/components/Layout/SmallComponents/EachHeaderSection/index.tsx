import { useEachDetailsContext } from "../../../../context/EachDetailsContext";
import Btn from "../../../UI/Btn";
import { SkeletonEachTitle } from "../../../UI/Skeletons";
import { Container } from "../../../Wrappers/Container";

const EachHeaderSection = () => {
  const { specificItem, isLoading, isFetching } = useEachDetailsContext();
  const IncomingDate = isLoading || isFetching;

  return (
    <Container>
      {IncomingDate ? (
        <SkeletonEachTitle />
      ) : (
        <h1 className="text-[1.7rem] tracking-tighter text-gray-800 antialiased font-400 ">
          {specificItem?.title}
        </h1>
      )}
      <div className="flex  gap-2  text-sm font-medium">
        <Btn
          className="flex justify-center items-center gap-1 p-2 rounded-lg hover:bg-slate-100"
          icon="fluent:share-ios-20-regular"
          iconClass="text-xl"
          label="Share"
          labelClass="underline"
        />
        <Btn
          className="flex justify-center items-center gap-1  p-2 rounded-lg hover:bg-slate-100"
          icon="solar:heart-linear"
          iconClass="text-"
          label="Save"
          labelClass="underline"
        />
      </div>
    </Container>
  );
};

export default EachHeaderSection;
