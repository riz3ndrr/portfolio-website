import {RevealOnScroll} from "../RevealOnScroll"
import {useRef, useState} from "react"

import emailjs from '@emailjs/browser';

export const Contact = () => {
  return (
    <RevealOnScroll>
    <section id="contact" className = "relative min-h-screen h-auto py-20 justify-center">
      <div className = "max-w-5xl mx-auto px-4">
      <h2 className = "text-5xl font-bold text-center font-mono mb-8 text-white">Contact</h2>
      
        <div className = "text-4xl text-center">
         Flick a message if you want to have a chat 
        </div>

        <ContactForm/>


      </div>
    </section>
    </RevealOnScroll>
  )
}



export const ContactForm = () => {
  const form = useRef();
  const [sending, setSend] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();
    setSend(true)

    emailjs
      .sendForm('service_dz58bth', 'template_ew1jbc9', form.current, {
        publicKey: 'DbUfrS3beh_AGXJVC',
      })
      .then(
        () => {
          form.current.reset()
          console.log('SUCCESS!');
          setSend(false)

        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className = "w-2xl text-2xl mx-auto">
      <div className = "flex flex-col sm:flex-row gap-3 justify-center">
        
        <div className = "flex flex-col w-auto">
          <label required minLength = {2} className ="text-white">Name</label>
          <input className = "bg-white text-black" type="text" name="user_name" />
        </div>

        <div className = "flex flex-col w-auto">
          <label className ="text-white">Email</label>
          <input className = "bg-white  text-black" required minLength = {2} type="email" name="user_email" />
        </div>

      </div>

      <div className = "flex flex-col my-5 w-auto">
        <label className ="text-white">Message</label>
        <textarea minLength = {10} className = "bg-white w-auto text-black" name="message" />
      </div>
      
      <div className ="w-auto flex  justify-center">
        
        <input type="submit" value="Send" disabled = {sending} className="bg-blue-800 py-2 px-5 rounded-xl hover:-translate-y-1 transition cursor-pointer" />
      </div>
    </form>
  );
};
