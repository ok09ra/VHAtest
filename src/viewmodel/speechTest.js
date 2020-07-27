import {Speech} from "../action/speech.js"; 

export var speechTest = () =>{
    VHASettings.addListener(VHAEvent.Listened, () => {
        ActionQueue.push(ActionQueue.Priority.Important,[
            Speech("こんにちは")
        ]);
    });
}