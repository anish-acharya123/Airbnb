import type { IconifyIcon } from "@iconify/react";

export type BtnProps = {
  label?: string;
  variant?: "";
  type?: "clicked" | "submit";
  className?: string;
  iconClass?: string;
  labelClass?: string;
  icon?: IconifyIcon | string;
  onclick?: () => void;
};
