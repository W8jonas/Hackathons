import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function SvgComponent(props) {
  return (
    <Svg width={20} height={20} viewBox="0 0 582 389" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.58.586l182.21 194.4L364.99.586H.58z"
        fill={props.color || "#000"}
      />
    </Svg>
  )
}
