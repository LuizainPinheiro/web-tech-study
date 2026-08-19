import Header from './Components/filmes/Header';
import Filme from './Components/filmes/Filme'; 
import Footer from './Components/filmes/Footer';

function App() {
  return (
    <div className="app-container">
      <Header title="FILME FAVORITO" />

      <main className="main-content">
        <Filme />
      </main>

      <Footer title="Siga @vejoenfimaluzbrilhar nas redes sociais" />
    </div>
  );
}

export default App;

/*
import ImgCard from './Components/ImgCard'


function App() {

  return (
    <>
      /*<Header title="Meu site"/> 

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
*/



