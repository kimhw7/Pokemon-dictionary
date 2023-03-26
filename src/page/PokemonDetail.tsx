import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getPokeData } from "../api/pokeMain";

const PokemonDetail = () => {
  const { name } = useParams();

  useEffect(() => {
    const fetchPokeData = async () => {
      const data = await getPokeData(
        "https://pokeapi.co/api/v2/pokemon-species/1/"
      );
      console.log(data.data);
    };
    fetchPokeData();
  }, []);
  return <div></div>;
};

export default PokemonDetail;
