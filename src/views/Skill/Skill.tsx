import React from "react";
import { SearchHistory } from "../../components";
import { Details } from "../../containers";
import { SecondaryLayout } from "../../layouts";
import style from "./skill.module.scss";

interface SkillProps {}

const Skill: React.FC<SkillProps> = () => {
  return (
    <SecondaryLayout>
      <h3>title</h3>
      <div className={style.skill}>
        <Details type="Skills" />
        <SearchHistory />
      </div>
    </SecondaryLayout>
  );
};

export default Skill;
