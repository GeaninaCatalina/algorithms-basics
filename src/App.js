import React from 'react';
import './App.css';
import { Button } from 'semantic-ui-react'
import { instanceOf } from 'prop-types';
import { tsExternalModuleReference } from '@babel/types';

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

  isPrime = () => {
    let result;
    const n = this.state.input;

    for (let i = 2; i < Math.sqrt(n); i++) {
      if (n % i === 0) {
        result = 'Number is not prime';
      }
    }

    if (!result) result = 'Number is prime';

    this.setState({value: result});
  }

  charAtIndex = () => {
    let result;
    const input = this.state.input;

    // ----------------------------------------
    const index = 3;

    result = input[index];

    // your code. save your answer in result as string

    // -------------------------------------------------
    this.setState({value: result});
  }

  replaceVocals = () => {
    let result;
    const input = this.state.input;

    result = input.replace(/a|e|i|o|u/gi, '$');

    this.setState({value: result});
  }

//=======================EXERCITII========================================
//========================================================================
//Se citeste o propozitie. Afisati numarul de cuvinte. 

 wordsCounter = () => {
  let result;
  const input = this.state.input; 

  result = input.split(" ").length;

  this.setState({value: result});
  }


//========================================================================
// Se citeste o propozitie. Afisati nr de cuvinte ce incep cu vocala 

vocalWordsCounter = () => {
  let result;
  const input = this.state.input;

  result = input.split(/ a| e| i| o| u/gi).length;

  this.setState({value: result});
}

//======================================================================== 
//Se citeste o propozitie. Inlocuiti consoanele cu $

replaceConsonants = () => {
  let result;
  const input = this.state.input;

  result = input.replace(/[bcdfghjklmnpqrstvwxyz]/gi, '$'); 
 
  this.setState({value: result});
}

//========================================================================
//Se citeste o proopozitie. Inlocuiti cuvintele proprii cu GIGI.
// Arrays: for each / filter / map
replaceWithGigi = () => {
  let result;
  const input = this.state.input;

  const words = input.split(' '); 

  result = words.map(word => {
    if (word[0].toUpperCase() === word[0]) {
      return 'GIGI';
    }

    return word;
  }).join(' ');

  this.setState({value: result});
}

exemple = () => {
  const om1 = { name: 'dan', age: 18, cnp: '123456afsdsg'};
  const om2 = { name: 'ge', age: 14, cnp: '123456easedfs'};
  const om3 = { name: 'al', age: 11, cnp: '123456sdgfrdf'};
  const om4 = { name: 'ttr', age: 20, cnp: '123456dsfgfd'};

  const oameni = [om1, om2, om3, om4];

  // doar cnp-ul oamenilor majori

  const grownUps = oameni.filter(om => om.age >= 18)
        .map(om => om.cnp);

  // doar numele oamenilor majori in ordine alfabetica

  const people = oameni.filter(om => om.age >= 18)
                       .map(om => om.name)
                       .sort((om1, om2) => om1.name < om2.name);
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
    const input = this.state.input;

    let input2 = input.replace(/a|e|i|o|u/gi, ''); 
    result = this.sortString(input2);
    
    this.setState({value: result});
  }


//========================================================================
//6. Se citeste un shit de caractere. Este Palindrom?
ispPalindrom = () => {
  let result;
  const input = this.state.input;

  let input2 = input.split('').reverse().join('');   

  result = input2 === input ? 'Is palindrom' : 'Is not a palindrom';

  this.setState({value: result});
}

//========================================================================
//  Write a JavaScript function to check whether an `input` is a string or not 
  isString = () => {
    let result;
    const input = this.state.input; 
    let inputTransform;
    try {
      inputTransform = JSON.parse(input); 
    } catch (e) {
      console.log(e);
      inputTransform = input;
    }
    
    result = (typeof inputTransform === 'string' || inputTransform instanceof String) ? 'Is string' : 'Is not string'; 

    this.setState({value: result}); 
  }

//========================================================================
//Write a JavaScript function to split a string and convert it into an array of words 
  convertInArray = () => {
    let result;
    const input = this.state.input;
    const punctuation = '!"#$%&\' ()*+,-./:;<=>?@[\\]^_`{|}~'; 
    const regex = new RegExp('[' + punctuation + ']', 'g'); 

    result = input.split(regex); 

    this.setState({value: result});
  }

//========================================================================
// Write a JavaScript function to convert a string in abbreviated form 

  abreviation = () => {
    let result;
    const input = this.state.input;
    const words = input.trim().split(' '); 

    const firstName = words[0] + " " + words[1].charAt(0) + ".";
    result = words.length > 1 ? firstName : words[0];  
    

    this.setState({value: result});
  }

//========================================================================
// Write a JavaScript function to hide email addresses to protect from unauthorized user. 
  hideEmail = () => {
    let result;
    const input = this.state.input;

    const words = input.split(' '); 

    result = words.map(word => {
      if (word.indexOf("@") >= 0) {
        return '***';
      }
  
      return word;
    }).join(' ');
  

    this.setState({value: result});
  }

//========================================================================
// For an random array, read a value input: 
// a) add the input value in the begining of the array 


addInTheBegining = () => {
  let result;
  const input = this.state.input;
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
  this.setState({value: result});
}
// b) add the input value at the end of the array

addAtTheEnd = () => {
  let result;
  const input = this.state.input;
  let newArray = [1, 2, 3, 45, 12, 1518, 89, 23, 78, 55, 99, 1000, 73, 41, 13, 2, 5, 7, 89, 36, 306]; 
  newArray[newArray.length + 1] = input; 
  result = newArray.join(' '); 

  this.setState({value: result});
}
// c) add the input value random in the array

addOnRandomPosition = () => {
  let result;
  const input = this.state.input;
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

  this.setState({value: result});
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
        max = array [i]; 
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
        min = array [i]; 
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
  const input = this.state.input;
 
  let newArray = [1, 2, 3, 45, 12, 1518, 89, 23, 78, 55, 99, 1000, 73, 41, 13, 2, 5, 7, 89, 36, 306];
  result = (input.trim() === 'ASC') ? this.orderAsc(newArray)
          :(input.trim() === 'DES') ? this.orderDesc(newArray)
          :newArray.join(' '); 

  // your code. save your answer in result as string

  this.setState({value: result});
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

  this.setState({value: result});
}




//========================================================================
//=======================TEMPLATE=========================================

  yourFuntionNameHere = () => {
    let result;
    const input = this.state.input;

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

        {this.state.value}
        </header>
      </div>
  );
  }
}

export default App;
