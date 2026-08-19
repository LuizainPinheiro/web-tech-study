import "./ImgCard.css"

import imgCard from "../assets/img-dog.jpg";

const ImgCard = (props) => {

    return (
        
        <div className="image-card">
            <img src={imgCard} alt="props.caption || 'imagem'" className="image-card-img"/>
            <p className="image-card-caption">{props.caption}</p>
            
        </div>

    )
}

export default ImgCard


