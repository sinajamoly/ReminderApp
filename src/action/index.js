import * as actionType from "../constants";

export const addReminder=(text)=>{
    const action={
        type:actionType.ADD_REMINDER,
        text
    }
    console.log('action in addReminder',action);
    return action;
}

export const deleteReminder=(id)=>{
    const action={
        type:actionType.DELETE_REMINDER,
        deleteId: id
    }
    return action;
}
