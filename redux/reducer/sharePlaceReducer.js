import { ADD_PLACENAME, ADD_PLACEIMAGE, ADD_LOCATION } from '../actions/actionTypes';

initialState = {
    placeName: null,
    placeImage: null,
    focusedLocation: null
}

export default reducer = (state = initialState, action) => {
    switch(action.type){

        case ADD_PLACENAME:
        console.log(action.placeName)
        return{
            ...state,
            placeName: action.placeName
        }
        case ADD_PLACEIMAGE:
        return {
            ...state,
            placeImage:action.placeImage
        }
        case ADD_LOCATION:
        return {
            ...state,
            focusedLocation: action.focusedLocation
        }
        default:
        return state;
    }


}