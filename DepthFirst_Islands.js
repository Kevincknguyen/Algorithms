
// https://leetcode.com/problems/number-of-islands/

/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    let output=0;
    // loop through arrays
    for (let row=0;row<grid.length;row++){
        for (let column=0;column<grid[row].length;column++){
            // if you find a single land
            if (grid[row][column]=="1"){
                output+=1
                test(grid,row,column)
            }
        }
    }
    return output
};


var test=function(grid,row,column){
    // Is grid[row][column] out of bounds, or water?
    if (row<0 || row>grid.length-1 || column<0|| column>grid[row].length-1 ||grid[row][column]=="0") {
        return
    }
    // else cascade
    else if (grid[row][column]=="1"){
        grid[row][column]="unicorns"
        test(grid,row-1,column)
        test(grid,row+1,column)
        test(grid,row,column+1)
        test(grid,row,column-1)
        
    }
    
}
