import React from 'react';
import { Button } from 'semantic-ui-react';

class PhaseOne extends React.Component {

  isPrime = () => {
    let result;
    const n = this.props.input;

    for (let i = 2; i < Math.sqrt(n); i++) {
      if (n % i === 0) {
        result = 'Number is not prime';
      }
    }

    if (!result) result = 'Number is prime';

    this.props.callBack(result);
  }

  charAtIndex = () => {
    let result;
    const input = this.props.input;

    // ----------------------------------------
    const index = 3;

    result = input[index];

    // your code. save your answer in result as string

    // -------------------------------------------------
    this.props.callBack(result);;
  }

  replaceVocals = () => {
    let result;
    const input = this.props.input;

    result = input.replace(/a|e|i|o|u/gi, '$');

    this.props.callBack(result);;
  }

  //=======================EXERCITII========================================
  //========================================================================
  //Se citeste o propozitie. Afisati numarul de cuvinte. 

  wordsCounter = () => {
    let result;
    const input = this.props.input; 

    result = input.split(" ").length;

    this.props.callBack(result);;
    }


  //========================================================================
  // Se citeste o propozitie. Afisati nr de cuvinte ce incep cu vocala 

  vocalWordsCounter = () => {
    let result;
    const input = this.props.input;

    result = input.split(/ a| e| i| o| u/gi).length;

    this.props.callBack(result);;
  }

  //======================================================================== 
  //Se citeste o propozitie. Inlocuiti consoanele cu $

  replaceConsonants = () => {
    let result;
    const input = this.props.input;

    result = input.replace(/[bcdfghjklmnpqrstvwxyz]/gi, '$'); 
  
    this.props.callBack(result);;
  }

  //========================================================================
  //Se citeste o proopozitie. Inlocuiti cuvintele proprii cu GIGI.
  // Arrays: for each / filter / map
  replaceWithGigi = () => {
    let result;
    const input = this.props.input;

    const words = input.split(' '); 

    result = words.map(word => {
      if (word[0].toUpperCase() === word[0]) {
        return 'GIGI';
      }

      return word;
    }).join(' ');

    this.props.callBack(result);;
  }

  //========================================================================
  //Se citeste un shit de caractere (litere). 
  //Eliminati vocalele si apoi ordonati restul de caractere alfabetic. 

  sortString = (str) => {
    let arr = str.split(''); 
    let sorted = arr.sort(); 

    return sorted.join('');
  }

  deleteVocals = () => {
      let result;
      const input = this.props.input;

      let input2 = input.replace(/a|e|i|o|u/gi, ''); 
      result = this.sortString(input2);
      
      this.props.callBack(result);;
    }


  //========================================================================
  //6. Se citeste un shit de caractere. Este Palindrom?
  ispPalindrom = () => {
    let result;
    const input = this.props.input;

    let input2 = input.split('').reverse().join('');   

    result = input2 === input ? 'Is palindrom' : 'Is not a palindrom';

    this.props.callBack(result);;
  }

  //========================================================================
  //  Write a JavaScript function to check whether an `input` is a string or not 
    isString = () => {
      let result;
      const input = this.props.input; 
      let inputTransform;
      try {
        inputTransform = JSON.parse(input); 
      } catch (e) {
        console.log(e);
        inputTransform = input;
      }
      
      result = (typeof inputTransform === 'string' || inputTransform instanceof String) ? 'Is string' : 'Is not string'; 

      this.props.callBack(result);; 
    }

  //========================================================================
  //Write a JavaScript function to split a string and convert it into an array of words 
    convertInArray = () => {
      let result;
      const input = this.props.input;
      const punctuation = '!"#$%&\' ()*+,-./:;<=>?@[\\]^_`{|}~'; 
      const regex = new RegExp('[' + punctuation + ']', 'g'); 

      result = input.split(regex); 

      this.props.callBack(result);;
    }

  //========================================================================
  // Write a JavaScript function to convert a string in abbreviated form 

