import React, {useState} from 'react'

import './works.scss'



export default function Works() {

    const[currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
          id: "1",
          icon: "../public/assets/web.png",
          title: "Web Design",
          desc:
            "Demonstrating my Web Dev skills with Wordpress and front end frameworks ",
          img:
            "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
        },
        {
          id: "2",
          icon: "./assets/globe.png",
          title: "Front End Applications",
          desc:
            "Demostrating my front end skills using Javascript frameworks",
          img:
            "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
        },
        {
          id: "3",
          icon: "./assets/writing.png",
          title: "Back End Applications",
          desc:
            "Demostrating my Back End skills using Django, Flask and Laravel",
          img:
            "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
        },
      ];

      const clickSlider = (side) => {
          side === "left"      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
          : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
      };

    return (
        <div className='works' id='works'>
            <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                {data.map(d =>(<div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.img} alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                            </div>
                        </div>
                        <div className="right">
                            <img src={process.env.PUBLIC_URL + '/assets/curves.png'} alt="" />
                        </div>
                    </div>
                </div>))}
            </div>
            <img src={process.env.PUBLIC_URL + '/assets/arrow.png'} 
            className='arrow left' alt="" onClick={()=>clickSlider('left')} />
            <img src={process.env.PUBLIC_URL + '/assets/arrow.png'} 
            className='arrow right' alt="" onClick={()=>clickSlider()} />
            
        </div>
    )
}
