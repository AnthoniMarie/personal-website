import * as React from "react"
import {
  chakra,
  keyframes,
  ImageProps,
  forwardRef,
} from "@chakra-ui/react"

import logo from "../../assets/images/anthonimarie.svg"


export const SimpleLogo = forwardRef<ImageProps, "img">((props, ref) => {

  return <chakra.img src={logo} ref={ref} {...props} />
})