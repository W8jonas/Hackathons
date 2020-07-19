import * as React from "react"
import Svg, { Circle } from "react-native-svg"

export default function CircleSVG({color, radius}) {
  return (
    <Svg 
        height={radius} 
        width={radius} 
    >
      <Circle cx={radius/2} cy={radius/2} r={radius/2} fill={color} />
    </Svg>
  )
}