    abreviation = () => {
      let result;
      const input = this.props.input;
      const words = input.trim().split(' '); 

      const firstName = words[0] + " " + words[1].charAt(0) + ".";
      result = words.length > 1 ? firstName : words[0];  
      

      this.props.callBack(result);;
    }

  //========================================================================
  // Write a JavaScript function to hide email addresses to protect from unauthorized user. 
    hideEmail = () => {
      let result;
      const input = this.props.input;

      const words = input.split(' '); 

      result = words.map(word => {
        if (word.indexOf("@") >= 0) {
          return '***';
        }
    
        return word;
      }).join(' ');
    

      this.props.callBack(result);;
    }

  //========================================================================
  // For an random array, read a value input: 
  // a) add the input value in the begining of the array 


  addInTheBegining = () => {
    let result;
    const input = this.props.input;
    let newArray = [1, 2, 3, 45, 12, 1518, 89, 23, 78, 55, 99, 1000, 73, 41, 13, 2, 5, 7, 89, 36, 306];
    let cont1 = 0; 
    let cont2 = input; 
    let length = newArray.length; 
    for (let i = 0; i <= length + 1; i++) {
      cont1 = newArray[i]; 
      newArray[i] = cont2; 
      cont2 = cont1; 
      console.log(newArray); 
    } 
    result = newArray.join(' '); 
    this.props.callBack(result);;
  }
  // b) add the input value at the end of the array

  addAtTheEnd = () => {
    let result;
    const input = this.props.input;
    let newArray = [1, 2, 3, 45, 12, 1518, 89, 23, 78, 55, 99, 1000, 73, 41, 13, 2, 5, 7, 89, 36, 306]; 
    newArray[newArray.length + 1] = input; 
    result = newArray.join(' '); 

    this.props.callBack(result);;
  }
  // c) add the input value random in the array

  addOnRandomPosition = () => {
    let result;
    const input = this.props.input;
    let newArray = [1, 2, 3, 45, 12, 1518, 89, 23, 78, 55, 99, 1000, 73, 41, 13, 2, 5, 7, 89, 36, 306];
    let cont1 = 0; 
    let cont2 = input; 
    let arrayLength = newArray.length; 
    let random = Math.floor((Math.random() * arrayLength) + 1); 
    for (let i = random; i <= arrayLength + 1; i++) {
      cont1 = newArray[i]; 
      newArray[i] = cont2; 
      cont2 = cont1; 
    } 
    result = newArray.join(' '); 


    // your code. save your answer in result as string

    this.props.callBack(result);;
  }

  //======================================================================== 
  // if "asc" sort asc, if "desc" sort desc 

  //bubble sort asc

  orderAsc = (array) => {
    let length = array.length; 
    let swapped; 
    let max = 0; 
    do{
      swapped = false; 
      for (let i = 0; i < length; i++){
        if (array[i] > array[i +1]) {
          max = array[i]; 
          array[i] = array[i + 1]; 
          array[i + 1] = max; 
          swapped = true;  
        }
      }
    } while (swapped); 
    return array.join(' '); 
  } 

  orderDesc = (array) => {
    let length = array.length; 
    let swapped; 
    let min = 0; 
    do{
      swapped = false; 
      for (let i = 0; i < length; i++){
        if (array[i] < array[i +1]) {
          min = array[i]; 
          array[i] = array[i + 1]; 
          array[i + 1] = min; 
          swapped = true;  
        }
      }
    } while (swapped); 
    return array.join(' '); 
  } 

  orderByInput = () => {
    let result;
    const input = this.props.input;
  
    let newArray = [1, 2, 3, 45, 12, 1518, 89, 23, 78, 55, 99, 1000, 73, 41, 13, 2, 5, 7, 89, 36, 306];
    result = (input.trim() === 'ASC') ? this.orderAsc(newArray)
            :(input.trim() === 'DES') ? this.orderDesc(newArray)
            :newArray.join(' '); 

    // your code. save your answer in result as string

    this.props.callBack(result);;
  }

