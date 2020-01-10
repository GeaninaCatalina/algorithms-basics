
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



generateAIMoves = (array) => {
  let table = [];
  for (let i = 0; i < 20; i++) {
    table.push([]);
    for (let j = 0; j < 20; j++) {
      table[i].push('');
    }
  } 
    console.log(array);
    console.log(table); 
    for (let i = 0; i < 20; i++){
      for (let j = 0; j < 20; j++){
        if (array[i][j] !=''){ 
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
    console.log(table.join(''))
    
  } 