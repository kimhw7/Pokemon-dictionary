import { useEffect, useState } from "react";
import { getPokeData } from "../api/pokeMain";
import type { IPokemon } from "../type/pokemon";
const PokemonCard = ({ pokeData }: { pokeData: IPokemon }) => {
  const [cardData, setCardData] = useState<any>();
  useEffect(() => {
    const fetchPokeData = async () => {
      const data = await getPokeData(pokeData.url);
      console.log(data.data);
      console.log(pokeData.name);
      setCardData(data.data);
    };
    fetchPokeData();
  }, []);
  return (
    <div>
      <img src={cardData?.sprites.front_default} />
      {/* <img src={cardData?.sprites.back_default} /> */}
    </div>
  );
};

export default PokemonCard;
