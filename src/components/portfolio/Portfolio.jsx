import React, {useState} from 'react'
import './portfolio.scss'
import PortfolioList from '../portolioList/PortfolioList'

export default function Portfolio() {
    const [selected, setSelected] = useState('featured')

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
            title:'BAck-end App',
        },

        
    ]
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
               <div className="item">
               <img src={process.env.PUBLIC_URL + '/assets/png-clipart-security-hacker-computer-security-certified-ethical-hacker-white-hat-hacker-tshirt-computer-network-thumbnail.png'} />
                   <h3>Dev Enthausiast Website</h3>
               </div>

               <div className="item">
               <img src={process.env.PUBLIC_URL + '/assets/png-clipart-security-hacker-computer-security-certified-ethical-hacker-white-hat-hacker-tshirt-computer-network-thumbnail.png'} />
                   <h3>Dev Enthausiast Website</h3>
               </div>

               <div className="item">
               <img src={process.env.PUBLIC_URL + '/assets/png-clipart-security-hacker-computer-security-certified-ethical-hacker-white-hat-hacker-tshirt-computer-network-thumbnail.png'} />
                   <h3>Dev Enthausiast Website</h3>
               </div>

               <div className="item">
               <img src={process.env.PUBLIC_URL + '/assets/png-clipart-security-hacker-computer-security-certified-ethical-hacker-white-hat-hacker-tshirt-computer-network-thumbnail.png'} />
                   <h3>Dev Enthausiast Website</h3>
               </div>

               <div className="item">
               <img src={process.env.PUBLIC_URL + '/assets/png-clipart-security-hacker-computer-security-certified-ethical-hacker-white-hat-hacker-tshirt-computer-network-thumbnail.png'} />
                   <h3>Dev Enthausiast Website</h3>
               </div>

               <div className="item">
               <img src={process.env.PUBLIC_URL + '/assets/png-clipart-security-hacker-computer-security-certified-ethical-hacker-white-hat-hacker-tshirt-computer-network-thumbnail.png'} />
                   <h3>Dev Enthausiast Website</h3>
               </div>
           </div>
        </div>
    )
}
