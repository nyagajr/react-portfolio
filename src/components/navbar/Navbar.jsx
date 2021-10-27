import React from 'react'
import './navbar.scss'
import {ContactPhone, Mail} from '@material-ui/icons'


export default function Navbar({humOpen,setHumOpen}) {
    return (
        <div className={'navbar ' + (humOpen && 'active')}>
            <div className='wrapper'>
                <div className='left'>
                    <a href="#intro" className='logo'> Nyaga </a>
                    <div className="itemContainer">
                        <ContactPhone className='icon'/>
                        <span>+254717106233</span>
                    </div>

                    <div className="itemContainer">
                        <Mail className='icon'/>
                        <span>nyagaben123@gmail.com</span>
                    </div>
                        
                    </div>

                    <div className='right'>
                    <div className="hamburger" onClick={()=>setHumOpen(!humOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
                </div>


                
            </div>
            
        
    )
}
