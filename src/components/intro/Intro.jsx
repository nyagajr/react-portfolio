import React from 'react'
import './intro.scss'
import {ArrowDownwardTwoTone as ArrowDownwardTwoToneIcon} from '@material-ui/icons';
import { init } from 'ityped'
import { useEffect, useRef } from'react'


export default function Intro() {
    const headerTxt = useRef()
    useEffect(() => {
        init(headerTxt.current, 
            { showCursor: false, 
                typeSpeed:  300,
              backDelay:  90000,
              strings: ['Benson Nyaga' ] })
    }, [])

    const tickerTxt = useRef()
    useEffect(() => {
        init(tickerTxt.current, 
            { showCursor: true, 
                typeSpeed:  100,
                startDelay: 5000,
              backDelay:  1000,
              strings: ['Web Development','Back-end Development', 'Front-end Development' ] })
    }, [])

    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="dPic">
                <img src={process.env.PUBLIC_URL + '/assets/nyagz.png'} />
                </div>
            </div>

            <div className='right'>
                <div className="wrapper" >
                    <h2>Holla, I am</h2>
                    <h1 ref={headerTxt}></h1>
                    <h3>Software Developer</h3>
                    <h4 className='typer'>Specialized in: <b><span ref={tickerTxt}></span></b></h4>
                </div>

                <a href="#portfolio">
                   
                </a>
            </div>
        </div>
    )
}
