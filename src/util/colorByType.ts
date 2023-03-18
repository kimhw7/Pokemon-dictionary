const getColorByType = (type: string) => {
  let color = "";
  switch (type) {
    case "normal":
      color = "#949495";
      break;
    case "fighting":
      color = "#e09c40";
      break;
    case "flying":
      color = "#a2c3e7";
      break;
    case "poison":
      color = "#735198";
      break;
    case "ground":
      color = "#9c7743";
      break;
    case "rock":
      color = "#bfb889";
      break;
    case "bug":
      color = "#9fa244";
      break;
    case "ghost":
      color = "#684870";
      break;
    case "steel":
      color = "#69a9c7";
      break;
    case "fire":
      color = "#e56c3e";
      break;
    case "water":
      color = "#5185c5";
      break;
    case "grass":
      color = "#66a945";
      break;
    case "electric":
      color = "#f6d851";
      break;
    case "psychic":
      color = "#dd6b7b";
      break;
    case "ice":
      color = "#6dc8eb";
      break;
    case "dragon":
      color = "#535ca8";
      break;
    case "dark":
      color = "#4c4948";
      break;
    case "fairy":
      color = "#dab4d4";
      break;
    case "unknown":
      color = "#008080";
      break;
    case "shadow":
      color = '"#484848"';
      break;

    default:
      color = "white";
      break;
  }

  return color;
};

export default getColorByType;
