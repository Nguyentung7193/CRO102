import axios from "axios";
import { AppDispatch } from '../../../../demo/sl5/redux/store/store';

const API_URL = 'http:10.0.2.2:3000/Character';
export const getListCharacter = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get(API_URL);
    dispatch(setCharater(response.data));
  } catch (error) {
    console.error('Error fetching characters:', error);
  }
};

export const addCharacter = (character: Charater) => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.post(API_URL, character);
    dispatch(addCharater(response.data));
  } catch (error) {
    console.error('Error adding character:', error);
  }
};

export const updateCharacterAction = (character: Charater) => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.put(`${API_URL}/${character.id}`, character);
    dispatch(updateCharater(response.data));
  } catch (error) {
    console.error('Error updating character:', error);
  }
};

export const deleteCharacterAction = (id: string) => async (dispatch: AppDispatch) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    dispatch(deleteCharater(id));
  } catch (error) {
    console.error('Error deleting character:', error);
  }
};

import { Charater, addCharater, setCharater, updateCharater, deleteCharater } from '../reduces/charaterReducer';