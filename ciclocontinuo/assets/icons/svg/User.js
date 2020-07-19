import * as React from "react"
import Svg, { Path , G, Circle} from "react-native-svg"

export default function SvgComponent(props) {
  return (
    <Svg width={20} height={20} viewBox="0 0 18 32" {...props}>
      <G
        transform="translate(1 1)"
        stroke={'#000'}
        strokeWidth={2}
        fill={"none"}
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M16 18v-2a4 4 0 00-4-4H4a4 4 0 00-4 4v2" />
        <Circle cx={8} cy={4} r={4} />
      </G>
    </Svg>
  )
}
