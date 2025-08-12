import {createSlice} from '@reduxjs/toolkit';

 export interface Charater {
  id: number;
  name: string;
  image: string;
  des: string;
  land: string;
};
interface CharaterState {
  listCharater: Charater[];
};
const initialState: CharaterState = {
  listCharater: [],
};
const CharaterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {
        setCharater: (state, action) => {
            state.listCharater = action.payload;
        },
        addCharater: (state, action) => {
          state.listCharater.push(action.payload);
        },
        updateCharater: (state, action) => {
          const index = state.listCharater.findIndex(character => character.id === action.payload.id);
          if (index !== -1) {
            state.listCharater[index] = action.payload;
          }
        },
        deleteCharater: (state, action) => {
          state.listCharater = state.listCharater.filter(character => character.id !== action.payload);
        },
    }
});
export const {setCharater, addCharater, updateCharater, deleteCharater} = CharaterSlice.actions;
export default CharaterSlice.reducer;