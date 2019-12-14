import React from 'react';
import { Button } from 'semantic-ui-react';

class TicTacToe extends React.Component {

  constructor(props) {
    super(props);
  } 

  //  Se considera o matrice goala de 3 linii si 3 coloane. Programul primeste ca si input 2 cuvinte reprezentand numele celor 2 jucatori.
  //  Prin generarea aleatorie de perechi (i,j), se cere simularea unui joc de X si 0.
  //  Se cere afisarea matricii dupa fiecare miscare.

  TicTacToe = () => {
    let result;
    const input = this.props.input;
    



    this.props.callBack(result);

  }

  render() {
    return (
        <div>
          test
        </div>
    )
  }
} 

export default TicTacToe; 