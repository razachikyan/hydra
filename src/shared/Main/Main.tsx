import React from "react";
import { Belief } from "./Belief/Belief";
import { General } from "./General/Geleral";
import { Intro } from "./Intro/Intro";
import { Join } from "./Join/Join";
import "./main.css";
import { Steps } from "./Steps/Steps";
import { Technologies } from "./Technologies/Technologies";

export function Main() {
    return (
        <main className="main">
            <General />
            <Intro />
            <Belief />
            <Technologies />
            <Steps />
            <Join />
        </main>
    )
}