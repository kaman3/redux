const initialState = {
    age:2018,
    photos:[]
}

export function pageReducer(state = initialState, action){
    switch(action.type){
        case 'SET_YEAR':
            return { ...state, age:action.playload }

        default:
            return state;
    }
}