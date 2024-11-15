import { ContainerProps } from "./index.types";

const MaxwidthContainer = ({ children }: ContainerProps) => {
  return <div className="max-w-[1770px] px-6  w-full mx-auto">{children}</div>;
};

export default MaxwidthContainer;
