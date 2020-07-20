import {speechTest} from "./viewmodel/speechTest.js";
import {actTest} from "./viewmodel/actTest.js";
import {makefaceTest} from "./viewmodel/makefaceTest.js";
import {makeControlButton} from "./tools/makecontrolbutton.js";
import { showButtonT } from "./action/showbuttonT.js"


VHASettings.addListener(VHAEvent.Initialize, () => {
    console.log(">>> Initialize");
    console.log(Environment.os);
    makeControlButton();
});  



VHASettings.addListener(VHAEvent.Error, error => {
    console.error(`ErrorEvent: ${JSON.stringify(error)}`);
});
