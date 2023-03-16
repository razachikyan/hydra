import React from "react";
import { Arrow } from "../../../Icons/Arrow";
import "./step.css";

interface IStepProps {
    number: string;
    name: string
}

export function Step({ number, name }: IStepProps) {
    return (
        <div className="step__block">
            <div className="step__circle">
                <div className="step__number">
                    {number}
                </div>
            </div>
            <div className="step__info">
                <Arrow size={"30"} classname="step__arrow" />
                <p className="step__descr">{name}</p>
            </div>
        </div>
    )
}