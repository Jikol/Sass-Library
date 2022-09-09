import React, { useRef, useState } from "react";
import { usePopper } from "react-popper";

import { TProps } from "./types";
import { Tooltip, Arrow, TabButton } from "./styled";

const Nav: React.FC<TProps> = ({ toLink, name, icon, tooltip, setActive, active }) => {
  const tabButton = useRef(null);
  const popper = useRef(null);
  const [arrow, setArrow] = useState<string | HTMLElement>(null);
  const [tooltipShow, setTooltipShow] = useState<boolean>(false);
  const { styles, attributes } = usePopper(tabButton.current, popper.current, {
    placement: "right",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, -4],
        },
      },
      {
        name: "arrow",
        options: {
          element: arrow,
        },
      },
      {
        name: "computeStyles",
        options: {
          adaptive: false,
        },
      },
    ],
  });

  const handleActiveClick = (): void => {
    setActive(name);
  };

  const handleMouseEnter = (): void => {
    setTooltipShow(true);
  };

  const handleMouseLeave = (): void => {
    setTooltipShow(false);
  };

  return (
    <li>
      <TabButton
        to={toLink}
        ref={tabButton}
        className={`btn btn--tab ${active === name ? "active" : ""}`}
        onClick={handleActiveClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        role="button">
        {icon}
      </TabButton>

      <Tooltip
        className={`${tooltipShow ? "show" : "hide"}`}
        ref={popper}
        style={styles.popper}
        {...attributes.popper}>
        {tooltip}
        <Arrow ref={setArrow} style={styles.arrow} />
      </Tooltip>
    </li>
  );
};

export { Nav };
