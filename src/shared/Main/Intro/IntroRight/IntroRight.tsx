import React from "react";
import { IntroAbout } from "./IntroAbout/IntroAbout";
import "./introright.css";

export function IntroRight() {
    return (
        <div className="intro__right">
            <p className="section__descr intro__descr">
                Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat
                nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo
                quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
                lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
            </p>
            <IntroAbout />
        </div>
    )
}