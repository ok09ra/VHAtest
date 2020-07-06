import {speechTest} from "./viewmodel/speechTest.js";
import {actTest} from "./viewmodel/actTest.js";
import {makefaceTest} from "./viewmodel/makefaceTest.js";



VHASettings.addListener(VHAEvent.Initialize, () => {
    console.log(">>> Initialize");
    console.log(Environment.os);
});

speechTest();



VHASettings.addListener(VHAEvent.Error, error => {
    console.error(`ErrorEvent: ${JSON.stringify(error)}`);
});
