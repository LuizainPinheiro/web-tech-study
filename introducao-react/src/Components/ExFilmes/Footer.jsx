const Footer = ({ title }) => {
  const footerStyle = {
    backgroundColor: '#9259c2',
    borderTop: '3px solid #ffd700',
    padding: '15px 0',
    width: '100%',
    textAlign: 'center',
    marginTop: 'auto'
  };

  const titleStyle = {
    margin: 0,
    fontSize: '16px',
    color: '#ffffff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontFamily: 'sans-serif'
  };

  return (
    <footer style={footerStyle}>
      <h1 style={titleStyle}>{title}</h1>
    </footer>
  );
};

export default Footer;