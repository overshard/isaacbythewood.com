import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

import { theme } from "../site.config";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    // Setup styled-components for rendering server side
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
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
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(m,e,t,r,i,c,s){m.collectorQueue = m.collectorQueue || r;
            m.collectorServer = c; m.collectorId = s; collectorScript = e.createElement(t);
            collectorScript.src = c + i; e.head.appendChild(m.collectorScript);
            })(window,document,'script',[],'/static/collector.js',
            'https://analytics.bythewood.me','30e69c06-9beb-4283-8919-8c7a686ab013');`,
            }}
          />
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
