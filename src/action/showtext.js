export var ShowText = (layoutParams,ID,value, seconds, options ) => {
    return   {
        actionType: "ShowText",
        uiId: ID,
        layout: layoutParams,
        option: options,
        value: value,
        seconds: seconds
    }
}
//layoutParam:JSON
// {bottom:"px", right:"px", left:"px",top:"px"}
//options :JSON
// {
//     fontSize: "15px",
//     fontColor: "black",
//     visibleBackground: "false",
//     textAlign: "right",
//     verticalAlign: "bottom"}
