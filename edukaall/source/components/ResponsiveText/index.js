import React from 'react'
import {
	Text as RNText,
} from 'react-native'

import { adjustFont } from './adjustFont'

export function ResponsiveText({
	h1, h2, h3, h4, h5, p, small, tiny, bold, children, style, ...extraProps
}) {
	let fontFamily = 'Roboto_400Regular'

	if (bold) {
		fontFamily = 'Roboto_700Bold'
	}

	return (
		<RNText
			style={[
				h1 && { fontSize: adjustFont(23), fontFamily },
				h2 && { fontSize: adjustFont(20), fontFamily },
				h3 && { fontSize: adjustFont(18), fontFamily },
				h4 && { fontSize: adjustFont(16), fontFamily },
				h5 && { fontSize: adjustFont(14), fontFamily },
				p && { fontSize: adjustFont(13), fontFamily },
				small && { fontSize: adjustFont(10), fontFamily },
				tiny && { fontSize: adjustFont(8), fontFamily },

				style,
			]}
			{...extraProps}
		>
			{children}
		</RNText>
	)
}
