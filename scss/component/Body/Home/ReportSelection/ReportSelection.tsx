import React, { useEffect, useRef, useState } from "react";
import Select, { StylesConfig } from "react-select";
import { CSSObject } from "styled-components";

import { TProps, TOption } from "./types";
import { selection } from "./ReportSelection.module.scss";

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

const ReportSelection: React.FC<TProps> = ({ setReporterIframe }) => {
  const [reports, setReports] = useState<TOption[]>([]);
  const select = useRef(null);

  useEffect((): void => {
    const getReport = async (): Promise<string[]> => {
      const response = await fetch(
        `http://${process.env.REPORTER_API}:${process.env.REPORTER_API_PORT}/list`
      );

      return await response.json();
    };

    getReport()
      .then((data): void => {
        if (!data) {
          setReports([]);

          return;
        }

        const newReports: TOption[] = data.map(
          (value: string): TOption => ({
            value,
            label: value.replace("_", " ").toUpperCase(),
          })
        );

        setReports(newReports);
      })
      .catch((): void => {
        setReports([]);
      });
  }, []);

  const handleRenderReportTable = ({ value }: { value: string }): void => {
    setReporterIframe(
      `http://${process.env.REPORTER_API}:${process.env.REPORTER_API_PORT}/report/${value}`
    );
  };

  const openSelect = (): void => {
    if (select.current) {
      select.current.focus();
    }
  };

  return (
    <div className={selection}>
      <label onClick={openSelect}>template</label>
      <Select<TOption | CSSObject>
        className=""
        onChange={handleRenderReportTable}
        openMenuOnFocus={true}
        options={reports}
        placeholder={"Choose template"}
        ref={select}
        styles={selectStyles}
      />
    </div>
  );
};

export { ReportSelection };
