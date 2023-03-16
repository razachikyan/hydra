import React from "react";
import { Button } from "../../../../Button/Button";
import "./introabout.css";

export function IntroAbout() {
    return (
        <div className="intro__about">
            <h3 className="about__title section__title">
                ABOUT
            </h3>
            <p className="section__subtitle about__subtitle">
                HYDRA VR
            </p>
            <p className="section__descr about__descr">
                Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus
                urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida
                dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in.
                Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet
                sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
                etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet
                cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
                retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
                n tempor.
            </p>
            <Button name="LET’S GET IN TOUCH" classname="about__btn" />
        </div>
    )
}