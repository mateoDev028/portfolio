import React from 'react'
import './card.css'

export const Card = ({card}) => {
  return (
    <div className='card' key={card.id}>
        <div className="card-header">
            <h1 className="card-title">{card.title}</h1>
            <img src={card.img} alt="" className="card-img" />
        </div>
        <div className="card-body">
                <li className="card-list-item">
                    {card.itemUno}
                </li>
                <li className="card-list-item">
                    {card.itemDos}
                </li>
                <li className="card-list-item">
                    {card.itemTres}
                </li>
                <li className="card-list-item">
                    {card.itemCuatro}
                </li> 
        </div>
        <div className="card-footer">
            <a className="card-links" href={card.url} target='_blank'>
                Ver Mas
            </a>
        </div>
    </div>
  )
}

export default Card;
