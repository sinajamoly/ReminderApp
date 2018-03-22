import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addReminder} from '../action/index';
import {deleteReminder} from "../action/index";
import {resetReminder} from "../action/index";
import moment from 'moment';

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            text:'',
            dueDate:''
        }
    }

    addReminder(){
        this.props.addReminder(this.state.text,this.state.dueDate)
    }

    renderReminder(){
        const {reminders}=this.props;
        return(
            <ul className={'list-group col-sm-4 mb-2'}>
                {
                    reminders.map(reminder=>{
                        return (
                            <li key={reminder.id} className="list-group-item">
                                <div className={'list-item'}>
                                    <b>{reminder.text}</b>
                                </div>
                                <div className=""><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
                                <div onClick={()=>this.props.deleteReminder(reminder.id)} className="list-item delete-button">
                                    &#x2715;
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        );
    }

    render(){
        return(
            <div className={'container'}>
                <div className={'title'}>
                    Reminder Pro
                </div>
                <div className="form-inline">
                    <div className="form-group">
                        <input type="text" className="form-control reminder-form" placeholder={'I Have To ...'}
                               onChange={event=>{this.setState({text:event.target.value})}}
                        />
                        <input type="datetime-local" className="form-control reminder-form"
                               onChange={event=>{this.setState({dueDate:event.target.value})}}
                        />
                    </div>
                    <button type={'button'} className={'btn btn-success mx-4'} onClick={()=>this.addReminder()}>
                        Add Reminder
                    </button>
                    <button type={'button'} className={'btn btn-danger m-4'} onClick={()=>this.props.resetReminder()}>
                        Add Reminder
                    </button>
                </div>
                {this.renderReminder()}
            </div>
        );
    }
}
function mapStateToProps(state){
    return {
        reminders: state
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({addReminder,deleteReminder,resetReminder},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
