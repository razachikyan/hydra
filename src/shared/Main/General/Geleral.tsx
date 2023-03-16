import React from "react";
import "./general.css";
import { GeneralBottom } from "./GeneralBottom/GeneralBottom";
import { GeneralText } from "./GeneralText/GeneralText";

export function General() {
    return (
        <section className="general">
            <GeneralText />
            <GeneralBottom />
        </section>
    )
}