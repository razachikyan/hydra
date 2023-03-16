import { nanoid } from "nanoid";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToggleBurger } from "../../store/burger/actions";
import { RootState } from "../../store/reducer";
import { Close } from "../Icons/Close";
import "./burger.css";

interface IBurgerProps {
    list: Array<string>
}

export function Burger({ list }: IBurgerProps) {
    const isOpen = useSelector<RootState, boolean>(store => store.burger.isOpen);
    const dispatch = useDispatch();
    return (
        <>
            <div
                className="burger"
                onClick={(event: any) => {
                    if (event.target.className === "burger")
                        dispatch(setToggleBurger(!isOpen));
                }}>
            </div>
            {isOpen && <div>
                <Close handleClick={() => {
                    dispatch(setToggleBurger(false))
                }} />
                <ul className="burger__list">
                    {list.map(item => <li id={`#${item}`} key={nanoid()} className="burger__item">
                        {item}
                    </li>)}
                </ul>
            </div>}
        </>

    )
}