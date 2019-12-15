import React from 'react';
import { Button } from 'semantic-ui-react';
//import { maxHeaderSize } from 'http';

class PhaseTwo extends React.Component {
  //5. Se considera o matrice de n linii si n coloane cu elemente de tipul string. se cere:
 //a) inlocuiti numerele cu "secret" 

  replaceWithSecret = () => {
    let result;
    const matrix = [
        [1, 'poate', 'merge', 'max'], 
        [4, 3, 'blabla', ' mamy' ], 
        [50, 'rapsodia', 82, 'muzica'],
        [20, 'suflet', 89, 60]
        ]; 
    let rowLength = matrix[0].length; 
    let colLength = matrix.length; 
    let matrixTransform = matrix; 

    for (let i = 0; i < rowLength; i++ ) {
      for (let j = 0; j < colLength; j++) {
        if (typeof(matrixTransform[i][j]) == 'number') {
          matrixTransform[i][j] = 'secret'; 
        }
      }
    }

    result = matrixTransform.join(' ')
    this.props.callBack(result);
  } 

    //b) inlocuiti cuvintele de pe diagonala principala cu "diagonale alley";  
  diagonaleAlley = () => {
    let result; 
    let matrix = [
      ['poate', 'merge', 'max'], 
      ['USA', 'blabla', 'Mamy' ], 
      ['Rapsodia', 'Gogosi', 'muzica']
      ]; 
    const val =  'diagonale alley';    
    let n = matrix.length;  

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (i === j) {
          matrix[i][j] = val; 
        }
      }
    }

    result = matrix.join(' '); 
    this.props.callBack(result);    
  } 
   

 //c) inlocuiti cuvintele proprii cu "Voldermort" 
  replaceWithVoldermort = () => {
    let result;
    let matrix = [
      ['poate', 'merge', 'max'], 
      ['USA', 'blabla', 'Mamy' ], 
      ['Rapsodia', 'Gogosi', 'muzica']
      ]; 
    let n = matrix[0].length; 
    
    for (let i = 0; i < n; i++ ) {
      for (let j = 0; j < n; j++) {
          if (matrix[i][j][0].toUpperCase() === matrix[i][j][0]) {
            matrix[i][j] = 'Voldermort' ;
          }
      }
    }

    result = matrix.join(' ')
    this.props.callBack(result);

  }



  render() {
    return (
        <div>
            <Button size='mini' color='red' onClick={this.replaceWithSecret} className="ui button">Replace with secret</Button>
            <Button size='mini' color='purple' onClick={this.diagonaleAlley} className="ui button">Diagonale Alley</Button>
            <Button size='mini' color='pink' onClick={this.replaceWithVoldermort} className="ui button">Replace with Voldermort</Button>
        </div>
    )
  }
} 

export default PhaseTwo;