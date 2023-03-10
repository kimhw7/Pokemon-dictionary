import { configureStore } from "@reduxjs/toolkit";
import pokeSlice from "../RTKslice/pokeSlice";

const store = configureStore({
  reducer: {
    poketmon: pokeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
