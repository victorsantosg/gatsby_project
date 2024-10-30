import React from 'react'
import { GoMail } from "react-icons/go";
import * as styles from "./Contatos.module.css"
import { BsInstagram, BsGithub, BsLinkedin, BsTelephone } from "react-icons/bs"



function Contatos() {
    return (
            <section className={styles.contatos}>
                <h2>Contatos</h2>
                <h3>Entre em contato</h3>
                <p>Para que possamos conversar mais sobre</p>
                <div className={styles.icones}>

                    <a href='mailto:victoorsaantos16@gmail.com' target='_blank'
                        rel='noopener noreferrer'>
                        <GoMail className={styles.icone} />
                    </a>

                    <a href='https://www.instagram.com/victorsantosg_' target='_blank'
                        rel='noopener noreferrer'>
                        <BsInstagram className={styles.icone} />
                    </a>

                    <a href='https://api.whatsapp.com/send?phone=5585999556385&text=Ol%C3%A1!%20Gostaria%20de%20conversar%20contigo.' target='_blank'
                        rel='noopener noreferrer'>
                    <BsTelephone className={styles.icone} />
                    </a>

                    <a href='https://github.com/victorsantosg' target='_blank'
                        rel='noopener noreferrer'>
                    <BsGithub className={styles.icone} />
                    </a>

                    <a href='https://www.linkedin.com/in/victor-santos-0a86021b7/' target='_blank'
                        rel='noopener noreferrer'>
                    <BsLinkedin className={styles.icone} />
                    </a>
                </div>
            </section>
        
    )
}

export default Contatos;