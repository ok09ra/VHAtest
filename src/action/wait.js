export var Wait = (dur) => {
    return {
        actionType: "Wait",
        duration: dur 
    };
}