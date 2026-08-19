import "./Card.css"
//Importe da imagem
import imgCard from "../assets/img-card.jpg";

const Card = () => {


return (
        <section>
            <article className="card">
                <img src={imgCard} className="img-card" />
                <p className="card-text">Conheça o Trovão!</p>
                <p className="card-text">Esse cachorrinho apaixonante.</p>
            </article>
            <hr />
        </section>
    )
}

export default Card