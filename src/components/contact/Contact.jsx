import './contact.scss'
import {useState} from 'react'
import { SpaRounded } from '@material-ui/icons';

export default function Contact() {

    const [message, setMessage] = useState(false)
    const handleSubmit = (e)=>{
        e.preventDefault();
        setMessage(true)
    }

    return (
        <div className='contact' id='contact'>
            <div className="left">
            <img src={process.env.PUBLIC_URL + '/assets/digitz.png'} />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form >
                    <input type="text" placeholder='Email' />
                    <textarea placeholder='Message'></textarea>
                    <button type='submit' onClick={handleSubmit}>Send</button>
                    
                    {message && <span>Thanks for your message</span>}
                </form>
            </div>
        </div>
    )
}

