import React from "react";
import "./close.css";

interface ICloseProps {
    handleClick: () => void;
}

export function Close({ handleClick }: ICloseProps) {
    return (
        <button onClick={handleClick} className="close"></button>
    )
}