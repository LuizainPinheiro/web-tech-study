import React from 'react'
import './Box.css'

function index() {

    const box = [

    {
        img: "https://teamodoce.com.br/wp-content/uploads/2026/02/Bombom-de-Bolo-de-Cenoura-para-a-Pascoa.webp",
        title: "Bolo de Cenoura com Chocolate",
        textBox: "Massa fofinha feita no liquidificador com cobertura cremosa e crocante de chocolate.",
        link: "/receitas/bolo-de-cenoura"
    },
    {
        img: "https://receitadaboa.com.br/wp-content/uploads/2024/04/iStock-1460067431.jpg",
        title: "Strogonoff de Frango Cremoso",
        textBox: "Peito de frango suculento envolvido em molho de creme de leite, pimentas e batata palha.",
        link: "/receitas/strogonoff-de-frango"
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS9Sm-ofua9YE-D_ffFMPB1FmOyaZFYU6945badFWWX809wUW604WxgGQ&s=10",
        title: "Pudim de Leite Condensado",
        textBox: "Sobremesa clássica assada em banho-maria com calda dourada e aveludada de caramelo.",
        link: "/receitas/pudim-de-leite"
    },
    {
        img: "https://receitadaboa.com.br/wp-content/uploads/2024/09/iStock-13432256121.jpg",
        title: "Empadão Cremoso",
        textBox: "Empada de frango suculento envolvido em molho de creme de leite, pimentas.",
        link: "/receitas/empadao-frango"
    }
]


  return (
    <div className='container'>
        {box.map((box, index) => {
            console.log(index)
            return (
                <div className='boxReceita' key={index}>
                    <img src={box.img}/>
                    <h2>{box.title}</h2>
                    <p>{box.textBox}</p>
                    <a href='#'>{box.link}</a>
                </div>)
        })}
    

    </div>
  )
}

export default index