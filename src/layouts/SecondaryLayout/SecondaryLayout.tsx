import React from "react";
import { Container, Navbar } from "../../components";
import style from "./secondaryLayout.module.scss";

interface SecondaryLayoutProps {
  children: React.ReactNode;
}

const SecondaryLayout: React.FC<SecondaryLayoutProps> = ({ children }) => {
  return (
    <main className={style.layout}>
      <Navbar />

      <section className={style.layout__page}>
        <Container>{children}</Container>
      </section>
    </main>
  );
};

export default SecondaryLayout;
