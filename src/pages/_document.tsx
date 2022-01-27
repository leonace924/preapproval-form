import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&amp;display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Script
            type="text/javascript"
            src="https://www.bugherd.com/sidebarv2.js?apikey=lppzstalja9rzkuazisxpg"
            strategy="beforeInteractive"
          />
        </body>
      </Html>
    )
  }
}

export default MyDocument
