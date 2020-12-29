import React from 'react';
import { useQuery } from '@apollo/client'
import {Headlines} from './queries'

const Home = () => {
  const {loading, error, data} = useQuery(Headlines)
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  console.log('data', data)
  return (
    <div>dd</div>
  )

}
  

export default Home