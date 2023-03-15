import { useEffect, useState } from "react";

import PokemonCard from "../components/PokemonCard";
import { getPokeData } from "../api/pokeMain";
import type { IPokemon } from "../type/pokemon";

const Pokemon = () => {
  const [offset, setOffset] = useState<number>(20);
  const [pokeDataList, setPokeDataList] = useState<IPokemon[]>([]);

  useEffect(() => {
    const fetchPokeData = async () => {
      const pokeData = await getPokeData(20, offset);
      setPokeDataList([...pokeDataList, ...pokeData.data.results]);
    };
    fetchPokeData();
  }, [offset]);

  return <div></div>;
};

export default Pokemon;
