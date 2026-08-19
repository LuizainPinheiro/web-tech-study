const Banner = (props) => {

        const titleStyle = {
        margin: 0,
        fontSize: '20px',
        color: '#151550',
        textAlign: 'center'
    }

    /*
        O children permite passar e renderizar 
        o contéudo dinâmico dentro de um componente em React
   */

    return (
        
        <div>
            <h1 style={titleStyle}> {props.children}</h1>
            
        </div>


    )
}

export default Banner


