import { createOvermind } from "overmind";
import { config } from "../overmind";
import "../../styles/globals.css";
import { Provider } from "overmind-react";

function MyApp({ Component, pageProps }) {
  const overmind = createOvermind(config);
  return (
    <Provider value={overmind}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
