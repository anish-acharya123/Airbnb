import { Skeleton } from "@mui/material";

const css = { borderRadius: "2px", bgcolor: "grey.300" };
const SkeletonHotel = ({ count }: { count: number }) => {
  console.log(count, "skeleton");
  return (
    <>
      {Array.from({ length: count }, (_, index) => (
        <div key={index} className="flex flex-col mb-4">
          <Skeleton
            variant="rectangular"
            sx={{
              ...css,
              width: "100%",
              height: {
                xs: "16rem",
                // sm: "18rem",
              },
              borderRadius: " 1rem",
            }}
          />
          <div className="flex justify-between mt-2">
            <Skeleton
              variant="text"
              sx={{
                ...css,
                width: {
                  xs: "40%",
                },
              }}
            />
            <Skeleton
              variant="text"
              sx={{
                ...css,
                width: {
                  xs: "10%",
                },
              }}
            />
          </div>
          <Skeleton
            variant="text"
            sx={{
              ...css,
              width: {
                xs: "20%",
              },
            }}
          />
          <Skeleton
            variant="text"
            sx={{
              ...css,
              width: {
                xs: "20%",
                sm: "18%",
                md: "15%",
                lg: "12%",
                xl: "10%",
              },
            }}
          />
        </div>
      ))}
    </>
  );
};

const SkeletonIcon = ({ count }: { count: number }) => {
  return (
    <>
      {Array.from({ length: count }, (_, index) => (
        <div key={index} className="py-3">
          <Skeleton
            variant="rectangular"
            sx={{
              ...css,
              width: "3rem",
              height: "2rem",
            }}
          />
          <Skeleton
            variant="text"
            sx={{
              ...css,
              width: "3rem",
            }}
          />
        </div>
        // </div>
      ))}
    </>
  );
};

const SkeletonCompany = ({ count }: { count: number }) => {
  return (
    <>
      {Array.from({ length: count }, (_, index) => (
        <div key={index} className="flex flex-col mb-4">
          <Skeleton
            variant="rectangular"
            sx={{
              ...css,
              width: "100%",
              height: "14rem",
            }}
          />
        </div>
      ))}
    </>
  );
};

export { SkeletonHotel, SkeletonIcon, SkeletonCompany };
