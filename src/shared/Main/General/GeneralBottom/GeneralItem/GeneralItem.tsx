import React from "react";
import "./generalitem.css";
interface IGeneralItemProps {
    title: string;
    descr: string;
    icon: React.ReactNode;
}

export function GeneralItem({ title, descr, icon }: IGeneralItemProps) {
    return (
        <>
            {icon}
            <div className="item__text">
                <h4 className="item__title">
                    {title}
                </h4>
                <p className="item__descr">
                    {descr}
                </p>
            </div>
        </>
    )
}