import { createSlice } from "@reduxjs/toolkit";
import type { IPokemon } from "../type/pokemon";

interface IinitialState {
  poketmons: IPokemon[];
}

const initialState: IinitialState = {
  poketmons: [],
};

const pokeSlice = createSlice({
  name: "pokeSlice",
  initialState,
  reducers: {},
});

export default pokeSlice;
