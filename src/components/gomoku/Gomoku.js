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
      for (let j = 0; j < 20; j++) {
        table[i].push('');
      }
    } 

    while (!this.gameShouldEnd(table)) {
      console.log(table); 
      currentPlayer = !currentPlayer;
      const positions = this.generateMove(table);
      table[positions[0]][positions[1]] = currentPlayer;
    } 

    console.log("after"); 
    console.log(table); 
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
      let row = Math.floor(Math.random() * 20); 
      let column = Math.floor(Math.random() * 20);   
      if (array[row][column] === '') {
        found = true; 
        return [row, column]; 
      }
    }
  }
  
  isWinningCondition = (array) => { 
    for (let i = 0; i < 20; i++) {
      for (let j = 0; j < 20; j++) {
        if (array[i][j] !== '') {
          try {
          if (array[i][j] === array[i][j+1] && array[i][j+1] === array[i][j+2] && array[i][j+2] === array[i][j+3] && array[i][j+3] === array[i][j+4]) {
            array[i][j] = 'win'; 
            array[i][j+1] = 'win'; 
            array[i][j+2] = 'win'; 
            array[i][j+3] = 'win'; 
            array[i][j+4] = 'win'; 
            return true; 
          } else if (array[i][j] === array[i+1][j] && array[i+1][j] === array[i+2][j] && array[i+2][j] === array[i+3][j] && array[i+3][j] === array[i+4][j]) { 
            array[i][j] = 'win'; 
            array[i+1][j] = 'win'; 
            array[i+2][j] = 'win'; 
            array[i+3][j] = 'win'; 
            array[i+4][j] = 'win'; 
            return true;  
          } else if (array[i][j] === array[i+1][j-1] && array[i+1][j-1] === array[i+2][j-2] && array[i+2][j-2] === array[i+3][j-3] && array[i+3][j-3] === array[i+4][j-4]){
            array[i][j] = 'win'; 
            array[i+1][j-1] = 'win'; 
            array[i+2][j-2] = 'win'; 
            array[i+3][j-3] = 'win';
            array[i+4][j-4] = 'win';
            return true; 
          } else if (array[i][j] === array[i+1][j+1] && array[i+1][j+1] === array[i+2][j+2] && array[i+2][j+2] === array[i+3][j+3] && array[i+3][j+3] === array[i+4][j+4]) {
            array[i][j] = 'win'; 
            array[i+1][j+1] = 'win'; 
            array[i+2][j+2] = 'win';
            array[i+3][j+3] = 'win';
            array[i+4][j+4] = 'win';
            return true; 
          }
        } catch (e) {
          }
        } 
      }    
    }
    
    return false; 
  } 

  allSpacesAreCompleted = (array) => {
    for (let index = 0; index <= 19; index++) {
      for (let j = 0; j <= 19; j++) {
        if (array[index][j] === '') {
          return false;
        }
      }
    }

    return true;
  } 

  generateAIMoves = (array, player) => {
    let table = [];
    for (let i = 0; i < 20; i++) {
      table.push([]);
      for (let j = 0; j < 20; j++) {
        table[i].push(0);
      }
    } 
    console.log(array1);
    console.log(player); 
    for (let i = 0; i < 20; i++) {
      for (let j = 0; j < 20; j++) {
        if (array[i][j] === player) { 
          try {
            table[i][j] = table[i][j] + 1;
            //up on row 
            table[i][j-1] = table[i][j-1] + 1;
            table[i][j-2] = table[i][j-2] + 1;
            table[i][j-3] = table[i][j-3] + 1;
            table[i][j-4] = table[i][j-4] + 1; 
            //down on row
            table[i][j+1] = table[i][j+1] + 1;
            table[i][j+2] = table[i][j+2] + 1;
            table[i][j+3] = table[i][j+3] + 1;
            table[i][j+4] = table[i][j+4] + 1; 
            //right 
            table[i+1][j] = table[i+1][j] + 1;
            table[i+2][j] = table[i+2][j] + 1;
            table[i+3][j] = table[i+3][j] + 1;
            table[i+4][j] = table[i+4][j] + 1; 
            //left 
            table[i-1][j] = table[i-1][j] + 1;
            table[i-2][j] = table[i-2][j] + 1;
            table[i-3][j] = table[i-3][j] + 1;
            table[i-4][j] = table[i-4][j] + 1;  
            //main diagonal up
            table[i-1][j-1] = table[i-1][j-1] + 1;
            table[i-2][j-2] = table[i-2][j-2] + 1;
            table[i-3][j-3] = table[i-3][j-3] + 1;
            table[i-4][j-4] = table[i-4][j-4] + 1;  
            //main diagonal down 
            table[i+1][j+1] = table[i+1][j+1] + 1;
            table[i+2][j+2] = table[i+2][j+2] + 1;
            table[i+3][j+3] = table[i+3][j+3] + 1;
            table[i+4][j+4] = table[i+4][j+4] + 1;  
            //secundary diagonal up
            table[i+1][j-1] = table[i+1][j-1] + 1;
            table[i+2][j-2] = table[i+2][j-2] + 1;
            table[i+3][j-3] = table[i+3][j-3] + 1;
            table[i+4][j-4] = table[i+4][j-4] + 1;  
            //secundary diagonal down
            table[i-1][j+1] = table[i-1][j+1] + 1;
            table[i-2][j+2] = table[i-2][j+2] + 1;
            table[i-3][j+3] = table[i-3][j+3] + 1;
            table[i-4][j+4] = table[i-4][j+4] + 1;  
          } catch (e) {
            console.log(e); 
          }
         
        }
      }
    } 
    console.log(table);
    return table; 
    
  }  

  checkHeatMapPosition = (array) =>{
    let max = 0; 
    let row = 0; 
    let col = 0; 
    for (let i = 0; i < array.length; i++){
      for (let j = 0; j < array[0].length; j++){
        if (array[i][j].length > max){
          max = array[i][j].length; 
          row = i; 
          col = j; 
        }
      }
    } 
    console.log(max); 
    return [row, col]; 
  }
   


   
  render() {
    return (
        <div>
          <Button size='mini' color='blue' onClick={this.playGameGomoku} className="ui button">Gomoku</Button>
        </div>
    )
  } 
}

export default Gomoku; 