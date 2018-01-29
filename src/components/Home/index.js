import React , { Component }from 'react';

import ExpenseTable from './ExpenseTable.js'
import AddExpensePopup from './AddExpensePopup';


class HomePage extends Component {

    constructor(props){
        super(props)

        this.state = {
            showPopup: false
        }
    }

    togglePopup(){
        this.setState({
            showPopup: !this.state.showPopup
        })
    }

    render() {
        return(
            <div>
                <div className="col-sm-12">
                    <ExpenseTable expenses={this.props.expenses} authUser={this.props.user}/>                    
                </div>
                <button className="addexpense-btn" onClick={this.togglePopup.bind(this)} id="addExpense"><i class="fa fa-plus-circle fa-5x" aria-hidden="true"></i></button>
                { this.state.showPopup ? <AddExpensePopup user={this.props.user} closePopup={this.togglePopup.bind(this)}/> : null }
            </div>
        )
    }
} 

export default HomePage;