import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Home } from "./Home";
import { Sent } from "./Sent";
import { Inbox } from "./Inbox";
import { TPages } from "./types";
import { body } from "./Body.module.scss";

const Body: React.FC = () => (
  <div className={body}>
    <Routes>
      <Route path={TPages.HOME} element={<Home />} />
      <Route path={TPages.SENT} element={<Sent />} />
      <Route path={TPages.INBOX} element={<Inbox />} />
      <Route path="*" element={<Navigate to={TPages.HOME} replace />} />
    </Routes>
  </div>
);

export { Body };
