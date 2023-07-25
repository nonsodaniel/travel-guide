import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (sw, ne) => {
  const options = {
    params: {
      bl_latitude: sw.lat,
      tr_latitude: ne.lat,
      bl_longitude: sw.lng,
      tr_longitude: ne.lng,
    },
    headers: {
      "X-RapidAPI-Key": "953263a6f8msh1233fe33776c19ep14f1d1jsn3b8933b9ea9e",
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.get(URL, options);
    return response.data.data;
  } catch (error) {}
};
