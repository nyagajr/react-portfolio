import React from 'react'
import './menu.scss'

export default function Menu({humOpen,setHumOpen}) {
    return (
        <div className={'menu ' + (humOpen && 'active')}>
            <ul>
                <div onClick={()=>setHumOpen(false)}> 
                <li >
                    <a href="#intro">Home</a>
                </li>

                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>

                <li>
                    <a href="#works">Works</a>
                </li>

                <li>
                    <a href="#contact">Contact</a>
                </li>

                </div>
            </ul>
        </div>
    )
}