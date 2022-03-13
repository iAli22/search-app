import React from "react";
import { Link } from "react-router-dom";
import { Job, Skill } from "../../types/reduxType/store";
import style from "./relatedCard.module.scss";
interface RelatedCardProps {
  storageName: string;
  uuid: string;
}

const RelatedCard: React.FC<RelatedCardProps> = ({ storageName, uuid }) => {
  const skillsStorage = JSON.parse(
    // @ts-ignore
    localStorage.getItem(storageName.toLowerCase())
  );

  return (
    <>
      {skillsStorage && Object.keys(skillsStorage).length > 0 && (
        <>
          {skillsStorage.map((storage: Job | Skill) => {
            if (storage.id === uuid) {
              return (
                <div className={style.relatedCard} key={storage.id}>
                  <h4>
                    <Link
                      to={
                        storageName === "Jobs"
                          ? `/job/${storage.id}`
                          : `/skill/${storage.id}`
                      }
                    >
                      {storage.attributes?.name ?? storage.attributes?.title}
                    </Link>
                  </h4>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Aut accusamus, totam aspernatur tempora ab assumenda atque
                    dolore nihil laudantium quos.
                  </p>

                  <ul className={style.attributes}>
                    <li>
                      <b>importance</b>:
                      <span>{storage.attributes.importance ?? "-"}</span>
                    </li>
                    <li>
                      <b>level</b>:
                      <span>{storage.attributes.level ?? "-"}</span>
                    </li>
                    <li>
                      <b>name</b>:<span>{storage.attributes.name ?? "-"}</span>
                    </li>
                    <li>
                      <b>type</b>:<span>{storage.attributes.type ?? "-"}</span>
                    </li>
                  </ul>
                </div>
              );
            } else {
              return null;
            }
          })}
        </>
      )}

      {!skillsStorage && (
        <div className={style.relatedCard}>
          <h4>
            <Link to={"/"}>title</Link>
          </h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
            accusamus, totam aspernatur tempora ab assumenda atque dolore nihil
            laudantium quos.
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
      )}
    </>
  );
};

export default RelatedCard;
