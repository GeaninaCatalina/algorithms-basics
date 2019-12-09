import React from 'react';
import './App.css';
import { Button } from 'semantic-ui-react'
import { instanceOf } from 'prop-types';

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

        {this.state.value}
        </header>
      </div>
  );
  }
}

export default App;
