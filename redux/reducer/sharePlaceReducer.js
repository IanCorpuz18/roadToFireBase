import { ADD_PLACE } from '../actions/actionTypes';

initialState = {
    placeName: null
}

export default reducer = (state = initialState, action) => {
    switch(action.type){

        case ADD_PLACE:
        console.log(action.placeName)
        return{
            ...state,
            placeName: action.placeName
        }
        default:
        return state;
    }


}