import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

export default function index() {
  return (

    <nav>
        <ul className="menu">
          <li>
            <Link to='/'>
                Home
            </Link>
          </li>

            <li>
             <Link to='/sobre'>
                Sobre
            </Link>
            </li>

            <li>
              <Link to='/saq'>
                SAQ
              </Link>
            </li>

        </ul>
      </nav> 

  )
}
