import React from "react";
import "./footer.css";
import { FooterTop } from "./FooterTop/FooterTop";

export function Footer() {
    return (
        <footer className="footer">
            <FooterTop />
            <span className="footer__line"></span>
            <div className="footer__bottom">
                <p className="bottom__text">
                    2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED
                </p>
            </div>
        </footer>
    )
}