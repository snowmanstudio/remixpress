import { ReactNode } from "react";
import { useState } from "react";
import { hydrate } from "react-dom";
import { RemixBrowser } from "remix";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import ClientStyleContext from "./lib/client-style-context";
import createEmotionCache from "./lib/create-emotion-cache";
import theme from "./components/Layout/theme";

interface ClientCacheProviderProps {
  children: ReactNode;
}
function ClientCacheProvider({ children }: ClientCacheProviderProps) {
  const [cache, setCache] = useState(createEmotionCache());

  function reset() {
    setCache(createEmotionCache());
  }

  return (
    <ClientStyleContext.Provider value={{ reset }}>
      <CacheProvider value={cache}>{children}</CacheProvider>
    </ClientStyleContext.Provider>
  );
}

hydrate(
  <ClientCacheProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RemixBrowser />
    </ThemeProvider>
  </ClientCacheProvider>,
  document
);
