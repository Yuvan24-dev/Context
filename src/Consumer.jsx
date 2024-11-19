import React, { useContext } from "react";
import { Context } from "./Creator"; 

function MyComponent() {
  const value = useContext(Context); 

  return <span>heloo {value}</span>;
}

export default MyComponent;
