function add(){
    let a = parseInt(document.getElementById("input1").value);
    let b = parseInt(document.getElementById("input2").value);
    let sum = a + b;

    document.getElementById("result").innerHTML = "The sum is " + sum;

}

function subtract(){
    let a = parseInt(document.getElementById("input1").value);
    let b = parseInt(document.getElementById("input2").value);
    

let product = a-b;

document.getElementById("result").innerHTML = " The product is " + product;
}

function multiply(){
    let a = parseInt(document.getElementById("input1").value);
    let b = parseInt(document.getElementById("input2").value);

    let answer = a*b;
    document.getElementById("result").innerHTML = " The answer is " + answer;
}

function divide(){
    let a = parseInt(document.getElementById("input1").value);
    let b = parseInt(document.getElementById("input2").value);

    let answer1 = a/b;

    document.getElementById("result").innerHTML = " The answer is " + answer1;

}