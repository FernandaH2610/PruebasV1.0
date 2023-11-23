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
      height="50"
      viewBox="0 0 120 50"
      width="120"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect className="rect" fill="#016A70" height="50" rx="25" width="120" />
      <g className="g" filter="url(#filter0_i_369_3230)">
        <rect className="rect" fill="#F5F0BB" height="30" rx="15" width="100" x="10" y="10" />
      </g>
      <g className="g" filter="url(#filter1_d_369_3230)">
        <path
          className="path"
          d="M40 25C40 33.2843 33.2843 40 25 40C16.7157 40 10 33.2843 10 25C10 16.7157 16.7157 10 25 10C33.2843 10 40 16.7157 40 25Z"
          fill="#FFFFDD"
        />
      </g>
      <defs className="defs">
        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="34"
          id="filter0_i_369_3230"
          width="100"
          x="10"
          y="10"
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
          <feOffset className="fe-offset" dy="4" />
          <feGaussianBlur className="fe-gaussian-blur" stdDeviation="2" />
          <feComposite className="fe-composite" in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix
            className="fe-color-matrix"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend className="fe-blend" in2="shape" mode="normal" result="effect1_innerShadow_369_3230" />
        </filter>
        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="38"
          id="filter1_d_369_3230"
          width="38"
          x="6"
          y="10"
        >
          <feFlood className="fe-flood" floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            className="fe-color-matrix"
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset className="fe-offset" dy="4" />
          <feGaussianBlur className="fe-gaussian-blur" stdDeviation="2" />
          <feComposite className="fe-composite" in2="hardAlpha" operator="out" />
          <feColorMatrix
            className="fe-color-matrix"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend className="fe-blend" in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_369_3230" />
          <feBlend
            className="fe-blend"
            in="SourceGraphic"
            in2="effect1_dropShadow_369_3230"
            mode="normal"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
