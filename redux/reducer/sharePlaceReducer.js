import { ADD_PLACENAME, ADD_PLACEIMAGE } from '../actions/actionTypes';

initialState = {
    placeName: null
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
        default:
        return state;
    }


}