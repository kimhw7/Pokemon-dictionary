import axios from "axios";
import request from "./instance";
import type { AxiosResponse } from "axios";
import type { IPokemon } from "../type/pokemon";

export const getPokeList = async (limit: number, offset: number) => {
  const response: any = request.get(`pokemon?limit=${limit}&offset=${offset}`);
  return response;
};

export const getPokeData = async (url: string) => {
  const response: any = axios.get(url);
  return response;
};
