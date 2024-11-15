import { useState } from "react";

const Activebtn = () => {
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const handleActivebtn = (index: number) => {
    setActiveIndex(index);
  };

  return { activeIndex, handleActivebtn };
};

export default Activebtn;
