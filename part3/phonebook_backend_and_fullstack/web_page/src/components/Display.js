import React from "react";

const Display = ({name,number,del}) =>{
console.log("----",name,"-----",number)
return(
        <li>
            {name}  {number}
            <button onClick={del}>
                delete
            </button>
        </li>
)
}


export default Display