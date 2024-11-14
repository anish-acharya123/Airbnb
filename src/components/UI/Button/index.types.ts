export type BtnProps = {
  label?: string;
  variant?: "";
  type?: "clicked" | "submit";
  className?: string;
  iconClass?: string;
  labelClass?: string;
  icon?: string;
  onclick?: () => void;
};
