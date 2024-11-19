import { Context } from "./Creator";
 
function Othercomponent(){
 return(
<Context.Consumer>
 {update => <span> Hai {update} </span>} 
</Context.Consumer>
 )
 }

 export default Othercomponent;