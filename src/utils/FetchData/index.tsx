import axios from "axios";

export const API = async (api: string) => {
  const response = await axios.get(api);
  return response.data;
};
