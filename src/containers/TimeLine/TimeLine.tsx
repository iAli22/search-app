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
        <Card />
        <Card />
        <Card />
      </div>

      {children && <div className={style.timeLine__children}>{children}</div>}
    </div>
  );
};

export default TimeLine;
