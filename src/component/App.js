import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addReminder} from '../action/index';
import {deleteReminder} from "../action/index";

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            text:''
        }
    }

    addReminder(){
        this.props.addReminder(this.state.text)
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
                                    {reminder.text}
                                </div>
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
                    </div>
                    <button type={'button'} className={'btn btn-success mx-4'} onClick={()=>this.addReminder()}>
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
    return bindActionCreators({addReminder,deleteReminder},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
