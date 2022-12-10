import {useState} from "react"
import { ChakraProvider} from "@chakra-ui/react";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";
import theme from "../theme";

function WeatherApp({ Component, pageProps }) {
  const [queryClient] =  useState(() => new QueryClient());
  return (
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </QueryClientProvider>
  )
}

export default WeatherApp
