import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import * as styles from "./Projetos.module.css";
import Layout from "../../components/Layout";

function Projetos() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const buscarRepositories = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/victorsantosg/repos?page=1&per_page=50"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setRepositories(data);
      } catch (error) {
        console.error("Erro ao buscar repositórios:", error);
      }
    };

    buscarRepositories();
  }, []);

  return (
    <Layout>
      <section className={styles.projetos}>
        <h2>Projetos</h2>
        {repositories.length > 0 ? (
          <section className={styles.lista}>
            {repositories.map((repo) => (
              <Card
                key={repo.id}
                name={repo.name}
                descrption={repo.description}
                html_url={repo.html_url}
              />
            ))}
          </section>
        ) : (
          <p>Carregando repositórios...</p>
        )}
      </section>
    </Layout>
  );
}

export default Projetos;
