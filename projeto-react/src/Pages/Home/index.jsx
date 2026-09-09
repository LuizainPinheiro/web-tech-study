import React from 'react'
import Header from '../../Components/Header' 
import Box from '../../Components/Box'
import Footer from '../../Components/Footer' 
import img1 from '../../assets/img/img.png'
import img2 from '../../assets/img/img2.png'

export default function index(props) {
  return (
    <div className='app-container'>
      
      <Header 
        title="Projeto React"
        subtitle="Meu primeiro site em React"
      />
    
      <main className='main-content container'>
        <section className='d-flex'>
          <Box title='Titulo do componente' description='Exemplo' imagem={img1} />
          <Box title='Titulo do componente 2' description='Exemplo 2' imagem={img2} />
        </section>
      </main>
  
      <Footer 
        title="MeuSite"
        description="Construindo experiências incríveis na web com React."
        githubUrl="https://github.com"
        linkedinUrl="https://linkedin.com"
        copyright="MeuSite. Todos os direitos reservados."
      />

    </div>
  );
}
