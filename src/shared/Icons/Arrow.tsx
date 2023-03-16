import React from "react";

interface IArrowProps {
    size?: string,
    classname?: string;
}

export function Arrow({ size, classname }: IArrowProps) {
    return (
        <svg className={classname} xmlns="http://www.w3.org/2000/svg" width={size ? size : "46"} height="38" viewBox="0 0 46 38" fill="none">
            <g filter="url(#filter0_i_202_2)">
                <path d="M43.8333 19L2.16666 19M43.8333 19L27.1667 35.6667M43.8333 19L27.1667 2.33333" stroke="#C0B7E8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <filter id="filter0_i_202_2" x="0.666656" y="0.833328" width="44.6667" height="40.3333" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_202_2" />
                </filter>
            </defs>
        </svg>
    )
}