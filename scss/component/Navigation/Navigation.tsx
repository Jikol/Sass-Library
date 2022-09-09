import React, { useState } from "react";
import { RiPagesLine } from "react-icons/ri";
import { GoInbox } from "react-icons/go";
import { MdOutgoingMail } from "react-icons/md";

import { Nav } from "./Nav";
import { TPages } from "../Body/types";
import { tabs } from "./Navigation.module.scss";

const Navigation: React.FC = () => {
  const [active, setActive] = useState<TPages>(TPages.HOME);

  return (
    <nav className={tabs}>
      <ul>
        <Nav
          toLink={TPages.HOME}
          icon={<RiPagesLine />}
          name={TPages.HOME}
          tooltip={"new report"}
          active={active}
          setActive={setActive}
        />
        <Nav
          toLink={TPages.SENT}
          icon={<MdOutgoingMail />}
          name={TPages.SENT}
          tooltip={"sent reports"}
          active={active}
          setActive={setActive}
        />
        <Nav
          toLink={TPages.INBOX}
          icon={<GoInbox />}
          name={TPages.INBOX}
          tooltip={"received reports"}
          active={active}
          setActive={setActive}
        />
      </ul>
    </nav>
  );
};

export { Navigation };
