import * as React from "react";
import Layout from "../components/Layout";
import Home from "../pages/Home";

export default function IndexPage() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export const Head = () => <title>Meu Blog - Home</title>;