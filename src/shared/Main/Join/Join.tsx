import React from "react";
import { Form } from "./Form/Form";
import "./join.css";

export function Join() {
    return (
        <section className="join">
            <h2 className="section__title join__title">
                JOIN HYDRA
            </h2>
            <span className="line"></span>
            <p className="section__subtitle join__subtitle">
                Let’s Build Your VR Experience
            </p>
            <Form />
        </section>
    )
}