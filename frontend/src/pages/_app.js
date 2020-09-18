import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";
import theme from "../theme";

import { Header } from "../components/Header/Header";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <Header />
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default MyApp;
