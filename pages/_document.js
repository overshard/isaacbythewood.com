import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

import { theme } from "../site.config";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    // Redirect to www if no www used
    if (ctx.req.headers.host !== "isaacbythewood.com") {
      ctx.res.writeHead(301, {
        Location: `https://isaacbythewood.com${ctx.req.url}`
      });
      ctx.res.end();
      return {};
    }

    // Setup styled-components for rendering server side
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content={theme.colors.primary} />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
