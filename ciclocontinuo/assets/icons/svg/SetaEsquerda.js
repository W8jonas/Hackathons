import * as React from "react"
import Svg, { Path , G, Circle} from "react-native-svg"

export default function SvgComponent(props) {
  return (
    <Svg width={20} height={20} viewBox="0 0 582 389" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M437.56 188.595H86L231.9 33.73 200.25.02.01 212.36l200.31 213.136 32.22-33.832L85.55 236.47h352.01v-47.875z"
        fill={props.color || "#000"}
      />
    </Svg>
  )
}
