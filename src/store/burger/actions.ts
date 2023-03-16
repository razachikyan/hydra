import { ActionCreator } from "redux";

export type BurgerState = {
    isOpen: boolean
}
export const SET_TOGGLE_BURGER = "SET_TOGGLE_BURGER";
export type setToggleBurgerAction = {
    type: typeof SET_TOGGLE_BURGER,
    isOpen: boolean
}

export const setToggleBurger: ActionCreator<setToggleBurgerAction> = (isOpen) => ({ type: SET_TOGGLE_BURGER, isOpen })
