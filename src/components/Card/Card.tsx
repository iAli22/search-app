import React from "react";
import { Link } from "react-router-dom";
import Tag from "../Tag/Tag";
import style from "./card.module.scss";
interface CardProps {
  title: string;
  skills: { id: number; title: string }[];
  uuid: number;
}

const Card: React.FC<CardProps> = ({ title, skills, uuid }) => {
  return (
    <div className={style.card}>
      <h5>{title}</h5>

      <p>Related Skills:</p>
      <div className={style.card__skills}>
        <ul>
          {skills.map((skill, idx) => (
            <Tag
              key={idx}
              text={skill.title}
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
