import React from 'react';
import './App.css';
import { Grid } from 'semantic-ui-react';
import PhaseOne from './components/phaseOne/PhaseOne';
import PhaseTwo from './components/phaseTwo/PhaseTwo';
import TicTacToe from './components/tictactoe/TicTacToe';
import OrderArray from './components/orderarray/OrderArray';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      input: ''
    }
  }

  setInput = (e) => {
    this.setState({input: e.target.value});
  }

  callBack = (result) => {
    this.setState({value: result});
  }

//========================================================================
//=======================TEMPLATE=========================================

  yourFuntionNameHere = () => {
    let result;
    // your code. save your answer in result as string

    this.setState({value: result});
  }
//========================================================================
//========================================================================
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Geanina's playgorund !</h1>
        <div className="ui input"><input type="text" placeholder="" onChange={this.setInput}/></div>
        
        <p></p>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <PhaseOne input={this.state.input} callBack={this.callBack}></PhaseOne>
              <PhaseTwo input={this.state.input} callBack={this.callBack}></PhaseTwo>
            </Grid.Column> 
            <Grid.Column>
              <TicTacToe input={this.state.input} callBack={this.callBack}></TicTacToe> 
              <OrderArray input={this.state.input} callBack={this.callBack}></OrderArray>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            {this.state.value}
          </Grid.Row>
        </Grid>
        </header>
      </div>
  );
  }
}

export default App;
