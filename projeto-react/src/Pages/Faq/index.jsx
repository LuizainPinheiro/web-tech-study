import '../../global.css'
import './Faq.css'

import { useEffect, useState } from "react"

export default function index() {
  const [faq, setFaq] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:3000/faq")
        .then((response)=> response.json())
        .then((data) => setFaq(data))
        .catch((error) => console.log(error))
    }, [])
  return (


    <div className='app-container'>
      <section className='faq-container' >
        <h1 className='faq-title'>Perguntas Frequentes</h1>

        {faq.map((faqs)=> (
        <div className='faq-list' key={faqs.id} >
          <div className='faq-item'>
            <h2 className='faq-questao'>{faqs.pergunta}</h2>
            <p className='faq-resposta'>{faqs.resposta}</p>
          </div>
        </div>

        ))}
      
      </section>

      </div>
   
       
  )
}