import { ShowText } from "../../../action/showtext.js"
import { HideUi } from "../../../action/hideui.js"

export var showTestId = (V) =>{
    ActionQueue.push(ActionQueue.Priority.Normal, [
        HideUi("testid"),
        ShowText({bottom:"40px", right:"140px"}, "testid","Test ID" + V, 0,{fontSize: "15px",fontColor: "black",visibleBackground: "false",textAlign: "center"})
    ]);
};