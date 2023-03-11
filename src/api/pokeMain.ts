import request from "./instance";

export const getPokeData = async (limit: number, offset: number) => {
  const response = request.get(`pokemon?limit=${limit}&offset=${offset}`);
  return response;
};
