import React from "react";
import { Link } from "react-router-dom";
import style from "./tag.module.scss";

interface TagProps {
  text: string;
  color: string;
  bg: string;
  uuid: number;
}

const Tag: React.FC<TagProps> = ({ text, color, bg, uuid }) => {
  return (
    <Link
      to={`/skill/${uuid}`}
      className={style.tag}
      style={{
        color,
        background: bg,
      }}
    >
      <span>{text}</span>
    </Link>
  );
};

export default Tag;
