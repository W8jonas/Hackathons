import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg width={66} height={106} viewBox="0 0 66 106" fill="none" {...props}>
      <Path
        d="M41.467 13.552h-6.923l14.95 17.677H38.153l18.192 21.507H45.371l19.738 23.273H35.06v26.884h29.534v2.726H.516v-2.726h29.535V76.009H0l17.972-23.273H7.587l16.572-21.507H13.037L26.59 13.552h-6.997L29.977 0l11.49 13.552z"
        fill="#231F20"
      />
    </Svg>
  )
}

export default SvgComponent
