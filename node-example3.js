const rect = {
    perimeter: (x, y) => 2 * (x + y),
    area: (x, y) => x * y
};

function solveRect(I,w){
    console.log(`Solving for rectange with dimensions: ${I}, ${w}`); //L and W
    if(I <= 0 || w <= 0){ //if statement to make sure if L  or W is less than 0
        console.log(`Rectangle must be greater than zero. values: ${I}, ${w}`)
    } else {
        console.log(`Area of rectangle: ${rect.area(I,w)}`);
        console.log(`Perimeter of rectangle: ${rect.perimeter(I,w)}`);
    }
}

solveRect(6,2);
solveRect(8,1);
solveRect(0,9); //error
solveRect(4,-1); //error