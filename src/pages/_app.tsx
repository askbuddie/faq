import { AppProps } from "next/app";
import { useRouter } from "next/router";

import MDXLayout from "../components/MDXLayout";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  if (router.pathname.startsWith("/faqs")) {
    return (
      <MDXLayout>
        <Component {...pageProps} />
      </MDXLayout>
    );
  }
  return <Component {...pageProps} />;
}
