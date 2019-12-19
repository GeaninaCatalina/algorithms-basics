import React from 'react';
import { Button } from 'semantic-ui-react';

class OrderArray extends React.Component {
    // Se considera o matrice de n linii si m coloane cu elemente de tipul numeric.
    // Se cere sa se ordoneze liniile astfel: 
    // Daca ultimul element este par, linia se va ordona crescator.
    // Daca ultimul elemenet este impar, linia se va ordona descrescator.
    // Daca oricare dintre primul sau ultimul elemenet este 0, 
    // patratele perfecte din linie vor fi inlocuite cu radacina lor patratica
    // iar apoi linia va fi ordonata crescator. 

  orderComplexArray = () => {
    let matrix = [[2, 5, 80, 36, 100], 
                  [7, 5, 8, 36, 77], 
                  [0, 90, 8, 36, 0], 
                  [0, 5, 25, 36, 0]]; 
    let result; 
          
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][matrix.length] % 2 === 0 && matrix[i][matrix.length] != 0) {
        this.orderAsc(matrix[i]); 
      } else if(matrix[i][matrix.length] % 2 === 1 && matrix[i][matrix.length] != 0) {
        this.orderDesc(matrix[i]); 
      } else if (matrix[i][0] === 0 || matrix[i][matrix.length - 1] === 0) {
        for (let j = 0; j < matrix[i].length; j++) {
          if (Math.sqrt(matrix[i][j]) === Math.floor(Math.sqrt(matrix[i][j]))) {
            matrix[i][j] = Math.sqrt(matrix[i][j]);
        }
        this.orderAsc(matrix[i]);
      }        
    }  
    
    result = matrix.join(' '); 
    this.props.callBack(result);
  }
}

  orderAsc = (array) => {
    let contour; 
    let max = 0; 

    do { 
      contour = false; 
      for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i+1]) {
          max = array[i]; 
          array[i] = array[i+1]; 
          array[i+1] = max; 
          contour = true; 
        }
      }
    } while (contour); 

    return array; 
  } 

  orderDesc = (array) => {
    let contour; 
    let max = 0; 

    do { 
      contour = false; 
      for (let i=0; i < array.length - 1; i++) {
        if (array[i] < array[i+1]) {
          max = array[i]; 
          array[i] = array[i+1]; 
          array[i+1] = max; 
          contour = true; 
        }
      }
    } while (contour); 

    return array; 
  } 

  render() {
    return (
        <div>
         <Button size='mini' color='green' onClick={this.orderComplexArray} className="ui button">Order Array</Button>
        </div>
    )
  }
}

export default OrderArray; 