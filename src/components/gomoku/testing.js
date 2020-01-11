
  let array1 = [];
  for (let i = 0; i < 20; i++) {
    array1.push([]);
    for (let j = 0; j < 20; j++) {
      array1[i].push('');
    }
  }  

   array1[10][12] = true; 
   array1[10][13] = true; 
   array1[11][12] = true; 

let player1 = true; 

   generateAIMoves = (array, player) => {
    let table = [];
    for (let i = 0; i < 20; i++) {
      table.push([]);
      for (let j = 0; j < 20; j++) {
        table[i].push(0);
      }
    } 

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
   return table; 
    
  }  

  checkValidPosition = (array, table) =>{
    let max = 0; 
    let row = 0; 
    let col = 0; 
    let found = false; 
    while (found === false){
      for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array[0].length; j++){
          if (array[i][j].length > max){
            max = array[i][j].length; 
            row = i; 
            col = j; 
          }
        }
      }  
      if (table[row][col] === '') {
        found = true; 
        return [row, col]; 
        console.log([row, col]); 
        console.log (max); 
      }
    }
    
  }
   while (!this.gameShouldEnd(table)) {
    console.log(table); 
    currentPlayer = !currentPlayer;
    let oponent = false;
    if (currentPlayer === true) {  
      const positions = this.checkValidPosition(this.generateAIMoves(table, oponent), table);
    } else {
      const positions = this.generateMove(table); 
    }      
    table[positions[0]][positions[1]] = currentPlayer;
  } 