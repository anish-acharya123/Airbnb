import { ContainerProps } from "./index.types";

const MaxwidthContainer = ({ children }: ContainerProps) => {
  return <div className="max-w-[1770px] px-4  w-full mx-auto">{children}</div>;
};

export default MaxwidthContainer;
