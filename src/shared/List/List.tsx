import React from "react";
import "./list.css";

interface INavProps {
    classname: string;
    children: React.ReactNode
}

export function List({ children, classname }: INavProps) {
    return (
        <ul className={classname}>
            {children}
        </ul>
    )
}