interface props {
  text: string;
  onClick?: () => void;
  className?: string;
}

const Navbtn: React.FC<props> = ({ text, className }) => {
  return (
    <span>
      <button
        className={`py-2 px-4  rounded-full font-semibold  ${className}`}
      >
        {text}
      </button>
    </span>
  );
};

export default Navbtn;
