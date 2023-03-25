import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getPokeData } from "../api/pokeMain";

const PokemonDetail = () => {
  const { name } = useParams();

  useEffect(() => {
    const fetchPokeData = async () => {
      const data = await getPokeData(API_URL + name);
      console.log(data.data);
    };
    fetchPokeData();
  }, []);
  return <div></div>;
};

const API_URL = "https://pokeapi.co/api/v2/pokemon/";

export default PokemonDetail;
