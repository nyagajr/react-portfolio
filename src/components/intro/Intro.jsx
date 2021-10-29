import React from 'react'
import './intro.scss'
import {ArrowDownwardTwoTone as ArrowDownwardTwoToneIcon} from '@material-ui/icons';

export default function Intro() {
    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="dPic">
                <img src={process.env.PUBLIC_URL + '/assets/nyagz.png'} />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Holla, I'm</h2>
                    <h1>Benson Nyaga</h1>
                    <h3>A Software Developer.</h3>
                </div>

                <a href="#portfolio">
                    <ArrowDownwardTwoToneIcon className='icon'/>
                </a>
            </div>
        </div>
    )
}
