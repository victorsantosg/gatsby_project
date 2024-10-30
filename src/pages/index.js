import * as React from "react";
import Container from "../components/Container";
import Home from "../pages/Home";
import Header from "../components/Header";
import Projetos from "../pages/Projetos";
import Sobre from "../pages/Sobre";
import Contatos from "../pages/Contatos";
import Footer from "../components/Footer";


export default function IndexPage() {
  return (
    <>
      <Header />
      <Container>
        <Home />
        <Sobre />
        <Projetos />
        <Contatos />
      </Container>
      <Footer />
    </>
  );
}

export const Head = () => <title>Meu Blog - Home</title>;
