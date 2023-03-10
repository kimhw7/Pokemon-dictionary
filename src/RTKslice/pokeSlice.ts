import { createSlice } from "@reduxjs/toolkit";
import type { IPoketmon } from "../type/poketmon";

interface IinitialState {
  poketmons: IPoketmon[];
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
