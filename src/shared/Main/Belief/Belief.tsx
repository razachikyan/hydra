import React from "react";
import { nanoid } from "nanoid";
import { List } from "../../List/List";
import { ListItem } from "../../ListItem/ListItem";
import "./belief.css";
import { BeliefItem } from "./BeliefItem/BeliefItem";
import { BeliefTop } from "./BeliefTop/BeliefTop";
import { Slider } from "../../Swiper/Swiper";

export function Belief() {
    const descr = `Vitae sapien pellentesque habitant morbi
                    nunc. Viverra aliquet  porttitor rhoncus 
                    libero justo laoreet sit amet vitae.`;
    const btnName = "TRY IT NOW";
    const BeliefList = [
        { image: "belief1", title: "SIMULATION" },
        { image: "belief2", title: "EDUCATION" },
        { image: "belief3", title: "SELF-CARE" },
        { image: "belief4", title: "OUTDOOR" }
    ];

    return (
        <section className="belief">
            <BeliefTop />
            <Slider
                children={BeliefList.map(item => {
                    return (
                        <ListItem
                            key={nanoid()}
                            classname="belief__item"
                            content={<BeliefItem
                                image={item.image}
                                title={item.title}
                                descr={descr}
                                buttonName={btnName}
                            />}
                        />
                    )
                })}
                buttonStyle={"belief__button"}
                classname={"belief__slide"}
            />
            <List classname="belief__list">
                {BeliefList.map(item => {
                    return (
                        <ListItem
                            key={nanoid()}
                            classname="belief__item"
                            content={<BeliefItem
                                image={item.image}
                                title={item.title}
                                descr={descr}
                                buttonName={btnName}
                            />}
                        />
                    )
                })}
            </List>
        </section>
    )
}