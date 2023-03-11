import React from "react";
import { useState, useEffect } from "react";

import { getPokeData } from "./api/pokeMain";
const App = () => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    const get = async () => {
      const pokeData = await getPokeData(20, 0);
      setData(pokeData);
    };

    get().catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    console.log(data);
  }, [data]);

  return <div></div>;
};

export default App;
