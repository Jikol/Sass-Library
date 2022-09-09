import React, { useEffect } from "react";

import { useViewport } from "~/hook";
import { Navigation } from "~/component";
import { Body } from "../Body";
import { app } from "./App.module.scss";

const smBreakpoint = getComputedStyle(document.body).getPropertyValue("--bp-sm");

const App: React.FC = () => {
  const { viewport } = useViewport();

  if (viewport < +smBreakpoint) {
    // render mobile layout
    return <div className={app} />;
  }

  useEffect((): void => {
    document.querySelectorAll("select").forEach((node): void => {
      node.addEventListener("change", (): void => {
        setTimeout((): void => {
          node.blur();
        }, 30);
      });
    });
  }, []);

  return (
    // render desktop layout
    <div className={app}>
      <Navigation />
      <Body />
    </div>
  );
};

export { App };
