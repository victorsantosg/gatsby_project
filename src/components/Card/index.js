import { FaCss3Alt, FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import * as styles from './Card.module.css'
import { BsArrowRight } from "react-icons/bs";
import React from 'react'

function Card({name, description, html_url, imageUrl}) {
    return (
        <section className={styles.card}>
            <img src="/static/img.jpg" className={styles.avatar} />
            <h3>{name}</h3> 
            <p>{description}</p>
            <div className={styles.card_footer}>
                <div className={styles.card_icones}>
                    <FaHtml5 />
                    <FaCss3Alt />
                    <FaJs />
                    <FaReact />
                </div>
                <a href={html_url} target="_blank" rel="nopenner noreferrer noreferrer" className={styles.botao}>
                    <BsArrowRight />
                </a>
            </div>
        </section>
    )
}

export default Card;