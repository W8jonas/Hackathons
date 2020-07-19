import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function SvgComponent(props) {
  return (
    <Svg width={20} height={20} viewBox="0 0 582 389" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M513.873 30.986L483.611.716 331.38 152.906V11.286h-42.89v214.79h214.793v-42.89H361.649l152.224-152.2zM.86 483.426l30.26 30.27 152.22-152.21v141.64h42.89v-214.79H11.45v42.89h141.62L.86 483.426z"
        fill={props.color || "#000"}
      />
    </Svg>
  )
}
