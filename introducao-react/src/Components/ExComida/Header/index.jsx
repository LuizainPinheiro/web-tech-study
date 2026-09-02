import "./Header.css"

const Header = (props) => {

    return (
    
        <header className="headerStyle">
            <h1 className="titleStyle">{props.title}</h1>
        </header>

    )
}

export default Header