export var Makeface = (fId, val, dur)=>{
    return {
        actionType: "MakeFace",
        facialId: fId, 
        value: val, 
        duration: dur
    };
}