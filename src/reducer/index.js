import * as actionType from "../constants";
import {bake_cookie,read_cookie} from 'sfcookies';
const reminder =(action)=>{
    return{
        text: action.text,
        dueDate: action.dueDate,
        id:Math.random()
    }
}


const reminders =(state=[],action)=>{
    let reminders=null;
    state=read_cookie('reminders');
    switch(action.type){
        case actionType.ADD_REMINDER:
            reminders=[...state,reminder(action)];
            bake_cookie('reminders',reminders);
            console.log('reminders as state', reminders);
            return reminders;
        case actionType.DELETE_REMINDER:
            console.log('something');
            reminders=state.filter(reminder=>reminder.id !==action.deleteId);
            bake_cookie('reminders',reminders);
            return reminders;
        case actionType.RESET_REMINDER:
            console.log('something');
            reminders=[];
            bake_cookie('reminders',reminders);
            return reminders;
        default:
            return state;
    }
}

export default reminders;