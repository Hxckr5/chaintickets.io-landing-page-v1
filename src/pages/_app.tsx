import "~/styles/globals.css";
import type { AppProps } from "next/app";
import { Reg } from "~/Helpers/fonts";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div  className={`container min-h-screen flex scroll-smooth ${Reg.className}   mx-auto max-w-8xl p-8 2xl:px-0`}>
      <Component {...pageProps} />
    </div>
  );
}

