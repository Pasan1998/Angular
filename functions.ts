function add(num1: number, num2: number): number {
  return num1 + num2;
}

const sub = (num1: number, num2: number): number => num2 - num1;

console.log(sub(10, 20));

// optional parameters

function addnumber(num1: number, num2: number, num3?: number): number {
  return num3 ? num1 + num2 + num3 : num1 + num2;
  //simple if else statement
}

//  rest Parameters

function restpara( num1 : number, num2: number, ...num3: number[]): number{
    return num1+ num2 + num3.reduce((a,b)=> a+b,0)
}

let numbers = [2,3,5,6,9]

console.log(restpara (20,20,...numbers))


// generic functions

