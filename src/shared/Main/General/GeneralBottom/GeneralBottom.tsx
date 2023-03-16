import { nanoid } from "nanoid";
import React from "react";
import { Call } from "../../../Icons/Call";
import { Geoloc } from "../../../Icons/Geoloc";
import { Message } from "../../../Icons/Message";
import { List } from "../../../List/List";
import { ListItem } from "../../../ListItem/ListItem";
import { Slider } from "../../../Swiper/Swiper";
import "./generalbottom.css";
import { GeneralItem } from "./GeneralItem/GeneralItem";

export function GeneralBottom() {
    const GeneralList = [
        { title: "Pay Us a Visit", descr: "Union St, Seattle, WA 98101, United States", Icon: Geoloc },
        { title: "Give Us a Call", descr: "(110) 1111-1010", Icon: Call },
        { title: "Send Us a Message", descr: "Contact@HydraVTech.com", Icon: Message },
    ]

    return (
        <>
            <Slider
                children={GeneralList.map(({ title, descr, Icon }) => {
                    return (
                        <ListItem
                            key={nanoid()}
                            content={<GeneralItem
                                title={title}
                                descr={descr}
                                icon={<Icon />} />}
                            classname={"general__item"} />
                    )
                })}
                buttonStyle={"gen__btn"}
                classname="general__slide"
            />

            <List classname="general__list">
                {GeneralList.map(({ title, descr, Icon }) => {
                    return (
                        <ListItem
                            key={nanoid()}
                            content={<GeneralItem
                                title={title}
                                descr={descr}
                                icon={<Icon />} />}
                            classname={"general__item"} />
                    )
                })}
            </List>
        </>
    )
}