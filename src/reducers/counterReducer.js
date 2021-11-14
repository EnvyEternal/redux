import ACTION_TYPES from "../actions/actionsType";

const initialState = {
    value: 0,
    step: 1,
};




export default function (state = initialState, action) {
    
    switch (action.type) {
        case ACTION_TYPES.INCREMENT: return {...state, value: state.value + state.step};
        case ACTION_TYPES.DECREMENT: return {...state, value: state.value - state.step};
        default: return state;
    }
};