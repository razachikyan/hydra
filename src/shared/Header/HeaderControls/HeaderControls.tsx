import React from "react";
import { Button } from "../../Button/Button";
import "./headercontrols.css";

export function HeaderControls() {
    return (
        <div className="header__controls">
            <Button name={"CONTACT US"} classname={"contact__btn"} />
            <Button name={"JOIN HYDRA"} classname={"join__btn"} />
        </div>
    )
}