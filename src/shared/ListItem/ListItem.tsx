import React from "react";
import "./listitem.css";

interface IListItemProps {
    content: string | React.ReactNode;
    classname: string;
}

export function ListItem({ content, classname }: IListItemProps) {
    return (
        <li className={classname}>
            {content}
        </li>
    )
}