import request from "./instance";
import type { AxiosResponse } from "axios";
import type { IPokemon } from "../type/pokemon";

export const getPokeData = async (limit: number, offset: number) => {
  const response: any = request.get(`pokemon?limit=${limit}&offset=${offset}`);
  return response;
};
