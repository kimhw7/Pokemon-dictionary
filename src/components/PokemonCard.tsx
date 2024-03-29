import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { getPokeData } from "../api/pokeMain";
import PokeType from "./PokeType";
import type { IPokemon } from "../type/pokemon";
import type { CardData } from "../type/pokemon";
import type { SpeciesData } from "../type/pokemon";

const PokemonCard = ({ pokeData }: { pokeData: IPokemon }) => {
  const [cardData, setCardData] = useState<CardData>();
  const [speciesData, setSprciesData] = useState<SpeciesData>();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchPokeData = async () => {
      const defaultData = await getPokeData(pokeData.url);
      setCardData(defaultData.data);
      const speciesData = await getPokeData(defaultData.data.species.url);
      setSprciesData(speciesData.data);
    };
    fetchPokeData();
  }, []);

  return (
    // 페이지 이동
    <CardWrapper onClick={() => navigate(`/${cardData?.name}`)}>
      <img className="pokeImg" src={cardData?.sprites.front_default} />
      {/* <img src={cardData?.sprites.back_default} /> */}
      <InfoWrapper>
        <span>{`No.${cardData?.id}`}</span>
        <span>{speciesData?.names[2].name}</span>
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
  width: 20%;
  :hover {
    cursor: pointer;
  }
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
