import {Act} from "../action/act.js"; 

export var actTest = () =>{
    VHASettings.addListener(VHAEvent.Listened, () => {
        ActionQueue.push(ActionQueue.Priority.Important,[
            Act(8)
        ]);
    });
}