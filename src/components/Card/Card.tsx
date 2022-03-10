import React from "react";
import style from "./card.module.scss";
interface CardProps {}

const Card: React.FC<CardProps> = () => {
  return <div className={style.card}>Card</div>;
};

export default Card;
