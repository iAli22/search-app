import React from "react";
import { Container, Navbar } from "../../components";
import { SearchContainer } from "../../containers";
import style from "./mainLayout.module.scss";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <main className={style.layout}>
      <Navbar />
      <SearchContainer />

      <section className={style.layout__page}>
        <Container>{children}</Container>
      </section>
    </main>
  );
};

export default MainLayout;
