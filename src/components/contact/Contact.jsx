import './contact.scss'
import {useState, useRef} from 'react'
import emailjs from 'emailjs-com';

export const Contact = () => {
    const formRef = useRef();
    
    const [message, setMessage] = useState(false)
   
    const handleSubmit = (e)=>{
        e.preventDefault();
        setMessage(true)
        


        emailjs.sendForm('service_cziqu2p', 'template_yj85jfn', formRef.current, 'user_jBQdfCqvbsI7nwkVi1TIl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }

    return (
        <div className='contact' id='contact'>
            <div className="left">
            <img src={process.env.PUBLIC_URL + '/assets/digitz.png'} />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form ref={formRef} onSubmit={handleSubmit} >
                    <input type="text" placeholder='Name' name='user_name' />
                    <input type="text" placeholder='Email' name='user_email' />
                    <textarea placeholder='Message' name='message'></textarea>
                    <button type='submit' >Send</button>
                    
                    {message && <span>Thanks for your message</span> }
                </form>
            </div>
        </div>
    )
}

export default Contact;

