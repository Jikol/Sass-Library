import React from "react";

import { TPages } from "~/component/Body/types";

export interface TProps {
  toLink: string;
  name: TPages;
  active: string;
  setActive: (name: TPages) => void;
  icon: React.ReactNode;
  tooltip: string;
}
