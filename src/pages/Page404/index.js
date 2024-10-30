import React from 'react'
import * as styles from './Page404.module.css'

function Page404() {
    return (
        <>
            <h2 className={styles.titulo2}>Algo de errado não está certo</h2>
            <div className={styles.textos}>
                <span className={styles.texto_grande}>404</span> <br />
                <strong className={styles.texto_vermelho}>Página não Localizada</strong>
            </div>
        </>
    )
}

export default Page404;