import React from 'react';

class Calculator extends React.Component {
    constructor(props) {
      super(props);
      this.state = {year: '', interest: '', balance: ''};
      this.UpdateYear = this.UpdateYear.bind(this);
      this.UpdateInterest = this.UpdateInterest.bind(this);
      this.UpdateBalance = this.UpdateBalance.bind(this);
      this.testclick = this.testclick.bind(this);
    }
  
    UpdateYear(event) {
      this.setState({year: event.target.value});
    }
    UpdateInterest(event) {
      this.setState({interest: event.target.value});
    }
    UpdateBalance(event) {
      this.setState({balance: event.target.value});
    }
    
    testclick() {
      alert("The duration entered is: " + this.state.year + " years\n"+
             "The interest entered is: " + this.state.interest + "% per year\n"+
             "The balance entered is: " + this.state.balance + " USD"
             );
    }

    render() {
        return (
          <div>
            <label>Enter Year: </label>        
            <input type="text" placeholder="Year" value={this.state.year} onChange={this.UpdateYear} /><br/>
            <label>Enter Balance: </label>        
            <input type="text" placeholder="Balance" value={this.state.balance} onChange={this.UpdateBalance} /><br/>        
            <label>Enter Interest: </label>        
            <input type="text" placeholder="Interest % per year" value={this.state.interest} onChange={this.UpdateInterest} /><br/>        
            <h2>Calculated Balance: {this.state.year * this.state.balance * (1+ this.state.interest/100)} USD</h2>
            <button type="button" value="View Info" onClick={this.testclick}>View Info</button>
          </div>
        );
      }
    }
    
    export default Calculator;