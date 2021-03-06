import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import {HeadlinesBbc} from '../queries'
import client from '../apolloClient'
import { Card, Row, Col } from 'antd'

const getStyles = () => ({
  publishedAt : {
    marginTop:'20px'
  }
})


const BBC = () => {
  const { Meta } = Card;
  const styles = getStyles()
  const [articles, setArticles] = useState([])

  const requestHeadlinesofBbc = () => {
    client
    .query({
      query: HeadlinesBbc
    })
    .then(response => {
      setArticles(response.data.headlines.articles)
    })
    .catch(error => {
      console.log('ERROR ==>', error)
    })
  }

  useEffect(() => {
    requestHeadlinesofBbc()
  }, [])

  const {loading, error, data} = useQuery(HeadlinesBbc)
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  console.log('data', data)
  

  return (
  <div>
    <Row gutter={[16, 16]}>
      {articles.map((item) => {
        const {title, description, publishedAt, url, urlToImage} = item
      
      return (
        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }} key={url}>
            <a href={url} target="_blank" className="newslink" rel="noopener noreferrer">
            <Card
              hoverable
              style={{ width: '100%' }}
              >
              <img src={urlToImage} className="thumbnail"/>
              <Meta 
              title={title}
              description={description} 
              style={styles.publishedAt}
              />
              <p style={styles.publishedAt}>{publishedAt.substring(0, 10)}</p> 
            </Card>
            </a>
        </Col>
      )
     })}
    </Row>
  </div>
  )
}

export default BBC