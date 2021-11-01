import React from 'react'
import './works.scss'



export default function Works() {
    return (
        <div className='works' id='works'>
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={process.env.PUBLIC_URL + '/assets/png-clipart-security-hacker-computer-security-certified-ethical-hacker-white-hat-hacker-tshirt-computer-network-thumbnail.png'} alt="" />
                                </div>
                                <h2>Title</h2>
                                <p>Hoolllllaaa</p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src={process.env.PUBLIC_URL + '/assets/curves.png'} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
