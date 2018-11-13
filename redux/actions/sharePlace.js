import { ADD_PLACE } from './actionTypes';

export const addPlace = (placeName) => {
    console.log("action this")
    return{
        type: ADD_PLACE,
        placeName: placeName
    }
}