import { showButtonT } from "../action/showbuttonT.js"

export var makeControlButton = () =>{
    ActionQueue.push(ActionQueue.Priority.Normal, [
        showButtonT(
            {
            bottom:"10px", 
            right:"10px",
            width:"50px",
            height:"20px"
            },
            "next",
            "次へ >",
            0,
            {
            buttonTransition: 
                {
                type: "color", 
                normal: "#ff0000",
                pressed: "#0000ff",
                },
            textAlign:"center", 
            verticalAlign: "center"
            }
        ),
        showButtonT(
            {
            bottom:"10px", 
            right:"70px",
            width:"50px",
            height:"20px"
            },
            "return",
            "繰り返す",
            0,
            {
                buttonTransition: 
                {type: "color", 
                normal: "#ff0000",
                pressed: "#0000ff",
                },
                textAlign:"center", 
                verticalAlign: "center"
            }
        ),
        showButtonT(
            {
            bottom:"10px", 
            right:"130px",
            width:"50px",
            height:"20px"
            },
            "back",
            "< 戻る",
            0,
            {
                buttonTransition: 
                {type: "color", 
                normal: "#ff0000",
                pressed: "#0000ff",
                },
                textAlign:"center", 
                verticalAlign: "center"
            }
        ),
    ]);
};