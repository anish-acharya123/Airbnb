import { Icon } from "@iconify/react/dist/iconify.js";
import { BtnProps } from "./index.types";

const Btn = ({
  label,
  className,
  iconClass,
  labelClass,
  icon,
  onclick,
}: BtnProps) => {
  return (
    <button onClick={onclick} className={`${className}     `}>
      {icon && (
        <figure className={iconClass}>
          <Icon icon={icon} />
        </figure>
      )}
      <p className={labelClass}>{label}</p>
    </button>
  );
};
export default Btn;
