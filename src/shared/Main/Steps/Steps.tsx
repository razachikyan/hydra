import React from "react";
import { nanoid } from "nanoid";
import { List } from "../../List/List";
import { ListItem } from "../../ListItem/ListItem";
import { TitleBlock } from "../TitleBlock/TitleBlock";
import { Step } from "./Step/Step";
import "./steps.css";
import { Slider } from "../../Swiper/Swiper";

export function Steps() {
    const StepsArr = ["3D Conception & Design", "Interaction Design", "VR World User Testing", "Hydra VR Deploy"]
    return (
        <section className="steps">
            <div className="steps__top">
                <TitleBlock title="HOW WE BUILD" subtitle="WITH HYDRA VR?" />
                <p className="section__descr">
                    Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat
                    nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo
                    quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
                    lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                </p>
            </div>
            <Slider
                children={StepsArr.map((name, ind) => (
                    <ListItem
                        key={nanoid()}
                        classname="step"
                        content={<Step number={`0${ind + 1}`} name={name}
                        />}
                    />
                )
                )}
                buttonStyle={"steps__button"}
                classname={"steps__slide"} />
            <List classname="steps__list">
                {StepsArr.map((name, ind) => (
                    <ListItem
                        key={nanoid()}
                        classname="step"
                        content={<Step number={`0${ind + 1}`} name={name}
                        />}
                    />
                )
                )}
            </List>
        </section>
    )
}