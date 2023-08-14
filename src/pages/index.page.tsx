import React, { useState, useEffect } from 'react';
import classNames from "classnames";
import type { Alignment } from "@blueprintjs/core";
import { Button, AnchorButton, H5, Code, Intent, Switch } from "@blueprintjs/core";
import { Example, handleBooleanChange } from "@blueprintjs/docs-theme";
import { Refresh, Duplicate } from "@blueprintjs/icons";
import { AlignmentSelect } from "src/pages/common/alignmentSelect";
import { IntentSelect } from "src/pages/common/intentSelect";
import type { Size } from "src/pages/common/sizeSelect";
import { SizeSelect } from "src/pages/common/sizeSelect";

const HomePage = () => {
  const [active, setActive] = useState(false);
  const [alignText, setAlignText] = useState<Alignment | undefined>(undefined);
  const [disabled, setDisabled] = useState(false);
  const [fill, setFill] = useState(false);
  const [iconOnly, setIconOnly] = useState(false);
  const [intent, setIntent] = useState(Intent.NONE);
  const [loading, setLoading] = useState(false);
  const [minimal, setMinimal] = useState(false);
  const [outlined, setOutlined] = useState(false);
  const [size, setSize] = useState("regular");
  const [wiggling, setWiggling] = useState(false);
  const [wiggleTimeoutId, setWiggleTimeoutId] = useState(0);

  const handleActiveChange = handleBooleanChange(setActive);
  const handleAlignTextChange = (alignText: Alignment) => setAlignText(alignText);
  const handleDisabledChange = handleBooleanChange(setDisabled);
  const handleFillChange = handleBooleanChange(setFill);
  const handleIconOnlyChange = handleBooleanChange(setIconOnly);
  const handleLoadingChange = handleBooleanChange(setLoading);
  const handleMinimalChange = handleBooleanChange(setMinimal);
  const handleOutlinedChange = handleBooleanChange(setOutlined);
  const handleSizeChange = (size: Size) => setSize(size);
  // const handleIntentChange = (intent: Intent) => setIntent(intent);

  useEffect(() => {
    return () => {
      clearTimeout(wiggleTimeoutId);
    };
  }, [wiggleTimeoutId]);

  const beginWiggling = () => {
    clearTimeout(wiggleTimeoutId);
    setWiggling(true);
    const newTimeoutId = window.setTimeout(() => setWiggling(false), 300);
    setWiggleTimeoutId(newTimeoutId);
  };

  const options = (
    <>
      <H5>Props</H5>
      <Switch label="Active" checked={active} onChange={handleActiveChange} />
      <Switch label="Disabled" checked={disabled} onChange={handleDisabledChange} />
      <Switch label="Loading" checked={loading} onChange={handleLoadingChange} />
      <Switch label="Minimal" checked={minimal} onChange={handleMinimalChange} />
      <Switch label="Outlined" checked={outlined} onChange={handleOutlinedChange} />
      <Switch label="Fill" checked={fill} onChange={handleFillChange} />
      <AlignmentSelect align={alignText} onChange={handleAlignTextChange} />
      {/* <SizeSelect size={size} onChange={handleSizeChange} /> */}
      {/* <IntentSelect intent={intent} onChange={handleIntentChange} /> */}
      <H5>Example</H5>
      <Switch label="Icons only" checked={iconOnly} onChange={handleIconOnlyChange} />
    </>
  );

  return (
    <Example options={options}>
      <div className={classNames({ "docs-flex-column": fill })}>
        <p>
          <Code>Button</Code>
        </p>
        <Button
          className={wiggling ? "docs-wiggle" : ""}
          icon={<Refresh />}
          onClick={beginWiggling}
          small={size === "small"}
          large={size === "large"}
          active={active}
          alignText={alignText}
          disabled={disabled}
          fill={fill}
          intent={intent}
          loading={loading}
          minimal={minimal}
          outlined={outlined}
        >
          {!iconOnly && "Click to wiggle"}
        </Button>
      </div>
      <div className={classNames({ "docs-flex-column": fill })}>
        <p>
          <Code>AnchorButton</Code>
        </p>
        <AnchorButton
          href="#core/components/buttons"
          icon={<Duplicate />}
          rightIcon="share"
          target="_blank"
          text={iconOnly ? undefined : "Duplicate this page"}
          small={size === "small"}
          large={size === "large"}
          active={active}
          alignText={alignText}
          disabled={disabled}
          fill={fill}
          intent={intent}
          loading={loading}
          minimal={minimal}
          outlined={outlined}
        />
      </div>
    </Example>
  );
};

export default HomePage;