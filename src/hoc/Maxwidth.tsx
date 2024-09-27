import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Maxwidth = (WrappedComponent: any) => {
  return function EnhanceComponet(props: any) {
    const [isMinimize, setIsMinimize] = useState<boolean | null>(false);
    const location = useLocation();

    useEffect(() => {
      if (location.pathname.includes("/rooms")) {
        setIsMinimize(true);
      } else {
        setIsMinimize(false);
      }
    }, [location.pathname]);

    console.log(isMinimize);
    return (
      <section className="flex justify-center items-center">
        <div
          className={` ${
            isMinimize ? "max-w-[1300px]" : "max-w-[1800px]"
          }   w-full px-6 `}
        >
          <WrappedComponent {...props} />
        </div>
      </section>
    );
  };
};

export default Maxwidth;
