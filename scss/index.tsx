import React from "react";
import { createRoot } from "react-dom/client";
import { MemoryRouter } from "react-router-dom";

import { App } from "./component";

const root = createRoot(document.getElementById(process.env.ROOT));

root.render(
  <MemoryRouter>
    <App />
  </MemoryRouter>
);
