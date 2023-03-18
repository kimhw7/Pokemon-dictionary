import { useEffect, useState } from "react";
import styled from "styled-components";
import { getPokeData } from "../api/pokeMain";
import PokeType from "./PokeType";
import type { IPokemon } from "../type/pokemon";
import type { CardData } from "../type/pokemon";

const PokemonCard = ({ pokeData }: { pokeData: IPokemon }) => {
  const [cardData, setCardData] = useState<CardData>();

  useEffect(() => {
    const fetchPokeData = async () => {
      const data = await getPokeData(pokeData.url);
      console.log(data.data);
      setCardData(data.data);
    };
    fetchPokeData();
  }, []);

  return (
    <CardWrapper>
      <img className="pokeImg" src={cardData?.sprites.front_default} />
      {/* <img src={cardData?.sprites.back_default} /> */}
      <InfoWrapper>
        <span>{`No.${cardData?.id}`}</span>
        <span>{pokeData.name}</span>
      </InfoWrapper>
      <TypeWrapper>
        {cardData?.types.map((el) => (
          <PokeType key={el.slot} type={el.type.name}></PokeType>
        ))}
      </TypeWrapper>
    </CardWrapper>
  );
};

const CardWrapper = styled.li`
  width: 25%;
  .pokeImg {
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    width: 100%;
    height: auto;
  }
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const TypeWrapper = styled.ul`
  width: 100%;
  display: flex;
`;

export default PokemonCard;
