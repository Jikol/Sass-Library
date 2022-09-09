import React, { useId } from "react";
import { FiLock } from "react-icons/fi";
import { FiUnlock } from "react-icons/fi";

import { IconSwitcher } from "~/component";
import { TProps } from "./types";
import { inpution } from "./Inpution.module.scss";

const Inpution: React.FC<TProps> = ({ title }) => {
  const inputId = useId();

  return (
    <div className={inpution}>
      <label htmlFor={inputId}>{title}</label>
      <IconSwitcher id={inputId} iconTrue={<FiLock />} iconFalse={<FiUnlock />} />
    </div>
  );
};

export { Inpution };
