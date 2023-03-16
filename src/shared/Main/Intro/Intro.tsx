import React from "react";
import { TitleBlock } from "../TitleBlock/TitleBlock";
import "./intro.css";
import { IntroRight } from "./IntroRight/IntroRight";

export function Intro() {
    return (
        <section className="intro">
            <div className="intro__left">
                <TitleBlock title={"INTRODUCTION"} subtitle={"TO HYDRA VR"} classname="m-b" showArrow={"hidden"} />
                <div className="intro__image"></div>
            </div>
            <IntroRight />
        </section>
    )
}