const Header = (props) => {

    const headerStyle = {
        background: '#2876a3',
        padding: '20px',
        textAlign: 'center',
        borderBottom: '2px solid #f7f7f7'
    }

    const titleStyle = {
        margin: 0,
        fontSize: '24px',
        color: '#f7f7f7'
    }

    return (
    
        <header style={headerStyle}>
            <h1 style={titleStyle}>{props.title}</h1>
        </header>

    )
}
export default Header