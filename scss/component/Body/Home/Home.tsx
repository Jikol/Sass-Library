import React, { useState } from "react";
import { TbMap2 } from "react-icons/tb";
import { RiScreenshot2Line } from "react-icons/ri";

import { RecipientSelection } from "./RecipientSelection";
import { ReportSelection } from "./ReportSelection";
import { Inpution } from "~/component";
import {
  home,
  header,
  body,
  content,
  home__left,
  home__right,
  header__left,
  header__sep,
  header__right,
} from "./Home.module.scss";

const Home: React.FC = () => {
  const [reportIframe, setReportIframe] = useState<string>("");

  return (
    <div className={home}>
      <div className={home__left}>
        <div className={header}>
          <div className={header__left}>
            <ReportSelection setReporterIframe={setReportIframe} />
          </div>
          <div className={header__sep} />
          <div className={header__right}>
            <RecipientSelection />
            <Inpution title="crypted" />
          </div>
        </div>
        <div className={body}>
          <iframe src={reportIframe}></iframe>
        </div>
      </div>
      <div className={home__right}>
        <div className={content}>
          <h3>
            <TbMap2 />
            <span>maps</span>
          </h3>
          <div></div>
        </div>
        <div className={content}>
          <h3>
            <RiScreenshot2Line />
            <span>Snapshots</span>
          </h3>
          <div></div>
        </div>
        <button className="btn btn--basic btn--green">send report</button>
      </div>
    </div>
  );
};

export { Home };
