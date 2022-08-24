import {combineReducers} from 'redux';

// reducer import
import customizationReducer from './customizationReducer';

// ==============================|| COMBINE REDUCER ||============================== //

export const initialState = {
    scrollTarget: '',
};

const scrollReducer = (state: any = initialState, action: any) => {
    state.scrollTarget = action.type === 'testAction' ? action.location : '';
    return state;
}


const reducer = combineReducers({
    customization: customizationReducer,
    scrollReducer
});

export default reducer;
