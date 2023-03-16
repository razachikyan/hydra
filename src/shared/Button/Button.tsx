import React from "react";
import "./button.css";

interface IButtonProps {
    name: string;
    classname: string;
    type?: "button" | "submit" | "reset" | undefined;
}

export function Button({ name, classname, type = "button" }: IButtonProps) {
    return (
        <button type={type} className={`button ${classname}`}>
            {name}
        </button>
    )
}