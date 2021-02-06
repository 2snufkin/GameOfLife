'use strict1'
let rows;
let col;
let grid;
let reso = 20;

function make2DArray(col,rows){
    let arr = new Array(col);
    for (let i=0; i<col; i++){
        arr[i] = new Array(rows)
    }
    return arr;
}


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
            grid[i][j] = Math.floor(random(2));

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



