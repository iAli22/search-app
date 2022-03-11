import React, { ReactNode } from "react";
import { Card } from "../../components";
import style from "./timeLine.module.scss";

interface TimeLineProps {
  children?: ReactNode;
}
const TimeLine: React.FC<TimeLineProps> = ({ children }) => {
  return (
    <div className={style.timeLine}>
      <div className={style.timeLine__grid}>
        <Card
          uuid={1}
          skills={[
            {
              title: "operation monitoring",
              id: 1,
            },
            {
              title: "operation monitoring",
              id: 3,
            },
            {
              title: "operation monitoring",
              id: 2,
            },
          ]}
          title="test title"
        />
        <Card
          uuid={1}
          skills={[
            {
              title: "operation monitoring",
              id: 1,
            },
            {
              title: "operation monitoring",
              id: 3,
            },
            {
              title: "operation monitoring",
              id: 2,
            },
          ]}
          title="test title"
        />
        <Card
          uuid={1}
          skills={[
            {
              title: "operation monitoring",
              id: 1,
            },
            {
              title: "operation monitoring",
              id: 3,
            },
            {
              title: "operation monitoring",
              id: 2,
            },
          ]}
          title="test title"
        />
        <Card
          uuid={1}
          skills={[
            {
              title: "operation monitoring",
              id: 1,
            },
            {
              title: "operation monitoring",
              id: 3,
            },
            {
              title: "operation monitoring",
              id: 2,
            },
          ]}
          title="test title"
        />
        <Card
          uuid={1}
          skills={[
            {
              title: "operation monitoring",
              id: 1,
            },
            {
              title: "operation monitoring",
              id: 3,
            },
            {
              title: "operation monitoring",
              id: 2,
            },
          ]}
          title="test title"
        />
        <Card
          uuid={1}
          skills={[
            {
              title: "operation monitoring",
              id: 1,
            },
            {
              title: "operation monitoring",
              id: 3,
            },
            {
              title: "operation monitoring",
              id: 2,
            },
          ]}
          title="test title"
        />
      </div>

      {children && <>{children}</>}
    </div>
  );
};

export default TimeLine;
