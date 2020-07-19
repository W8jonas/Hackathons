import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function SvgComponent(props) {
  return (
    <Svg width={20} height={20} viewBox="0 0 582 389" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.53 236.921h351.555L206.19 391.785l31.65 33.711 200.238-212.339L237.76.02l-32.22 33.832 146.995 155.195H.53v47.874z"
        fill="#605D5C"
        // fill={props.color || "#000"}
      />
    </Svg>
  )
}
