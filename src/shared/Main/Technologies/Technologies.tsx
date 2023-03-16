import React from "react";
import { nanoid } from "nanoid";
import { List } from "../../List/List";
import { ListItem } from "../../ListItem/ListItem";
import "./technologies.css";
import { TechView } from "./TechView/TechView";
import { Slider } from "../../Swiper/Swiper";

export function Technologies() {
    const classes = ["tech__item1", "tech__item2", "tech__item3", "tech__item4"];
    return (
        <section className="technologies">
            <TechView />
            <Slider
                children={classes.map(classname => (
                    <ListItem
                        key={nanoid()}
                        classname={classname}
                        content=""
                    />
                ))}
                buttonStyle={"tech__button"}
                classname={"tech__slide"} />
            <List classname="tech__list">
                {classes.map(classname => <ListItem key={nanoid()} classname={classname} content="" />)}
            </List>
        </section>
    )
}