import React, { useState } from "react";

import { TProps } from "./types";
import { Input, Label } from "./styled";

const IconSwitcher: React.FC<TProps> = ({ iconTrue, iconFalse, id }) => {
  const [isChecked, setChecked] = useState<boolean>(false);

  const handleChange = (): void => {
    setChecked(!isChecked);
  };

  return (
    <Label htmlFor={id}>
      <Input checked={isChecked} id={id} onChange={handleChange} type="checkbox" />
      {isChecked ? iconTrue : iconFalse}
    </Label>
  );
};

export { IconSwitcher };
