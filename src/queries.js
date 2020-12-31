import gql from 'graphql-tag'

export const Headlines = gql`
  query TopHeadlines {
    headlines
      @rest(
        type: "HeadlinesPayload"
        path: "top-headlines?country=ca"
      ) {
      totalResults
      articles @type(name: "ArticlePayload") {
        title
        publishedAt
        url
        urlToImage
        description
        content
        source @type(name: "SourcePayload") {
          name
        }
      }
    }
  }
`