import styled from "styled-components";

import getColorByType from "../util/colorByType";

interface Props {
  type: string;
}

const PokeType = ({ type }: Props) => {
  return (
    <TypeWrapper style={{ backgroundColor: getColorByType(type) }}>
      {type}
    </TypeWrapper>
  );
};

const TypeWrapper = styled.li`
  width: 50%;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-weight: bold;
  padding: 4px;
  margin: 0 1px;
`;

export default PokeType;
