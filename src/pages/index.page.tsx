import { Button } from '@blueprintjs/core';

const HomePage = () => {
  const incrementCounter = () => {
    console.log('a');
  };
  return <Button intent="success" text="button content" onClick={incrementCounter} />;
};

export default HomePage;
