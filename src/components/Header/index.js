import { Link } from 'gatsby'
import * as styles from '../Header/Header.module.css'
import React from 'react'

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
                <span>VictorSantos.dev</span>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Sobre">Sobre</Link>
                <Link to="/Projetos">Projetos</Link>
                <Link to="/Contatos">Contatos</Link>
            </nav>
        </header>
    )
}

export default Header;