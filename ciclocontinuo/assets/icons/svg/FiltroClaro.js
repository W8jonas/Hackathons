import * as React from "react"
import Svg, { Path , G, Circle} from "react-native-svg"

export default function SvgComponent(props) {
  return (
    <Svg width={20} height={20} viewBox="0 0 582 389" fill="none" {...props}>
      <Path
        d="M581.877 0H0v64.989h581.877V0zM482.118 161.68H99.74v64.989h382.378V161.68zM354.405 323.37H227.45v64.989h126.955V323.37z"
        fill={props.color || "#000"}
      />
    </Svg>
  )
}
