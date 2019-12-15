import React from 'react';
import { Button } from 'semantic-ui-react';

class TicTacToe extends React.Component {
  //  Se considera o matrice goala de 3 linii si 3 coloane. 
  //  Programul primeste ca si input 2 cuvinte reprezentand numele celor 2 jucatori.
  //  Prin generarea aleatorie de perechi (i,j), se cere simularea unui joc de X si 0.
  //  Se cere afisarea matricii dupa fiecare miscare

  playGame = () => {
    let result;
    const input = this.props.input;
    let currentPlayer = false; 
    const table = [['', '', ''], ['', '', ''], ['', '', '']]; 

    while (!this.gameShouldEnd(table)) {
      currentPlayer = !currentPlayer;
      const positions = this.generateMove(table);
      table[positions[0]][positions[1]] = currentPlayer;
      this.displayBoard(table);
    }

    this.displayBoard(table);
    const winner = currentPlayer ? input.split(' ')[0] : input.split(' ')[1];
    result = this.isWinningCondition(table) ? 'The winner is player: ' + winner : 'There is no winner';

    this.props.callBack(result);
  }

  gameShouldEnd = (array) => {
    return this.allSpacesAreCompleted(array) || this.isWinningCondition(array);
  }
  
  generateMove = (array) => { 
    let found = false; 

    while (found === false) {
      let row = Math.floor(Math.random() * 3); 
      let column = Math.floor(Math.random() * 3);   
      if (array[row][column] === '') {
        found = true; 
        return [row, column]; 
      }
    }
  }

  displayBoard = (array) => {
    console.log(array[0].join(' | '));
    console.log(array[1].join(' | '));
    console.log(array[2].join(' | '));
    console.log('##################')
  }

  allSpacesAreCompleted = (array) => {
    for (let index = 0; index < 3; index++) {
      for (let j = 0; j < 3; j++) {
        if (array[index][j] === '') {
          return false;
        }
      }
    }

    return true;
  }

  isWinningCondition = (array) => { 
    for(let index = 0; index < 3; index++) {
      if (array[index][0] === array[index][1] && array[index][1] === array[index][2] && array[index][0] !== '') {
        return true; 
      } 
    }  

    for (let index = 0; index< 3; index++) {
      if (array[0][index] === array[1][index] && array[1][index] === array[2][index] && array[0][index]!== '') {
        return true; 
      }
    } 

    if (array[0][0] === array[1][1] && array[1][1] === array[2][2] && array[0][0]!== '') {
      return true;
    }

    if (array[0][2] === array[1][1] && array[1][1] === array[2][0] && array[2][0]!== '') {
      return true;
    }

    return false;
  }

  render() {
    return (
        <div>
          <Button size='mini' color='red' onClick={this.playGame} className="ui button">TicTacToe</Button>
        </div>
    )
  }
}

export default TicTacToe; 