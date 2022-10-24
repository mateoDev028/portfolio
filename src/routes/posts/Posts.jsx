import React from 'react'
import './posts.css'
import Card from '../../components/card/Card'
import Project1 from '../../components/card/cardImg/Img_Project_1.PNG'
import Project2 from '../../components/card/cardImg/Img_Project_2.png'
import Project3 from '../../components/card/cardImg/Img_Project_3.PNG'

const cardsDb = [
  {
    id: 1,
    title: 'Lista de Tareas',
    img: Project1,
    itemUno: 'React',
    itemDos: 'Email/Password',
    itemTres: 'Firebase',
    itemCuatro: 'Bootstrap',
    url:'https://fir-02-48332.web.app/'
  },
  {
    id: 2,
    title: 'Coffee Store',
    img: Project2,
    itemUno: 'Vanilla JS',
    itemDos: 'LocalStorage',
    itemTres: 'Bootstrap',
    itemCuatro: 'jQuery',
    url:'https://mateodev028.github.io/cafe-orfeo/'
  },
  {
    id: 3,
    title: 'Web Design',
    img: Project3,
    itemUno: 'React',
    itemDos: 'CSS (BEM)',
    itemTres: 'InProgress...',
    itemCuatro: 'InProgress...',
    url:'https://project-a1-a1.netlify.app/'
  },
]

const Posts = () => {

  return (
    <div className='posts'>
      <a className='posts-a' name="projects">
      <h1 className="posts-title">PROYECTOS</h1>
        <div className="posts-cards">
          {
            cardsDb.map(card => (
              <Card card={card} key={card.id}/>
            ))
          }
        </div>
      </a>
    </div>
  )
}

export default Posts;