  //========================================================================
  //delete prime elements from an array 
  isPrimeSimple = (n) => {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false; 
      }
    }
    return true; 
  } 

  deletePrimeElements = () => {
    let result;
    let newArray = [1, 2, 3, 45, 12, 1518, 89, 23, 78, 55, 5, 7, 89, 36, 306];
    let length = newArray.length;  
    let i = 0;
    while (i < length) {
      console.log(newArray.join(' '))
      if (this.isPrimeSimple(newArray[i])) {
        for (let j = i; j < length - 1; j++) { 
          newArray[j] = newArray[j + 1]; 
        }
        newArray[length - 1] = undefined;
        length--;
      } else {
        i++; 
      } 
    }
    result = newArray.join(' '); 

    // your code. save your answer in result as string

    this.props.callBack(result);;
  }

  //======================================================================== 
  //Array harcoded. Sort all even numbers in des order 
  //and then sort all odd numbers in ascending order 

  bubbleFunctionAsc = (array) => {
    let length = array.length; 
    let swapped; 
    let max = 0; 
    do{
      swapped = false; 
      for (let i = 0; i < length; i++){
        if (array[i] > array[i +1]) {
          max = array[i]; 
          array[i] = array[i + 1]; 
          array[i + 1] = max; 
          swapped = true;  
        }
      }
    } while (swapped); 
    return array.join(' '); 
  }  



  sortEven = () => {
    let result;
    let newArray = [1, 2, 3, 45, 12, 1518, 89, 23, 78, 55, 5, 7, 89, 36, 306];
    let length = newArray.length;  
    let cont = 0; 
    for (let i = 0; i <= length; i++) {
      if (newArray[i] % 2 === 0 ) {
        newArray[i] = newArray[i] * (-1); 
        cont = cont + 1; 
      }
    }  
    this.bubbleFunctionAsc(newArray); 
    
    for (let j = 0; j < cont; j++) {
      newArray[j] = newArray[j]*(-1); 
    }
    result = newArray.join(' '); 

    this.props.callBack(result);;
  }


  //=========================Matrix===========================================
  //1. Se considera o matrice de n linii si m coloane cu elemente de tipul numeric. 
  //Afisati elementele pare din matrice. 

  isEven = (n) => { 
    return n % 2 === 0;
  } 

  evenInMatrix = () => {
    let result;
    const matrix = [
                    [1, 5, 8, 20], 
                    [4, 3, 98, 47], 
                    [50, 25, 82, 78]
                  ]; 
    
    let rowLength = matrix.length; 
    let columnLenght = matrix[0].length; 
    let evenArray = []; 
    let count = 0;

    for (let i = 0; i < rowLength; i++) {
      for (let j = 0; j < columnLenght; j++) {
        if (this.isEven(matrix[i][j])) {
          evenArray[count] = matrix[i][j];
          count++;
        }
      }
    }
    result = evenArray.join(' ');  

    this.props.callBack(result);;
  } 

  //========================================================================
  //2. Se considera o matrice de n linii si m coloane cu elemente de tipul numeric. 
  //Sortati elementele de pe coloana  X (x e input).

  orderColumn = () => {
    let result;
    const input = this.props.input;
    const matrix = [
      [1, 5, 8, 20], 
      [4, 3, 98, 47], 
      [50, 25, 82, 78]
    ];  
    let length = matrix.length; 
    let swapped; 
    let max = 0; 
    let j = input; 
    do {
      swapped = false; 
      for (let i = 0; i < length - 1; i++){
      if (matrix[i][j] > matrix[i + 1][j]) {
          max = matrix[i][j]; 
          matrix[i][j] = matrix[i + 1][j]; 
          matrix[i + 1][j] = max; 
          swapped = true;  
        }
      }
    } while (swapped); 
    
    result = JSON.stringify(matrix); 
    this.props.callBack(result);;
  }

  //========================================================================
  // 3. Se considera o matrice de n linii si m coloane cu elemente de tipul numeric. 
  // Sortati elementele de pe linia X (x e input).

  orderRow = () => {
    let result;
    const input = this.props.input;
    const matrix = [
      [1, 9, 8, 20], 
      [4, 3, 98, 47], 
      [50, 25, 82, 78]
    ];  

    this.bubbleFunctionAsc(matrix[input]);  
    result = JSON.stringify(matrix); 
    this.props.callBack(result);;
  } 

  //========================================================================
  // 4. Se considera o matrice n linii si n coloane cu elemente de tipul numeric.
  // Afisati elementele de pe diagonala principala pe un rand, si pe randul urmator elementele de pe diagonala secundara.

  diagonalsOfMatrix = () => {
    let result;
    const matrix = [
      [1, 5, 8, 20], 
      [4, 3, 98, 47], 
      [50, 25, 82, 78], 
      [20, 5, 89, 60]
    ]; 
    let n = matrix.length; 
    let dPrincipale = []; 
    let dSecondary = []; 

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++){
        if (i === j) {
          dPrincipale[j] = matrix[i][j]; 
        } 
        if (i + j === n - 1) {
          dSecondary[i] = matrix[i][j]; 
        }
      }
    } 
    const rez = {
      mainDiagonale: dPrincipale.join(' '),
      secondaryDiagonale: dSecondary.join(' ')
    }
    
    result = JSON.stringify(rez);

    this.props.callBack(result);;
}

  render() {
    return(
      <div>
        <Button size='mini' color='red' onClick={this.isPrime} className="ui button">Number is prime</Button>
        <Button size='mini' color='orange' onClick={this.charAtIndex} className="ui button">Char at index</Button>
        <Button size='mini' color='purple' onClick={this.replaceVocals} className="ui button">Replace vocals</Button>
        <Button size='mini' color='pink' onClick={this.wordsCounter} className="ui button">Words counter</Button>
        <Button size='mini' color='blue' onClick={this.vocalWordsCounter} className="ui button">Vocal words counter</Button>
        <Button size='mini' color='olive' onClick={this.replaceConsonants} className="ui button">Replace Consonants</Button>
        <Button size='mini' color='violet' onClick={this.replaceWithGigi} className="ui button">Replace with GIGI</Button>
        <Button size='mini' color='green' onClick={this.deleteVocals} className="ui button">Delete vocals and order</Button>
        <Button size='mini' color='yellow' onClick={this.ispPalindrom} className="ui button">Is palindrom</Button>
        <Button size='mini' color='red' onClick={this.isString} className="ui button">Is string</Button>
        <Button size='mini' color='orange' onClick={this.convertInArray} className="ui button">Convert In Array</Button>
        <Button size='mini' color='purple' onClick={this.abreviation} className="ui button">Abbreviate</Button>
        <Button size='mini' color='pink' onClick={this.hideEmail} className="ui button">Hide e-mail</Button>
        <Button size='mini' color='blue' onClick={this.addInTheBegining} className="ui button">Add in the begining</Button>
        <Button size='mini' color='olive' onClick={this.addAtTheEnd} className="ui button">Add in the end</Button>
        <Button size='mini' color='violet' onClick={this.addOnRandomPosition} className="ui button">Add Random</Button>
        <Button size='mini' color='green' onClick={this.orderByInput} className="ui button">Order by input</Button>
        <Button size='mini' color='yellow' onClick={this.deletePrimeElements} className="ui button">Delete prime elements</Button>
        <Button size='mini' color='red' onClick={this.sortEven} className="ui button">Sort left even elements</Button>
        <Button size='mini' color='red' onClick={this.evenInMatrix} className="ui button">Even in matrix</Button>
        <Button size='mini' color='purple' onClick={this.orderColumn} className="ui button">Order coolumn</Button>
        <Button size='mini' color='pink' onClick={this.orderRow} className="ui button">Order Row</Button>
        <Button size='mini' color='blue' onClick={this.diagonalsOfMatrix} className="ui button">Diagoonals</Button>
      </div>
    )
  }
}

export default PhaseOne;