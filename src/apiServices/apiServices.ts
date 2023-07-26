import axios from "axios";
import { RAPID_API_KEY } from "../utils/config";

export const getPlacesData = async (type, sw, ne) => {
  const URL = `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`;
  const options = {
    params: {
      bl_latitude: sw.lat,
      tr_latitude: ne.lat,
      bl_longitude: sw.lng,
      tr_longitude: ne.lng,
    },
    headers: {
      "X-RapidAPI-Key": RAPID_API_KEY,
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.get(URL, options);
    return response.data.data;
  } catch (error) {}
};
