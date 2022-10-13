import React from "react";

interface Props {
  fill?: string;
}

function StarIcon(props: Props) {
  const { fill } = props;

  return (
    <svg
      width="35"
      height="32"
      viewBox="0 0 35 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_15_139)">
        <path
          d="M19.8516 2.10036L22.3682 8.19347L29.3203 8.55683C32.0126 8.69745 33.1118 11.8723 31.0221 13.471L25.6248 17.6001L27.4052 23.9175C28.095 26.3636 25.2167 28.3261 22.9506 26.9548L17.0985 23.4136L11.2467 26.9548C8.98061 28.3261 6.10266 26.3637 6.79206 23.9175L8.57252 17.6001L3.17518 13.471C1.08512 11.8723 2.18434 8.69743 4.87666 8.55683L11.8291 8.19347L14.3457 2.10036C15.3198 -0.25904 18.8772 -0.25904 19.8517 2.10036H19.8516Z"
          fill={fill || "black"}
        />
      </g>
      <defs>
        <filter
          id="filter0_d_15_139"
          x="0.0834351"
          y="0.330811"
          width="34.0302"
          height="31.0758"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_15_139"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_15_139"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default StarIcon;
