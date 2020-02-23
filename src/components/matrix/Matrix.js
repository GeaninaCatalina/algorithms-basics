import React from 'react';
import { Button } from 'semantic-ui-react';

class Matrix extends React.Component {

  operationsWithSpareArrays = () => {
    let result; 
    const firstObj = {
      '50#809' : 5,
      '90#72' : 3,
      '107#100' : 10,
      '801#50' : 5,
      '20#90' : 3,
    }

    const secondObj = {
      '1000#200' : 10,
      '91#10' : 5,
      '802#2000' : 4,
      '2000#100' : 9,
      '20#90' : 3
    } 

    const input = +this.props.input;

    if (input === 1) {
      result = this.calculateSum(firstObj, secondObj); 
    } else if (input === 2) {
      result = this.calculateProd(firstObj, secondObj); 
    } else {
      result = 'No valid input. Press 1 for SUM or press 2 for PROD'; 
    }

    this.props.callBack(result); 
  }

  calculateSum = (obj1, obj2) => {
    let arrayKeyObj1 = Object.keys(obj1); 
    let arrayKeyObj2 = Object.keys(obj2); 
    let arrayValuesObj1 = Object.values(obj1); 
    let arrayValeusObj2 = Object.values(obj2); 
    let keySum = [];
    let valuesSum = []; 

    for (let i = 0; i < arrayKeyObj1.length; i++) {
      if (arrayKeyObj1[i] === arrayKeyObj2[i]) {
        keySum.push(arrayKeyObj1[i]); 
        valuesSum.push(arrayValuesObj1[i] + arrayValeusObj2[i]); 
        arrayValeusObj2 = arrayValeusObj2.splice(i, 1);
        arrayKeyObj2 = arrayKeyObj2.splice(i, 1); 
      } else  {
        keySum.push(arrayKeyObj1[i]); 
        valuesSum.push(arrayValuesObj1[i]);
      }  
    }

    for (let i = 0; i < arrayKeyObj2.length; i++) { 
      keySum.push(arrayKeyObj2[i]); 
      valuesSum.push(arrayValeusObj2[i]);
    } 

    return this.mergeIntoObject(keySum, valuesSum); 
  } 

  mergeIntoObject = (keys, values ) => {
    let result = {}; 
    keys.forEach((key, i) => result[key] = values[i]);

    return result; 

    

  }
  render () {
    return (
    <div>
      <Button size='mini' color='pink' onClick={this.operationsWithSpareArrays} className="ui button">SpareArrays</Button>
    </div>)
  }
}

export default Matrix; 