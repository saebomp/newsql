import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import {Headlines} from './queries'
import client from './apolloClient'


const Home = () => {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    requestHeadlines()
  }, [])
  
  const requestHeadlines = () => {
    client
    .query({
      query: Headlines
    })
    .then(response => {
      setArticles(response.data.headlines.articles)
    })
    .catch(error => {
      console.log('ERROR ==>', error)
    })
  }
  
  console.log('articles', articles)
  const {loading, error, data} = useQuery(Headlines)
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  console.log('data', data)
  return (
    // <div>{data.headlines.articles[0].title}</div>
    <span>{articles.map(item => {
      const {title, description} = item
      return (
      <div>
        <ul>
          <li>
            {title}
          </li>
          <li>{description}</li>
          <li></li>
          <li></li>
        </ul>
        </div>
      )
    })}</span>
  )

}
  

export default Home