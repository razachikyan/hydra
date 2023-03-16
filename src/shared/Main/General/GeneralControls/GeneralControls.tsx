import React from "react";
import { Button } from "../../../Button/Button";
import { Arrow } from "../../../Icons/Arrow";
import "./generalcontrols.css";

export function GeneralControls() {
    return (
        <div className="general__controls">
            <Button name="BUILD YOUR WORLD" classname="general__btn" />
            <Arrow classname="arrow" />
        </div>
    )
}