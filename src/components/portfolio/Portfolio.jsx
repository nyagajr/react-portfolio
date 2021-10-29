import React from 'react'
import './portfolio.scss'

export default function Portfolio() {
    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                <li className='active'>Featured</li>
                <li>Web App</li>
                <li>Front-end App</li>
                <li>Back-end App</li>
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
