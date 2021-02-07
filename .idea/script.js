//NoNigbrs1 = Number od living neigbourous (neigbourous  ===1 )
//if you are 0
//NoNigbrs1 === 3? 1 : 0

//if you are 1
//NoNigbrs1 === 3|| NoNigbrs === 2|? 1 : 0

'use strict'
let rows;
let col;
let grid;
let reso = 20;


//-------------------------------------My Functions--------------------------------------------------
function make2DArray(col,rows){
    let arr = new Array(col);
    for (let i=0; i<col; i++){
        arr[i] = new Array(rows)
    }
    return arr;
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
    gridNewGen= make2DArray(col,rows);

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
    }



