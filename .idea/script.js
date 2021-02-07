'use strict'

//NoNigbrs1 = Number od living neigbourous (neigbourous  ===1 )

//if you are 0
//NoNigbrs1 === 3? 1 : 0

//if you are 1
//NoNigbrs1 === 3|| NoNigbrs === 2|? 1 : 0





let rows;
let col;
let grid;
let reso = 20;
let state;
let sum;

//-------------------------------------My Functions--------------------------------------------------
function make2DArray(col,rows){
    let arr = new Array(col);
    for (let i=0; i<col; i++){
        arr[i] = new Array(rows)
    }
    return arr;
}
//count the number of live neigbrs and return the new state
function newState (  ){
     sum =  grid[col -1][rows] + grid[col+ 1][rows] + grid[col+ 1][rows - 1] +  grid[col -1][rows - 1] +  grid[col][rows - 1] +
       grid[col+ 1][rows + 1] +  grid[col -1][rows+ 1] +  grid[col][rows + 1];

    state = (grid[col][rows] === 0 && sum === 3) ?   1 :   0;
    state =  (grid[col][rows] === 1 && sum === 3 || sum === 2) ? 1 :   0;
    return state;

}





//***********************************Built in Functions-------------------------------------------
function setup(){
    createCanvas(600, 400);
    col = width /reso;
    rows = width / reso;
    background(153);
    line(0, 0, width, height);
    background(0);
    grid= make2DArray(col,rows);

    for (let i=0; i<col ;i++){
        for(let j=0; j<rows; j++){
            grid[i][j] =  floor(random(2));

        }
   }

}
function draw(){

    for (let i=0; i<col ;i++) {
        for (let j = 0; j < rows; j++) {

            let x = i* reso;
            let y = j * reso;
            if (grid[i][j] === 0) {
                fill(255);
                rect(x,y,reso    ,reso  )
              //  stroke(0);

            }

        }
        }
    let gridNewGen= make2DArray(col,rows);

        for (let i = 0; i < col; i++) {
            for (let j = 0; j < rows; j++) {
                if (i === 0 || j === 0 || i === col - 1 || j === rows - 1) continue;
                sum = grid[i - 1][j] + grid[i + 1][j] + grid[i + 1][j - 1] + grid[i - 1][j - 1] + grid[i][j - 1] +
                    grid[i + 1][j + 1] + grid[i - 1][j + 1] + grid[i][j + 1];

                if (grid[i][j] === 0 && sum === 3) {
                    gridNewGen[i][j] = 1;
                } else if (grid[i][j] === 1 && sum === 3 || sum === 2) {
                    gridNewGen[i][j] = 1;
                } else gridNewGen[i][j] = 0;



                console.log(gridNewGen[i][j])
            }

            grid = gridNewGen;


        }


        }







