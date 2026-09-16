import React from 'react'
import '../../global.css'
import './Sobre.css'

import { useEffect, useState } from "react"

export default function index() {
   const [sobre, setSobre] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:3000/sobre")
        .then((response)=> response.json())
        .then((data) => setSobre(data))
        .catch((error) => console.log(error))
    }, [])
  return (

    <div className='app-container'>
        {sobre.map((s)=> (
          <section className='sobre-container' key={s.id}>
            <h1 className='sobre-title'>{s.titulo}</h1>
            <p className='sobre-text'>{s.introducao}</p>

            <h2 className='sobre-subtitle'>{s.subtitulo}</h2>
            <p className='sobre-text'>{s.descricao}</p>
          </section>
        ))}
    </div>
  )
}