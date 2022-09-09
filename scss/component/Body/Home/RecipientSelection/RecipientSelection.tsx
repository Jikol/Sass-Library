import React, { useRef } from "react";
import Select, { StylesConfig } from "react-select";
import { CSSObject } from "styled-components";

import { selection } from "./RecipientSelection.module.scss";

const selectStyles: StylesConfig<CSSObject> = {
  container: (provided) => ({
    ...provided,
    height: "100%",
    borderRadius: "0 7px 7px 0",
  }),
  control: () => ({
    display: "flex",
    height: "100%",
    backgroundColor: getComputedStyle(document.body).getPropertyValue(
      "--clr-rich-black-3"
    ),
    cursor: "pointer",
    border: "1px solid black",
    borderLeft: "none",
    minWidth: "25ch",
    maxWidth: "max-content",
    borderRadius: "0 7px 7px 0",
    boxShadow: getComputedStyle(document.body).getPropertyValue("--bs-base"),
  }),
  singleValue: (provided) => ({
    ...provided,
    color: getComputedStyle(document.body).getPropertyValue("--clr-cultured"),
  }),
  input: (provided) => ({
    ...provided,
    color: getComputedStyle(document.body).getPropertyValue("--clr-cultured"),
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: getComputedStyle(document.body).getPropertyValue("--clr-spanish-grey"),
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: getComputedStyle(document.body).getPropertyValue(
      "--clr-rich-black-1"
    ),
    color: getComputedStyle(document.body).getPropertyValue("--clr-silver-sand"),
    boxShadow: getComputedStyle(document.body).getPropertyValue("--bs-base"),
  }),
  option: (provided, state) => ({
    ...provided,
    paddingInline: "1em",
    paddingBottom: "0.5em",
    cursor: "pointer",
    /* eslint-disable */
    backgroundColor: state.isSelected
      ? getComputedStyle(document.body).getPropertyValue("--clr-spanish-grey")
      : state.isFocused
      ? getComputedStyle(document.body).getPropertyValue("--clr-spanish-grey")
      : getComputedStyle(document.body).getPropertyValue("--clr-raisin-black-1"),
    /* eslint-enable */
    color: state.isSelected
      ? "black"
      : getComputedStyle(document.body).getPropertyValue("--clr-silver-sand"),
  }),
};

const RecipientSelection: React.FC = () => {
  const select = useRef(null);

  const handleSelectOpen = (): void => {
    if (select.current) {
      select.current.focus();
    }
  };

  return (
    <div className={selection}>
      <label onClick={handleSelectOpen}>recipients</label>
      <Select
        closeMenuOnSelect={false}
        placeholder={"Choose recipients"}
        className=""
        options={[
          { value: "foo", label: "foo" },
          { value: "bar", label: "bar" },
        ]}
        styles={selectStyles}
        openMenuOnFocus={true}
        ref={select}
        isMulti
      />
    </div>
  );
};

export { RecipientSelection };
