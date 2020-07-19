import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function SvgComponent(props) {
  return (
    <Svg width={20} height={20} viewBox="0 0 582 389" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M357.44 7.686c10.098 10.103 10.098 26.483 0 36.586L159.808 241.9c-10.103 10.098-26.484 10.098-36.586 0L8.083 126.757c-10.102-10.103-10.102-26.484-.005-36.586 10.103-10.098 26.484-10.098 36.586 0l92.602 92.605 4.254 4.25L320.855 7.686c10.103-10.098 26.484-10.098 36.586 0h-.001z"
        fill={props.color || "#fff"}
      />
    </Svg>
  )
}
