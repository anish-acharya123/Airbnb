import { SkeletonPhoto } from "../../../UI/Skeletons";
import {  useEachDetailsContext } from "../../../../context/EachDetailsContext";

const EachImageGallery = () => {
 const { specificItem, isLoading, isFetching } = useEachDetailsContext();
  const IncomingDate = isLoading || isFetching;
  return (
    <div className="py-5">
      <figure className="grid grid-cols-4 gap-2 rounded-xl  overflow-hidden grid-rows-[250px_250px]">
        {IncomingDate ? (
          <SkeletonPhoto className="row-span-2 col-span-2  " />
        ) : (
          <a href="#" className="row-span-2 col-span-2 h-full cursor-pointer">
            <figure className="h-full">
              <img
                src={specificItem?.image}
                alt={specificItem?.title}
                className="h-full"
              />
            </figure>
          </a>
        )}
        {Array(4).fill(
          <>
            {IncomingDate ? (
              <SkeletonPhoto className="" />
            ) : (
              <a href="#">
                <figure className="h-full">
                  <img
                    src={specificItem?.image}
                    alt={specificItem?.title}
                    className="h-full"
                  />
                </figure>
              </a>
            )}
          </>
        )}
      </figure>
    </div>
  );
};

export default EachImageGallery