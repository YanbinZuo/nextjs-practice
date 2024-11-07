import { Provider } from "next-auth/client";
import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
