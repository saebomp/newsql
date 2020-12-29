import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { RestLink } from 'apollo-link-rest'

const restLink = new RestLink({
  uri: 'https://newsapi.org/v2/',
  headers: {
    Authorization: '16849f05254a4414971358ff80e77661'
  }
})

export const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache()
})
export default client;