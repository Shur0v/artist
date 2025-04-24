import "./style.css";
import React from "react";

export default function Wave() {
  return (
    <div className="wave rotate-180">
      {/* <!--Hey! This is the original version
of Simple CSS Waves--> */}

      {/* <!--Waves Container--> */}
      <div>
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax ">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="#C4B89C" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="#BCAE8E" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="#B4A480" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#AC9A72" />
          </g>
        </svg>
      </div>
      {/* <!--Waves end--> */}

      {/* <!--Header ends--> */}

      {/* <!--Content starts--> */}
      <div className="content flex"></div>
      {/* <!--Content ends--> */}
    </div>
  );
}
