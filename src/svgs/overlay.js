import React from 'react'

const Overlay = ({ fillData }) => {
    return (
        <svg
        style={{position: 'absolute', fill: fillData, border: 'none'}}
        className="w-100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 670 447"
        xmlSpace="preserve"
      >
        <path
          id="gradient"
          fill="transparent"
          d="M620.9,434.8L388.6,447l-232.3-47.5L0,434.8V315.5l42.4-142.8L0,28.2L252.3,0l216.6,28.2L645.4,0
                                          l-24.5,187.6L670,354.5L620.9,434.8z"
        />
        <g className="mask-shapes">
          <polygon points="388.6,447 670,447 670,354.5 620.9,434.8 	" />
          <polygon points="0,434.8 0,447 388.6,447 156.3,399.5 	" />
          <polygon points="468.9,28.2 645.4,0 252.3,0 	" />
          <polygon points="645.4,0 620.9,187.6 670,354.5 670,0 	" />
          <polygon points="42.4,172.7 0,28.2 0,315.5 	" />
          <polygon points="0,28.2 252.3,0 0,0 	" />
        </g>
      </svg>
      
    )
}

export default Overlay
