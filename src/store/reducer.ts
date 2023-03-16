import { Reducer } from "redux";
import { setToggleBurgerAction, SET_TOGGLE_BURGER } from "./burger/actions";
import { burgerReducer } from "./burger/reducer";

export interface RootState {
    burger: {
        isOpen: boolean
    }
}

const initialState = {
    burger: {
        isOpen: false
    }
}

export const rootReducer: Reducer<RootState, setToggleBurgerAction> = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOGGLE_BURGER:
            return {
                ...state,
                burger: burgerReducer(state.burger, action)
            }
        default:
            return state;
    }
}