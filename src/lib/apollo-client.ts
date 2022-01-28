import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://graph.driv.ly/',
  cache: new InMemoryCache(),
})

export default client
