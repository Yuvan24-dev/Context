import React from "react";
import { Context } from "./Creator";
import MyComponent from "./Consumer"
import Othercomponent from "./Provider";

const App = ()=>{
    const value = "Hello everyone";
    const validate = "Hai everyone"
return (<>
<Context.Provider value={value}>
      <MyComponent />
    </Context.Provider>

<Context.Provider value={validate}>
    <Othercomponent />
    </Context.Provider>    
</>
)
}
export default App;