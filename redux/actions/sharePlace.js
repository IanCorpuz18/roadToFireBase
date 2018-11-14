import { ADD_PLACENAME, ADD_PLACEIMAGE, ADD_LOCATION } from './actionTypes';

export const addPlace = (placeName) => {
    console.log("action this")
    return{
        type: ADD_PLACENAME,
        placeName: placeName
    }
}

export const addPlaceImage = (placeImage) => {
    return {
        type: ADD_PLACEIMAGE,
        placeImage: placeImage
    }
}
export const addPlaceLocation = (focusedLocation) => {
    return {
        type: ADD_LOCATION,
        focusedLocation: focusedLocation
    }
}