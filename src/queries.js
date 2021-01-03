import gql from 'graphql-tag'

export const HeadlinesBbc = gql`
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

export const HeadlinesCbc = gql`
  query TopHeadlines {
    headlines
      @rest(
        type: "HeadlinesPayload"
        path: "top-headlines?sources=cbc-news"
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

export const HeadlinesCnn = gql`
  query TopHeadlines {
    headlines
      @rest(
        type: "HeadlinesPayload"
        path: "top-headlines?sources=cnn"
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