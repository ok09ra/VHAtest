export var ShowButtonT = (layoutParams,ID,value, seconds, options ) => {
    return {
        actionType: "ShowButton",
        uiId: ID,
        layout: layoutParams,
        value: value,
        seconds: seconds,
        option: options
    };
}

//layoutParam:JSON
// {bottom:"px", right:"px", left:"px",top:"px",width:"px", height:"px"}
//options :JSON
// {type: "color", // Set the background color,normal: "#ff0000",pressed: "#0000ff",},textAlign: "left",verticalAlign: "top"}
