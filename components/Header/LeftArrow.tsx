import * as React from "react"

import Svg, { Path, SvgProps } from "react-native-svg"

const LeftArrow = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M8.614 0c.263 0 .515.107.7.294.39.394.39 1.028 0 1.422L3.14 7.967l6.235 6.32a1.011 1.011 0 0 1 0 1.42.983.983 0 0 1-1.39.01l-.011-.01-7.64-7.74L7.913.296a.985.985 0 0 1 .7-.296Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default LeftArrow
