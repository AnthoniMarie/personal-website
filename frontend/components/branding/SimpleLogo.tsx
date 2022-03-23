import * as React from "react";
import { chakra, ImageProps, forwardRef } from "@chakra-ui/react";

export const SimpleLogo = forwardRef<ImageProps, "img">((props, ref) => {
  return (
    <chakra.img src="/static/images/anthonimarie.svg" ref={ref} {...props} />
  );
});
