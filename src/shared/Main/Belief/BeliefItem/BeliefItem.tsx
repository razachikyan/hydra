import React from "react";
import { Button } from "../../../Button/Button";
import "./beliefitem.css";

interface IBeliefItemProps {
    image: string;
    title: string;
    descr: string;
    buttonName: string;
}

export function BeliefItem({ image, title, descr, buttonName }: IBeliefItemProps) {
    return (
        <>
            <div className={`${image} belief__image`}></div>
            <h5 className="beliefitem__title">
                {title}
            </h5>
            <p className="beliefitem__descr">
                {descr}
            </p>
            <Button name={buttonName} classname="belief__btn" />
        </>
    )
}