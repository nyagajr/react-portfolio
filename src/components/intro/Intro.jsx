import React from 'react'
import './intro.scss'

export default function Intro() {
    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="dPic">
                <img src={process.env.PUBLIC_URL + '/assets/nyagz.png'} />
                </div>
            </div>
            <div className="right"></div>
        </div>
    )
}
