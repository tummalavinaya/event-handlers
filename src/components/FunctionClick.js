import React from 'react';
function FunctionClick(){
     function clickHandler(){
        console.log("click handler method");
    }
    return (<div>
        <button onClick = {clickHandler}>click</button>
    </div>);
}
export default FunctionClick;