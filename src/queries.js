import gql from 'graphql-tag'

export const Headlines = gql`
  query TopHeadlines {
    headlines
      @rest(
        type: "HeadlinesPayload"
        path: "top-headlines?sources=bbc-news"
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