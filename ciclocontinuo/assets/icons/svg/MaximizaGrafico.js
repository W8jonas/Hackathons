import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function SvgComponent(props) {
  return (
    <Svg width={20} height={20} viewBox="0 0 582 389" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M305.233 207.446l32.06 32.04 161.244-161.2v150.02h45.422V.786H316.455v45.44h150.023l-161.245 161.22zM239.299 337.496l-32.06-32.05-161.244 161.21v-150.02H.561v227.51h227.517v-45.43H78.055l161.244-161.22z"
        fill={props.color || "#000"}
      />
    </Svg>
  )
}
