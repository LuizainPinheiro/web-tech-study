/*import Header from './Components/filmes/Header';
import Filme from './Components/filmes/Filme'; 
import Footer from './Components/filmes/Footer';

function App() {
  return (
    <div className="app-container">
      <Header title="FILME FAVORITO" />

      <main className="main-content">
        <Filme titulo="Enrolados (Tangled)"
        sinopse="O bandido mais procurado e charmoso do reino, Flynn Rider, se esconde em uma misteriosa torre e acaba virando refém de Rapunzel, uma jovem de cabelos dourados de 21 metros de comprimento que busca a liberdade."
        lancamento="2010"
        genero="Animação / Aventura / Comédia"
        estudio="Walt Disney Pictures"
/>
      </main>

      <Footer title="Siga @vejoenfimaluzbrilhar nas redes sociais" />
    </div>
  );
}

*/

/*import ImgCard from './Components/ImgCard'
import Header from './Components/Header'
import Banner from './Components/Banner'; 
import Footer from './Components/Footer';
import Card from './Components/Card';
import Count from './Components/Count';
import Box from './Components/Box'

function App() {

  return (
    <>
      <Header title="Site de Adoção - Dogs"/> 

      <Count />

      <Box/>

      <ImgCard caption="Nosso mascotinho"/>

      <Banner>
        <h1>Bem-vindo ao meu site</h1>
        <p>Aqui você pode fazer um doguinho feliz</p>

      </Banner>

      <Card />

      <Footer title="Fim da pagina"/>


     </>
  )
}*/

import React from 'react'
import Header from './Components/ExComida/Header'
import Box from './Components/ExComida/Box'
import Footer from './Components/ExComida/Footer'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Header title="Comida caseira - Receitas" />

      <main className="main-content">
        <Box />
      </main>

      <Footer title="Fim da pagina" />
    </div>
  )
}

export default App