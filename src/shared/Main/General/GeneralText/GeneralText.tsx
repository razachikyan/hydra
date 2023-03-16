import React from "react";
import { GeneralControls } from "../GeneralControls/GeneralControls";
import "./generaltext.css";

export function GeneralText() {
    return (
        <div className="general__text">
            <div className="general__left">
                <div className="general__image"></div>
                <h2 className="general__title">
                    <span className="dedicated__text1">Dive</span> Into The Depths Of <span className="dedicated__text2">Virtual Reality</span>
                </h2>
                <p className="general__descr">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    nisl tincidunt eget. Lectus mauris eros in vitae .
                </p>
                <GeneralControls />
            </div>
            <div className="general__right"></div>
        </div>
    )
}