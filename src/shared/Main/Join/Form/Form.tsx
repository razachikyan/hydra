import React from "react";
import { Button } from "../../../Button/Button";
import "./form.css";

export function Form() {
    return (
        <form className="form">
            <input type="text" placeholder="First Name" className="input" />
            <input type="text" placeholder="Last Name" className="input" />
            <input type="text" placeholder="Email" className="input" />
            <input type="text" placeholder="Phone Number" className="input" />
            <input type="text" placeholder="Subject" className="input" />
            <textarea placeholder="Tell Us Something..." className="textarea" />
            <Button name="SEND TO HYDRA" classname="submit__btn" type="submit" />
        </form>
    )
}