import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../Components/Layout";
import { Fragment } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Layout />
      <Component {...pageProps} />;
    </Fragment>
  );
}

export default MyApp;
