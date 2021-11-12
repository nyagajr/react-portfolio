import React, {useEffect,useState} from 'react'
import './portfolio.scss'
import PortfolioList from '../portolioList/PortfolioList'
import {featuredPortfolio,webPortfolio,frontEndPortfolio,backEndPortfolio} from '../../data'

export default function Portfolio() {
    const [selected, setSelected] = useState('featured')
    const [data, setData] = useState([])

    const list = [
        {
          id: 'featured',
          title:'Featured',
        },

        {
            id: 'web',
            title:'Web App',
        },

        {
            id: 'front-end',
            title:'Front-end App',
        },

        {
            id: 'back-end',
            title:'Back-end App',
        },

        
    ]

    useEffect(()=>{

        switch(selected){
            case 'featured':
                setData(featuredPortfolio);
                break;
                case 'web':
                    setData(webPortfolio);
                    break;
                case 'front-end':
                    setData(frontEndPortfolio);
                    break;
                case 'back-end':
                    setData(backEndPortfolio);
                    break; 
                default:
                    setData(featuredPortfolio)

        }

    },[selected])
    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                {list.map(item=>(
                    <PortfolioList title={item.title} 
                    active={selected === item.id} 
                    setSelected = {setSelected}
                    id={item.id}/>
                ))}
            </ul>

           <div className="container">
               {data.map(item=>(

               
               <div className="item">
              <img src={item.img} />
                   <h3>{item.title}</h3>
                   <h3>{item.framework}</h3>
                   <a href={item.link}>Link</a>

               </div>
               ))}

               
           </div>
        </div>
    )
}
