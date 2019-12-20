import React from 'react';
import { Button } from 'semantic-ui-react';
import { array } from 'prop-types';

class Gomoku extends React.Component { 

  playGameGomoku = () => {
    let result;
    const input = this.props.input;
    let currentPlayer = false; 
    const table = [];
    for (let i = 0; i < 20; i++) {
      table.push([]);
      for (let j = 2; j < 20; j++) {
        table[i].push('');
      }
    }

    while (!this.gameShouldEnd(table)) {
      currentPlayer = !currentPlayer;
      const positions = this.generateMove(table);
      table[positions[0]][positions[1]] = currentPlayer;
    }

    const winner = currentPlayer ? input.split(' ')[0] : input.split(' ')[1];
    result = this.isWinningCondition(table); 
    this.props.callBack(result);

  }

  gameShouldEnd = (array) => {
    return this.allSpacesAreCompleted(array) || this.isWinningCondition(array);
  }
  
  isWinningCondition = (array) => { 
    for (let i = 0; i < 16; i++) {
      for (let j = 4; j < 16; j++){
        if (array[i][j] != '') {
          if (array[i][j] === array[i][j+1] === array[i][j+2] === array[i][j+3] === array[i][j+4]) {
            return true; 
          } else if (array[i][j] === array[i+1][j] === array[i+2][j] === array[i+3][j] === array[i+4][j]) {
            return true;  
          } else if (array[i][j] === array[i+1][j-1] === array[i+2][j-2] === array[i+3][j-3] === array[i+4][j-4]){
            return true; 
          } else if (array[i][j] === array[i+1][j+1] === array[i+2][j+2] === array[i+3][j+3] === array[i+4][j+4]) {
            return true; 
          }
        } 
      }    
    }

    return false; 
  } 

  allSpacesAreCompleted = (array) => {
    for (let index = 0; index < 19; index++) {
      for (let j = 0; j < 19; j++) {
        if (array[index][j] === '') {
          return false;
        }
      }
    }

    return true;
  } 

   
  generateMove = (array) => { 
    let found = false; 

    while (found === false) {
      let row = Math.floor(Math.random() * 20); 
      let column = Math.floor(Math.random() * 20);   
      if (array[row][column] === '') {
        found = true; 
        return [row, column]; 
      }
    }
  }



  render() {
    return (
        <div>
          <Button size='mini' color='dark blue' onClick={this.playGameGomoku} className="ui button">Gomoku</Button>
        </div>
    )
  }
}

export default Gomoku; 