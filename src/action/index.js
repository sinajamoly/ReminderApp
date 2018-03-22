import * as actionType from "../constants";

export const addReminder=(text,dueDate)=>{
    const action={
        type:actionType.ADD_REMINDER,
        text,
        dueDate
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

export const resetReminder=()=>{
    const action={
        type:actionType.RESET_REMINDER,
    }
    return action;
}