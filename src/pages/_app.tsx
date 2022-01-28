import client from '@lib/apollo-client'
import { ApolloProvider } from '@apollo/client'

import '@styles/tailwind.css'
import '@styles/app.css'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
