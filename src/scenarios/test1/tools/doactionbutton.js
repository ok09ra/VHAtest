import {showTestId} from "./showtestid.js"

export var doActionButton = () =>{
    var V = 0; 
    VHASettings.addListener(VHAEvent.UIEvent, (workingMemory, uiObj) => {
        if(uiObj.uiId === "next"){
            console.log("do the next action");
            V = V+1;
            console.log(V);
            showTestId(V);
        };
        if (uiObj.uiId === "return"){
            console.log("do the same action");
            console.log(V);
            showTestId(V);
        };
        if(uiObj.uiId === "back"){
            if(V <= 0){
                console.log("can not go previous");
                console.log(V);
                showTestId(V);
            } else{
                console.log("do the previous action");
                V= V-1;
                console.log(V);
                showTestId(V);
            };
        };
    });
};

