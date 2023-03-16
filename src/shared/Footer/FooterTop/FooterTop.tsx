import React from "react";
import "./footertop.css";
import { nanoid } from "nanoid";
import { List } from "../../List/List";
import { ListItem } from "../../ListItem/ListItem";
import logo from "../../../assets/images/footer.png";
import { Button } from "../../Button/Button";
import { Facebook, Instagram, Linkedin, Pinterest, Twitter, Youtube } from "../../Icons/social";

export function FooterTop() {
    const List1 = ["ABOUT", "SERVICES", "TECHNOLOGIES", "HOW TO", "JOIN HYDRA"];
    const List2 = ["F.A.Q", "SITEMAP", "CONDITIONS", "LICENSES"];
    return (
        <div className="footer__top">
            <img className="footer__logo" src={logo} alt="" />
            <span className="vertical__line"></span>
            <List classname="footer__list">
                {List1.map(content => (
                    <ListItem key={nanoid()} classname="footer__item" content={content} />
                ))}
            </List>
            <span className="vertical__line"></span>
            <List classname="footer__list">
                {List2.map(content => (
                    <ListItem key={nanoid()} classname="footer__item" content={content} />
                ))}
            </List>
            <span className="vertical__line last"></span>
            <div className="footer__social">
                <h4 className="footer__subtitle">
                    SOCIALIZE WITH HYDRA
                </h4>
                <List classname="social__list">
                    <ListItem classname="social__item" content={<Facebook />} />
                    <ListItem classname="social__item" content={<Twitter />} />
                    <ListItem classname="social__item" content={<Linkedin />} />
                    <ListItem classname="social__item" content={<Youtube />} />
                    <ListItem classname="social__item" content={<Instagram />} />
                    <ListItem classname="social__item" content={<Pinterest />} />
                </List>
                <Button classname="social__btn" name="BUILD YOUR WORLD" />
            </div>
        </div>
    )
}