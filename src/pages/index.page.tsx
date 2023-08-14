import React from 'react';
import { Button, InputGroup, FocusStyleManager, Icon } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons"; // 必要に応じて追加

const HomePage = () => {
  FocusStyleManager.onlyShowFocusOnTabs();

  const incrementCounter = () => {
    console.log("a")
  }

  return (
    <div>
      <Button icon="refresh" intent="danger" text="Reset" onClick={incrementCounter} />
      <Button icon="user" rightIcon="caret-down" text="Profile settings" onClick={incrementCounter} />
      <Button rightIcon="arrow-right" intent="success" text="Next step" onClick={incrementCounter} />
      <Button>
        <Icon icon="document" /> Upload... <Icon icon="small-cross" />
      </Button>
      <InputGroup leftIcon={IconNames.STAR} placeholder="Test me for focus" />
    </div>
  );
};

export default HomePage;