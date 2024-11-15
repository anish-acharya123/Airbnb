import React from "react";

const Cardcontainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid  lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:gap-8 gap-3 ">
      {children}
    </div>
  );
};

export default Cardcontainer;
