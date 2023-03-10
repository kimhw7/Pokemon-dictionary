import React from "react";
import request from "./api/instance";

const App = () => {
  request.get("pokemon?limit=20&offset=0").then((res) => console.log(res));
  return <div className="App"></div>;
};

export default App;
