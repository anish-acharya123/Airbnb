import { useEachDetailsContext } from "../../../../context/EachDetailsContext";
import Button from "../../../UI/Button";
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
        <h1 className="text-3xl -tracking-wide font-semibold ">
          {specificItem?.title}
        </h1>
      )}
      <div className="flex  gap-2 font-semibold text-[0.95rem]">
        <Button
          className="flex justify-center items-center gap-1 p-2 rounded-lg hover:bg-slate-100"
          icon="fluent:share-ios-20-regular"
          iconClass="text-xl"
          label="Share"
          labelClass="underline"
        />
        <Button
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
