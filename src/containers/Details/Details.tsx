import React from "react";
import RelatedCard from "../../components/RelatedCard/RelatedCard";
import style from "./details.module.scss";
interface DetailsProps {
  type: string;
}

const Details: React.FC<DetailsProps> = ({ type }) => {
  return (
    <div className={style.details}>
      <div className={style.details__related}>
        <h4>Related {type}</h4>
        <RelatedCard />
      </div>
    </div>
  );
};

export default Details;
