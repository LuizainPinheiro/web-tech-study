import Header from './Components/Header'
import Card from './Components/Card' 
import Footer from './Components/Footer'
import Banner from './Components/Banner'


function App() {

  return (
    <>
      <Header title="Meu site"/> 

      <Header title="Site de Adoção - Dogs"/> 
      
      <Header title="Introdução React"/>

      <Banner>
        <h1>Bem-vindo ao meu site</h1>
        <p>Aqui você pode fazer um doguinho feliz</p>

      </Banner>

      <Card />

      <Footer title="Fim da pagina"/>


     </>
  )
}

export default App
