import React, { useState, useEffect } from 'react'
import '../Cadastro/Cadastro.css'
import './News.css'
import { ToastContainer, toast } from 'react-toastify'
import '../../../node_modules/react-toastify/dist/ReactToastify.css'

export default function index() {

  //Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    nome: "",
    email: ""
  })

  //Função para atualizar o estado ao digitar o formulário
  const handleChange = (e) => {
    //Obter o elemento de entrada atual
    const { name, value } = e.target;
    //Extrair o valor e o nome do campo de entrada
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
  }

  //Função para enviar o formulário
  const handleSubmit = (e) => {
    e.preventDefault()

    if (formData.nome == "" || formData.telefone == "" || formData.email == "") {

      // Exibe uma mensagem de erro usando o react-toastify
      toast.error("Preencha todos os campos antes de enviar o formulário.")

      return false; // Impede o envio do formulário
    }

    //Enviando os dados para o backend como JSON
    fetch("http://localhost:3000/news", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Cadastrado!", data)
        //Limpa o formulario após o envio
        setFormData({
          nome: "",
          email: ""
        })
      })

  }

  //Exibir os usuários cadastrados
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/news")
      .then((response) => response.json())
      .then((data) => setNews(data))
      .catch((error) => console.log(error))
  }, [])

  return (
    <main className='container'>
      <h1 className='titulo-cadastro'>Cadastro de Usuários</h1>
      <form onSubmit={handleSubmit}>

        <article className='form-control'>
          <label htmlFor='nome'>Nome</label>
          <input
            type='text'
            name="nome"
            value={formData.nome}
            onChange={handleChange}
          />
        </article>

        <article className='form-control'>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </article>

        <button type="submit">Cadastrar</button>

        <ToastContainer />
      </form>

      <section className="usuarios">
        <h1>Lista de Usuários</h1>

        {news.map((m) => (
          <article className="content-usuarios" key={m.id}>
            <strong>Nome: {m.nome}</strong>
            <br />

            <strong>Email: {m.email}</strong>
            <br />
          </article>
        ))}
      </section>
    </main>
  )
}