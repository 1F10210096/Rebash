import React from "react";
import { Icon, IconSize } from "@blueprintjs/core";

const MyComponent = () => {
  const handleAdd = () => {
    // handleAdd の処理を実装
  };

  const handleAddKeys = () => {
    // handleAddKeys の処理を実装
  };

  return (
    <div>
      <Icon icon="lock" size={500}/>
      <Icon icon="git-pull" size={500} />
      <Icon icon="graph" size={IconSize.LARGE} intent="primary" />
      <Icon icon="add" onClick={handleAdd} onKeyDown={handleAddKeys} />
    </div>
  );
};

export default MyComponent;