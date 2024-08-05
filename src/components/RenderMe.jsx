import { useEffect } from "react";

const RenderLoggerComponent = () => {
  useEffect(() => {
    console.log("I have been rendered");
  });

  return <h1>I have been rendered</h1>;
};

export default RenderLoggerComponent;
