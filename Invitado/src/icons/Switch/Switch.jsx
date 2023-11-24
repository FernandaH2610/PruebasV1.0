/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Switch = ({ className }) => {
  return (
    <svg
      className={`switch ${className}`}
      fill="none"
      height="27"
      viewBox="0 0 61 27"
      width="61"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect className="rect" fill="#016A70" height="27" rx="12.5" width="61" />
      <g className="g" filter="url(#filter0_i_195_3087)">
        <rect className="rect" fill="#F5F0BB" height="15" rx="7.5" width="50" x="6" y="6.5" />
      </g>
      <g className="g" filter="url(#filter1_d_195_3087)">
        <path
          className="path"
          d="M21 14C21 18.1421 17.6421 21.5 13.5 21.5C9.35786 21.5 6 18.1421 6 14C6 9.85786 9.35786 6.5 13.5 6.5C17.6421 6.5 21 9.85786 21 14Z"
          fill="#FFFFDD"
        />
      </g>
      <defs className="defs">
        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="17"
          id="filter0_i_195_3087"
          width="50"
          x="6"
          y="6.5"
        >
          <feFlood className="fe-flood" floodOpacity="0" result="BackgroundImageFix" />
          <feBlend className="fe-blend" in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
          <feColorMatrix
            className="fe-color-matrix"
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset className="fe-offset" dy="2" />
          <feGaussianBlur className="fe-gaussian-blur" stdDeviation="1" />
          <feComposite className="fe-composite" in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix
            className="fe-color-matrix"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend className="fe-blend" in2="shape" mode="normal" result="effect1_innerShadow_195_3087" />
        </filter>
        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="19"
          id="filter1_d_195_3087"
          width="19"
          x="4"
          y="6.5"
        >
          <feFlood className="fe-flood" floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            className="fe-color-matrix"
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset className="fe-offset" dy="2" />
          <feGaussianBlur className="fe-gaussian-blur" stdDeviation="1" />
          <feComposite className="fe-composite" in2="hardAlpha" operator="out" />
          <feColorMatrix
            className="fe-color-matrix"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend className="fe-blend" in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_195_3087" />
          <feBlend
            className="fe-blend"
            in="SourceGraphic"
            in2="effect1_dropShadow_195_3087"
            mode="normal"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
