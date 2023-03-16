import { Reducer } from "redux";
import { BurgerState, setToggleBurgerAction, SET_TOGGLE_BURGER } from "./actions";

export const burgerReducer: Reducer<BurgerState, setToggleBurgerAction> = (state = { isOpen: false }, action) => {
    switch (action.type) {
        case SET_TOGGLE_BURGER:
            return {
                ...state,
                isOpen: action.isOpen
            }
        default: return state;
    }
}