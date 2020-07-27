import {Speech} from "../action/speech.js"; 

export var makefaceTest = () =>{
    VHASettings.addListener(VHAEvent.Listened, () => {
        ActionQueue.push(ActionQueue.Priority.Important,[
        Makeface(1,100,10000)
        ]);
    });
}