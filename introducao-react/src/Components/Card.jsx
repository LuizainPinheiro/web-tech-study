import "./Card.css"
//Importe da imagem
import imgCard from "../assets/img-card.jpg";

const Card = () => {


return (
        <section>
            <article className="card">
                <img src={imgCard} className="img-card" />
                <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, neque!</p>
            </article>
            <hr />
        </section>
    )
}

export default Card