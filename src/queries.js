import gql from 'graphql-tag'

export const Headlines = gql`
  query TopHeadlines {
    headlines
      @rest(
        type: "HeadlinesPayload"
        path: "top-headlines?country=us&category=technology"
      ) {
      totalResults
      articles @type(name: "ArticlePayload") {
        title
        publishedAt
        url
        urlToImage
        description
        source @type(name: "SourcePayload") {
          name
        }
      }
    }
  }
`