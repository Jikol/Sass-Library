import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const TabButton = styled(NavLink)`
  &.active {
    background: var(--clr-silver-sand) !important;
    transform: translateX(1px);

    svg {
      fill: var(--clr-raisin-black-3) !important;
    }
  }
`;

export const Tooltip = styled.div`
  background-color: var(--clr-silver-sand);
  padding-inline: 1em;
  padding-block: 0.4em;
  border-radius: 5px;
  box-shadow: var(--bs-base);
  border: 1px solid var(--clr-cultured);
  transition: opacity 0.12s, left 0.23s;
  text-transform: capitalize;
  isolation: isolate;
  font-weight: 600;
  user-select: none;
  z-index: 1;

  &.show {
    opacity: 1;
    left: 10px !important;
  }

  &.hide {
    opacity: 0;
    left: 0;
  }
`;

export const Arrow = styled.div`
  background-color: transparent;
  border-top: 0.8em solid transparent;
  border-left: 0.8em solid var(--clr-silver-sand);
  transform-origin: left;
  top: 17% !important;
  transform: rotate(45deg) translate(-111%, 111%) !important;
`;
