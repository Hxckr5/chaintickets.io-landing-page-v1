import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en"  style={{
      background: 'linear-gradient(to bottom, #222543, #050829)',
    }}>
      <Head />
      <body  style={{
      background: 'linear-gradient(to bottom, #222543, #050829)',
    }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
