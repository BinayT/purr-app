import {PET, DONTPET, SKIP, RESET_USERSTATS} from '../constants/userConstants'

const initialState = {
    dontPet: 0,
    skip: 0,
    pet: 0
}

export const userStatsReducer = (state=initialState, action) =>{
    switch(action.type){
        case PET:
            return {...state, pet : state.pet + 1}
        case DONTPET:
            return {...state, dontPet : state.dontPet + 1}
        case SKIP:
            return {...state, skip : state.skip + 1}
        case RESET_USERSTATS:
            return initialState
        default:
            return state;
    }
}