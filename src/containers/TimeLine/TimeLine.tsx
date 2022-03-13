import React, { ReactNode, useCallback, useRef } from "react";
import { useSelector } from "react-redux";
import { Card } from "../../components";
import Spinner from "../../components/Spinner/Spinner";
import { Job, Store } from "../../types/reduxType/store";
import style from "./timeLine.module.scss";

interface TimeLineProps {
  children?: ReactNode;
  data: Job[];
  loadMore?: (cursor: number) => void;
}
const TimeLine: React.FC<TimeLineProps> = ({ data, children, loadMore }) => {
  const hasMore = useSelector((state: Store) => state.jobs.hasMore);
  const cursor = useSelector((state: Store) => state.jobs.cursor);
  const loading = useSelector((state: Store) => state.jobs.loading);
  // infinity scroll
  let observer = useRef<any>(null);
  const lastCardNode = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          // get more data
          if (loadMore && hasMore) {
            loadMore(cursor);
          }
        }
      });

      if (node) observer.current.observe(node);
    },
    [hasMore, loadMore, cursor]
  );

  return (
    <>
      <div className={style.timeLine}>
        <div className={style.timeLine__grid}>
          {data.map((job, index) => {
            if (data.length === index + 1) {
              return (
                <Card
                  refs={lastCardNode}
                  key={job.id}
                  uuid={job.id}
                  skills={job.relationships.skills}
                  title={job.attributes.title}
                />
              );
            } else {
              return (
                <Card
                  key={job.id}
                  uuid={job.id}
                  skills={job.relationships.skills}
                  title={job.attributes.title}
                />
              );
            }
          })}
        </div>

        {children && <>{children}</>}
      </div>

      {loading && (
        <div className={style.more}>
          <Spinner />
        </div>
      )}
    </>
  );
};

export default TimeLine;
