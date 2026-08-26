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

import ImgCard from './Components/ImgCard'
import Header from './Components/Header';
import Banner from './Components/Banner'; 
import Footer from './Components/Footer';
import Card from './Components/Card';

function App() {

  return (
    <>
      <Header title="Meu site"/> 

      <Header title="Site de Adoção - Dogs"/> 
      
      <Header title="Introdução React"/>

      <ImgCard caption="Nosso mascotinho"/>

      <Banner>
        <h1>Bem-vindo ao meu site</h1>
        <p>Aqui você pode fazer um doguinho feliz</p>

      </Banner>

      <Card />

      <Footer title="Fim da pagina"/>


     </>
  )
}

export default App;

