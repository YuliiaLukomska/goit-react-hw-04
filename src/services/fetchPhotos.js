import axios from "axios";

const BASE_URL = "https://api.unsplash.com/";
const ACCESS_KEY = "_jRCpE_n7cgRufgoZ_I7k9BV6JOhJ9qkR0kN7wYZ3_E";

const fetchPhotos = async (query) => {
  const response = await axios.get(`${BASE_URL}search/photos`, {
    params: {
      client_id: ACCESS_KEY,
      query: query,
    },
  });

  return response;
};

export default fetchPhotos;
