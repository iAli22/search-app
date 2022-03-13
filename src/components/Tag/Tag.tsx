import React from "react";
import { Link } from "react-router-dom";
import style from "./tag.module.scss";

interface TagProps {
  text?: string | undefined;
  color: string;
  bg: string;
  uuid: string;
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
      <span>{text ?? "skill"}</span>
    </Link>
  );
};

export default Tag;
