const Header = (props) => {
  const headerStyle = {
    background: '#9259c2',
    padding: '30px',
    textAlign: 'center',
    borderBottom: '3px solid #fadd38', 
    width: '100%'
  };

  const titleStyle = {
    margin: 0,
    fontSize: '30px',
    color: '#f7f7f7',
    fontFamily: '"Times New Roman", Georgia, serif' 
  };

  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>{props.title}</h1>
    </header>
  );
};

export default Header;