import {speechTest} from "./viewmodel/speechTest.js";
import {actTest} from "./viewmodel/actTest.js";
import {makefaceTest} from "./viewmodel/makefaceTest.js";
import {makeControlButton} from "./scenarios/test1/tools/makecontrolbutton.js.js";
import { showButtonT } from "./action/showbuttonT.js"
import {doActionButton} from "./scenarios/test1/tools/doactionbutton.js";


VHASettings.addListener(VHAEvent.Initialize, () => {
    console.log(">>> Initialize");
    console.log(Environment.os);
    makeControlButton();
});  


doActionButton();


VHASettings.addListener(VHAEvent.Error, error => {
    console.error(`ErrorEvent: ${JSON.stringify(error)}`);
});
