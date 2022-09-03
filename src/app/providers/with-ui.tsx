import React from "react";
import { ChakraProvider } from '@chakra-ui/react'

export const withUi = (component: () => React.ReactNode) => () => (
   <ChakraProvider>
      {component()}
   </ChakraProvider>
);