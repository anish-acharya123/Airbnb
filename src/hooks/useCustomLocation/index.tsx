import { useLocation } from "react-router-dom";
const useCustomLocation = () => {
  let location = useLocation();
  const Exactpath = location.pathname;
  return Exactpath;
};

export default useCustomLocation;
