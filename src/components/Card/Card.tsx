import React from "react";
import { Link } from "react-router-dom";
import { Skill } from "../../types/reduxType/store";
import Tag from "../Tag/Tag";
import style from "./card.module.scss";
interface CardProps {
  title: string;
  skills: { id: string; title?: string | undefined }[];
  uuid: string;
  refs?: React.LegacyRef<HTMLDivElement> | undefined | null;
}

const Card: React.FC<CardProps> = ({ title, skills, uuid, refs }) => {
  // @ts-ignore
  const skillsStorage = JSON.parse(localStorage.getItem("skills"));
  return (
    <div className={style.card} ref={refs}>
      <h5>{title}</h5>

      <p>Related Skills:</p>
      <div className={style.card__skills}>
        <ul>
          {skillsStorage &&
            Object.keys(skillsStorage).length > 0 &&
            skills.map((skill, idx) => (
              <Tag
                key={skill.id}
                text={skillsStorage.map((item: Skill) =>
                  item.id === skill.id ? item.attributes.name : null
                )}
                uuid={skill.id}
                bg="#c4c4c4"
                color="#000"
              />
            ))}

          {!skillsStorage &&
            skills.map((skill, idx) => (
              <Tag
                key={skill.id}
                text={skill?.title}
                uuid={skill.id}
                bg="#c4c4c4"
                color="#000"
              />
            ))}
        </ul>
      </div>

      <Link to={`/job/${uuid}`} className={style.card__link}>
        View Job details
      </Link>
    </div>
  );
};

export default Card;
