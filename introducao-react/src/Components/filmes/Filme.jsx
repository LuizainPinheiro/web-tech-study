import imgCard from "../../assets/enrolados.jpg";

const Filme = () => {
  const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '40px',
  maxWidth: '1200px',
  margin: '40px auto',
  padding: '0 20px'
};

const imgStyle = {
  flex: '2', 
  width: '100%',
  maxWidth: '650px',
  height: 'auto',
  borderRadius: '8px'
};

const contentStyle = {
  flex: '1', 
  color: '#333'
};

const titleStyle = {
  color: '#8e55bd',
  fontSize: '30px',
  margin: '0 0 10px 0'
};

const textStyle = {
  lineHeight: '1.5',
  color: '#555',
  fontSize: '20px'
};

const listStyle = {
  listStyle: 'none',
  padding: 0,
  marginTop: '15px',
  fontSize: '20px'
};

  return (
    <section style={containerStyle}>
      <img src={imgCard} alt="Enrolados" style={imgStyle} />


      <div style={contentStyle}>
        <h2 style={titleStyle}>Enrolados (Tangled)</h2>
        <p style={textStyle}>
          O bandido mais procurado e charmoso do reino, Flynn Rider, se esconde em uma misteriosa torre e acaba virando refém de Rapunzel, uma jovem de cabelos dourados de 21 metros de comprimento que busca a liberdade.
        </p>

        <ul style={listStyle}>
          <li><strong>Lançamento:</strong> 2010</li>
          <li><strong>Gênero:</strong> Animação / Aventura / Comédia</li>
          <li><strong>Estúdio:</strong> Walt Disney Pictures</li>
        </ul>
      </div>
    </section>
  );
};

export default Filme;