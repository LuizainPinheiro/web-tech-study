import imgCard from "../../assets/enrolados.jpg";

const Filme = (props) => {
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
      <img src={props.imagem || imgCard} alt={props.titulo} style={imgStyle} />

      <div style={contentStyle}>
        <h2 style={titleStyle}>{props.titulo}</h2>
        <p style={textStyle}>{props.sinopse}</p>

        <ul style={listStyle}>
          <li><strong>Lançamento:</strong> {props.lancamento}</li>
          <li><strong>Gênero:</strong> {props.genero}</li>
          <li><strong>Estúdio:</strong> {props.estudio}</li>
        </ul>
      </div>
    </section>
  );
};

export default Filme;