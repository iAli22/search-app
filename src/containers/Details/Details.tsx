import React from "react";
import RelatedCard from "../../components/RelatedCard/RelatedCard";
import { Job } from "../../types/reduxType/store";
import style from "./details.module.scss";
interface DetailsProps {
  type: string;
  data: Job[];
}

const Details: React.FC<DetailsProps> = ({ type, data }) => {
  return (
    <div className={style.details}>
      <div className={style.details__related}>
        <h4>Related {type}</h4>

        {data?.map((item) => (
          <RelatedCard key={item.id} storageName={type} />
        ))}
      </div>
    </div>
  );
};

export default Details;
