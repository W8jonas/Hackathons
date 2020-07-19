import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function SvgComponent(props) {
  return (
    <Svg width={20} height={20} viewBox="0 0 582 389" fill="none" {...props}>
      <Path
        d="M582.217.096H.34v64.989h581.877V.095zM482.458 161.776H100.08v64.989h382.378v-64.989zM354.745 323.466H227.79v64.989h126.955v-64.989z"
        fill={props.color || "#000"}
      />
    </Svg>
  )
}
