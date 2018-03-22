import * as actionType from "../constants";

const reminder =(action)=>{
    return{
        text: action.text,
        id:Math.random()
    }
}


const reminders =(state=[],action)=>{
    let reminders=null;
    switch(action.type){
        case actionType.ADD_REMINDER:
            reminders=[...state,reminder(action)];
            console.log('reminders as state', reminders);
            return reminders;
        case actionType.DELETE_REMINDER:
            console.log('something');
            reminders=state.filter(reminder=>reminder.id !==action.deleteId);
            return reminders;
        default:
            return state;
    }
}

export default reminders;