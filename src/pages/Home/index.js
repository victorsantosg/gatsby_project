import * as React from 'react'
import  { Link }  from "gatsby"
import * as styles from './Home.module.css'
import developerRed from '../../developer-red.svg'

function Home () {
    return (
        <>
            <section className={styles.home}>
                <div className={styles.apresentacao}>
                    <p>
                        Olá, sou <br />
                        <span>Victor Santos</span> <br />
                        Dev Full Stack
                    </p>
                    <Link to="/Sobre" className={`${styles.btn} ${styles.btn_red}`}>
                        Saiba mais
                    </Link>
                </div>
                <figure>
                    <img className={styles.img_home} src={developerRed} alt="imagem de Home" />
                </figure>
            </section>
        </>
    )
}

export default Home;
