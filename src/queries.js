import {gql} from '@apollo/client'

export const HOME_PAGE = gql`
{
    articles {
      author
      title
      description
      url
      urlToImage
    }
  }
`