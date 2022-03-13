import React from "react";
import { Link } from "react-router-dom";
import style from "./relatedCard.module.scss";
interface RelatedCardProps {
  storageName: string;
}

const RelatedCard: React.FC<RelatedCardProps> = ({ storageName }) => {
  return (
    <div className={style.relatedCard}>
      <h4>
        <Link to={"/"}>title</Link>
      </h4>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut accusamus,
        totam aspernatur tempora ab assumenda atque dolore nihil laudantium
        quos.
      </p>

      <ul className={style.attributes}>
        <li>
          <b>test</b>:<span>231</span>
        </li>
        <li>
          <b>test</b>:<span>231</span>
        </li>
        <li>
          <b>test</b>:<span>231</span>
        </li>
        <li>
          <b>test</b>:<span>231</span>
        </li>
      </ul>
    </div>
  );
};

export default RelatedCard;
