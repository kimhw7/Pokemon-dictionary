import { useEffect, useState } from "react";
import styled from "styled-components";

import PokemonCard from "../components/PokemonCard";
import { getPokeList } from "../api/pokeMain";
import type { IPokemon } from "../type/pokemon";

const Pokemon = () => {
  const [offset, setOffset] = useState<number>(0);
  const [pokeDataList, setPokeDataList] = useState<IPokemon[]>([]);

  useEffect(() => {
    const fetchPokeData = async () => {
      const pokeData = await getPokeList(20, offset);
      setPokeDataList([...pokeDataList, ...pokeData.data.results]);
    };
    fetchPokeData();
  }, [offset]);

  return (
    <>
      <PokeCardList>
        {pokeDataList.map((el, idx) => (
          <PokemonCard key={idx} pokeData={el} />
        ))}
      </PokeCardList>
      <div>
        <button onClick={() => setOffset(offset + 20)}>
          get poke`mon list
        </button>
      </div>
    </>
  );
};

const PokeCardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export default Pokemon;
