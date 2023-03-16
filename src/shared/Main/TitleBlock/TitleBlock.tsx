import React from "react";
import { LongArrow } from "../../Icons/LongArrow";
import "./titleblock.css";

interface ITitleBlockProps {
    title: string;
    subtitle: string;
    classname?: string;
    showArrow?: string;
}

export function TitleBlock({ title, subtitle, classname, showArrow = "" }: ITitleBlockProps) {
    classname = classname ?? "";
    return (
        <div className={`top__left ${classname}`}>
            <h2 className="section__title">
                {title}
            </h2>
            <div className="block__text">
                <p className={`section__subtitle`}>
                    {subtitle}
                </p>
                {showArrow === "hidden" ? null : <LongArrow />}
            </div>
        </div>
    )
}