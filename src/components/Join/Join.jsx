import React from 'react'
import { useRef } from 'react'
import './Join.css'
import emailjs, { send } from '@emailjs/browser'
const Join = () => {

    const form=useRef(); 
    const sendEmail = (e) => {
        e.preventDefault(); 
        emailjs.sendForm('service_f1v3pci', 'template_k6ndqvd', form.current, 'JrcAPV8pj_DtbsTPr')
          .then((result) => {
          
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    

  return (
    <div className="Join" id='join-us'>
        <div className="left-j">
            <hr />
            <div>
                <span  className='stroke-text'>READY TO</span>
                <span>LEVEL UP!</span>
            </div>

            <div>
                <span>YOUR BODY</span>
                <span className='stroke-text'>WITH US?</span>
            </div>
        </div>


        {/* right side  */}
        <div className="right-j">
            <form ref={form} className="email-container" onSubmit={sendEmail}>
<input type="email" name='user_email' placeholder='Enter your email' />
  <button className='btn btn-j'>Join Now</button>
            </form>
        </div>

    </div> 
  )
}

export default Join