import MaxwidthContainer from "../../components/Wrappers/Maxwidth";
import { useCustomQuery } from "../../hooks/useCustomQuery";
import useCustomSearchParams from "../../hooks/useCustomSearchParams";
import api from "../../constants/RoomsJson/room.json";
import { Container } from "../../components/Wrappers/Container";
import Button from "../../components/UI/Button";
import {
  SkeletonEachTitle,
  SkeletonPhoto,
} from "../../components/UI/Skeletons";

const Eachdetails = () => {
  const { query } = useCustomSearchParams();
  const category = query("category");
  const id = query("id");

  const { data, error, isLoading, isFetching } = useCustomQuery(
    ["eachdata"],
    api
  );

  const IncomingDate = isLoading || isFetching;
  console.log(error);

  // filtering specific id element
  const filterCategory = data?.filter(
    (item) => item.category.toLowerCase() === category?.toLowerCase()
  );
  let listings;
  if (filterCategory && filterCategory?.length > 0) {
    listings = filterCategory[0]?.listings;
  }
  const specificItem = listings?.find(
    (item) => item.id === parseInt(id ?? "1")
  );
  console.log(specificItem);

  return (
    <div className="py-5">
      <MaxwidthContainer>
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
        <div className="py-5">
          <figure className="grid grid-cols-4 gap-2 rounded-xl  overflow-hidden grid-rows-[250px_250px]">
            {IncomingDate ? (
              <SkeletonPhoto className="row-span-2 col-span-2  " />
            ) : (
              <img
                src={specificItem?.image}
                alt={specificItem?.title}
                className="row-span-2 col-span-2 h-full"
              />
            )}
            {Array(4).fill(
              <>
                {IncomingDate ? (
                  <SkeletonPhoto className="" />
                ) : (
                  <img
                    src={specificItem?.image}
                    alt={specificItem?.title}
                    className="h-full"
                  />
                )}
              </>
            )}
          </figure>
        </div>
      </MaxwidthContainer>
    </div>
  );
};

export default Eachdetails;
