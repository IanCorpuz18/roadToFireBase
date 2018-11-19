import { ADD_PLACENAME, ADD_PLACEIMAGE, ADD_LOCATION } from './actionTypes';
export const addPlaceCaption = (placeName) => {
   return {
    type: ADD_PLACENAME,
    placeName:placeName
   } 
}
export const addPlace = (placeName) => {
  
    return dispatch => {
        dispatch(addPlaceCaption(placeName))
        const placeData = {
            name: placeName
        }
        fetch("https://tingapp-222008.firebaseio.com/places.json",{
            method: "POST",
            body: JSON.stringify(placeData)
        })
        .catch(err => console.log(err))
        .then(res => res.json())
        .then(parseRes => {
            console.log(parseRes);
        });
    } ;
}

export const addPlaceImage = (placeImage) => {
    return {
        type: ADD_PLACEIMAGE,
        placeImage: placeImage
    }
}
export const addPlaceLocation = (focusedLocation) => {
    console.log("locate")
    return {
        type: ADD_LOCATION,
        focusedLocation: focusedLocation
    }
}