import React from "react";
import { SearchTitle } from "../../components";
import { TimeLine } from "../../containers";
import { MainLayout } from "../../layouts";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <MainLayout>
      <SearchTitle title="Test" count={200} />
      <TimeLine />
    </MainLayout>
  );
};

export default Home;
