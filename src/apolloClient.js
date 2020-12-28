import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri:'http://newsapi.org/v2/top-headlines?country=us&apiKey=16849f05254a4414971358ff80e77661',
  cache: new InMemoryCache()
})

export default client;