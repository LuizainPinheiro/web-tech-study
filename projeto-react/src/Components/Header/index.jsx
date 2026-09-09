import "./Header.css"
import React from 'react'

export default function index(props) {
  return (
    <header className='header'>
      <section className='title-container'>
        <h1 className='title'>{props.title}</h1>
        <h2 className="subtitle">{props.subtitle}</h2>
      </section>

      <nav className="header-menu">
        <ul>
          <li><a href={props.homeUrl}>Inicio</a></li>
          <li><a href={props.aboutUrl}>Sobre</a></li>
        </ul>
      </nav>
    </header>
  )
}
