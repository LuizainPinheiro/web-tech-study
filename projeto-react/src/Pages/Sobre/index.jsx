import React from 'react'
import '../../global.css'
import './Sobre.css'

export default function index() {
  return (
    <div className='app-container'>
      <section className='sobre-container'>
        <h1 className='sobre-title'>O que é o React?</h1>
        <p className='sobre-text'> 
          React é uma biblioteca JavaScript para construção de interfaces de usuário. Saiba tudo sobre React em nossa página inicial ou através do tutorial.
        </p>

        <h2 className='sobre-subtitle'>Pratique React</h2>
        <p className='sobre-text'>
          React foi pensado desde o início para ser adotado gradualmente e você pode usar menos ou mais da biblioteca de acordo com sua necessidade. Se você quer uma amostra do React, adicionar interatividade a uma página HTML simples ou iniciar uma aplicação React complexa, os links desta seção o ajudarão no início.
        </p>
      </section>
    </div>
  )
}