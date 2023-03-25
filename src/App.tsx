import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Reset } from "styled-reset";
import Pokemon from "./page/Pokemon";
import PokemonDetail from "./page/PokemonDetail";

const router = createBrowserRouter([
  { path: "/", element: <Pokemon /> },
  { path: "/:name", element: <PokemonDetail /> },
]);
const App = () => {
  return (
    <>
      <Reset />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
