import { Html, Head, Main, NextScript } from 'next/document';



export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"true"} />
        <link href="https://fonts.googleapis.com/css2?family=La+Belle+Aurore&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Aleo:wght@300;400;700&family=Inknut+Antiqua:wght@300;700&family=La+Belle+Aurore&display=swap" rel="stylesheet" />

        <meta name="description" content="Learn how to invest, buy, sell or rent in the best possible way in the real estate sector thanks to Katherinrios." />
      </Head>
      <body>
        <Main />
        <script type="text/javascript" id="hs-script-loader" async defer src="https://js-eu1.hs-scripts.com/143508267.js"></script>
        <NextScript />
      </body>
    </Html>
  )
}
