import { ReactNode } from "react";

interface props {
  text?: string;
  icon?: ReactNode;
  onClick?: () => void;
  className?: string;
  iconcss?: string;
}

const Navbtn: React.FC<props> = ({ text, icon, className, iconcss }) => {
  return (
    <span>
      <button className={`py-2   rounded-full font-semibold  ${className}`}>
        {text ? (
          <span>{text}</span>
        ) : (
          <span className={`${iconcss}`}>{icon}</span>
        )}
      </button>
    </span>
  );
};

export default Navbtn;
