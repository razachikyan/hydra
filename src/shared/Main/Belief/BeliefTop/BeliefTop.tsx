import React from "react";
import { TitleBlock } from "../../TitleBlock/TitleBlock";
import "./belieftop.css";

export function BeliefTop() {
    return (
        <div className="belief__top">
            <TitleBlock title={"WHY BUILD"} subtitle={"WITH HYDRA?"} />
            <p className="section__descr belief__descr">
                Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat
                nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo
                quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
                lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
            </p>
        </div>
    );
}