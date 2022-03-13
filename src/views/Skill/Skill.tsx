import React, { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SearchHistory } from "../../components";
import Spinner from "../../components/Spinner/Spinner";
import { Details } from "../../containers";
import useFetch from "../../helper/useFetch";
import { SecondaryLayout } from "../../layouts";
import { Skill as SkillType } from "../../types/reduxType/store";
import style from "./skill.module.scss";

interface SkillProps {}

const Skill: React.FC<SkillProps> = () => {
  const { uuid } = useParams();
  const { isLoading, data } = useFetch(`/skill/${uuid}`);

  const setSkillsStorage = useCallback(() => {
    // every new job will put it in localStorage to match it with related

    // @ts-ignore
    const oldSkills = JSON.parse(localStorage.getItem("skills"));

    if (Object.keys(data).length > 0) {
      if (oldSkills) {
        // if item already there and item number
        const found = oldSkills.some(
          (item: SkillType) => item.id === data.skill.id
        );
        if (!found) {
          localStorage.setItem(
            "skills",
            JSON.stringify([...oldSkills, data.skill])
          );
        }
      } else {
        localStorage.setItem("skills", JSON.stringify([data.skill]));
      }
    }
  }, [data]);

  setSkillsStorage();

  // useEffect(() => {
  //   setSkillsStorage();
  // }, [setSkillsStorage]);

  return (
    <SecondaryLayout>
      {isLoading && data.length === 0 ? (
        <Spinner />
      ) : (
        <>
          <h3>{data.skill?.attributes?.name}</h3>
          <div className={style.skill}>
            <Details type="Jobs" data={data.skill?.relationships?.jobs} />
            <SearchHistory />
          </div>
        </>
      )}
    </SecondaryLayout>
  );
};

export default Skill;
