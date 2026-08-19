const Footer = (props) => {
    
    const titleStyle = {
        margin: 0,
        fontSize: '24px',
        color: '#4141c9',
        textAlign: 'center'
    }

    console.log(props)
    return (
    
        <footer>
            <h1 style={titleStyle}>{props.title}</h1>
        </footer>

    )
}
export default Footer