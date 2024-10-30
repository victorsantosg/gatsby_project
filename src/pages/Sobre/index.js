import React from 'react'
import * as styles from './Sobre.module.css'
import avatar from './images/victor.jpg'
import html from './images/icon-html.svg'
import css from './images/icon-css.svg'
import js from './images/icon-js.svg'
import react from './images/icon-react.svg'
import node from './images/icon-node.svg'
import sql from './images/icon-sql.svg'
import Header from '../../components/Header'

function Sobre() {
    return (
        <section className={styles.sobre}>

            <div className={styles.bio}>
                <img src={avatar} alt="Avatar" className={styles.Sobre} />
                <div className={styles.textos}>
                    <h2>Sobre</h2>
                    <p>
                        Sou <span>Victor Santos</span> <br />
                        <strong>Dev Full Stack</strong>
                    </p>

                    <p>Trabalho com desenvolvimento desde 2023</p>

                    <p>Sou apaixonado por trasformar ideias em realidade digital</p>

                    <p>Com foco em aplicações envolvendo React.js e Vite.js</p>
                </div>
            </div>

            <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.icones}>
                    <img src={html} alt="icone do HTML" />
                    <img src={css} alt="icone do CSS" />
                    <img src={js} alt="icone do JS" />
                    <img src={react} alt="icone do REACT" />
                    <img src={node} alt="icone do NODE" />
                    <img src={sql} alt="icone do SQL" />
                </div>
            </div>
        </section>
    )
}

export default Sobre;