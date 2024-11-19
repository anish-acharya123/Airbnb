import { ContainerProps } from "./index.types";
import useCustomLocation from "../../../hooks/useCustomLocation";

const MaxwidthContainer = ({ children }: ContainerProps) => {
  const Exactpath = useCustomLocation();
  
  return (
    <div
      className={`${
        Exactpath === "/details" ? "max-w-[1170px]" : "max-w-[1800px] "
      } px-6  w-full mx-auto`}
    >
      {children}
    </div>
  );
};

export default MaxwidthContainer;
