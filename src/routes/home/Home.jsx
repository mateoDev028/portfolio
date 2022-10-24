import React from 'react'
import Posts from '../posts/Posts'
import Header from '../../components/header/Header'
import './home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className="home-header">
        <Header />
      </div>
      <div className="home-posts">
        <Posts />
      </div>  
    </div>
  )
}

export default Home