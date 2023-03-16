import React from "react";
import { nanoid } from "nanoid";
import { List } from "../List/List";
import { ListItem } from "../ListItem/ListItem";
import "./header.css";
import { HeaderControls } from "./HeaderControls/HeaderControls";
import { Logoblock } from "./LogoBlock/LogoBlock";
import { Burger } from "../Burger/Burger";

export function Header() {
    const ListContent = ["ABOUT", "SERVICES", "TECHNOLOGIES", "HOW TO"];
    return (
        <header className="header">
            <Logoblock />
            <Burger list={["ABOUT", "SERVICES", "TECHNOLOGIES", "HOW TO"]} />
            <List classname={"header__list"}>
                {ListContent.map(content => <ListItem key={nanoid()} classname="header__item" content={content} />)}
            </List>
            <HeaderControls />
        </header>
    )
}