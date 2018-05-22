Bitmap.prototype.fill = function(row, col, new_color) {
    const old_color = this.grid[row][col];
    if(old_color === new_color) return;
    this.setColor(row, col, new_color);
    console.log(this.grid.length);
    console.log(this.grid[0].length)
    var queue = [];

    queue.push([row , col])

    let currentPositionX = 0;
    let currentPositionY = 0;

    while (queue.length !== 0){
        currentPositionX = queue[0][0];
        currentPositionY = queue[0][1];

        //check to the right
        if(currentPositionY < this.grid[0].length){
            if(this.grid[currentPositionX][(currentPositionY + 1)] === old_color){
                this.setColor(currentPositionX , (currentPositionY + 1) , new_color);
                queue.push([currentPositionX , currentPositionY + 1]);
            }
        } 
        
        //check to the left
        if(currentPositionY > 0){
            if(this.grid[currentPositionX][(currentPositionY - 1)] === old_color){
                this.setColor(currentPositionX , (currentPositionY - 1) , new_color);
                queue.push([currentPositionX , currentPositionY - 1]);
            }
        }
        //check below
        if(currentPositionX < this.grid.length - 1){
            if(this.grid[currentPositionX + 1][currentPositionY] === old_color){
                this.setColor(currentPositionX + 1 , currentPositionY , new_color);
                queue.push([currentPositionX + 1, currentPositionY]);
            }
        }
       
        //check above
        if(currentPositionX > 0){
            if(this.grid[currentPositionX - 1][currentPositionY] === old_color){
                this.setColor(currentPositionX - 1, currentPositionY , new_color);
                queue.push([currentPositionX - 1, currentPositionY]);
            }
        }
        
        queue.shift();

    }
    // The rest of the flood fill algorithm is given in pseudo-code below.
    // Convert the following pseudo-code comments into javascript
    // to complete the implementation of this method.
    //
    //
    // Push the coordinates [row, col] onto the queue.
    // While the queue is not empty:
    //    Shift a pair of coordinates [r,c] off the front of the queue.
    //    The 4-connected neighbors are the cells above, below, left, and right.
    //    Check each of those 4 neighbors:
    //       If the neighbor is old_color:
    //          Set the neighbor to new_color.
    //          Add the neighbors coordinates to the queue
    //          (to ensure we later check its neighbors as well).

    
}