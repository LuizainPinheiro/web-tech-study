import React from 'react'
import '../../global.css'
import './Saq.css'

export default function Saq() {
  return (
    <div className='app-container'>
      <section className='saq-container'>
        <h1 className='saq-title'>Perguntas Frequentes</h1>

        <div className='saq-list'>
          <div className='saq-item'>
            <h2 className='saq-questao'>O que é o React?</h2>
            <p className='saq-resposta'>
              O React é uma biblioteca JavaScript de código aberto focada na criação de interfaces de usuário de forma rápida e modular.
            </p>
          </div>

          <div className='saq-item'>
            <h2 className='saq-questao'>Preciso saber JavaScript para aprender React?</h2>
            <p className='saq-resposta'>
              Sim. É recomendado entender os conceitos básicos do JavaScript (como variáveis, funções, métodos de array e ES6) antes de iniciar.
            </p>
          </div>

          <div className='saq-item'>
            <h2 className='saq-questao'>O React é gratuito para uso comercial?</h2>
            <p className='saq-resposta'>
              Sim, o React é mantido sob a licença MIT, o que permite o uso gratuito em projetos pessoais e comerciais.
            </p>
          </div>

          <div className='saq-item'>
            <h2 className='saq-questao'>O que é um componente no React?</h2>
            <p className='saq-resposta'>
              Componentes são blocos de código reutilizáveis e independentes que retornam o conteúdo HTML a ser exibido na tela.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}