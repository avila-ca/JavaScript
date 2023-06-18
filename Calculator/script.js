const out = document.querySelector("#output");
const boton = document.querySelectorAll("button");

let number1 = 0;
let number2 = 0;
let op = null;
let result = 0;
let i = 0;
let dotFlag = false;

while(i < boton.length){
    boton[i].classList.add(boton[i].textContent);
    boton[i].onclick = putnbr
    i++;
}

function putnbr(){
    if ((this.textContent >= 0 && this.textContent <=9 ) || (this.textContent == '.' && !dotFlag)){
        if (this.textContent == '.')
            dotFlag = !dotFlag;
        console.log(dotFlag)
        out.value += this.textContent
        if(!op){
            number1 += this.textContent; 
        } else{
            number2 += this.textContent;
        }
    }else if(this.textContent == '='){
        total(this.textContent)
    }else if(this.textContent == 'AC'){
        cleanAll();    
    }else if(this.textContent == 'C'){
        cleanLast();
    }else if(dotFlag && this.textContent == "."){
        alert("Error: Double dot");
    }else{
        console.log("el ultimo:  " + dotFlag)
        out.value += this.textContent;
        op = this.textContent; 
        dotFlag = false;
    }
    console.log('numbeer1 =',Number(number1), "op:" +op, '   number2 = ', Number(number2), dotFlag)
}

function cleanLast(){
    if (number2){
        number2 = 0;
        out.value = Number(number1) + op
    }else{
        number1 = 0;
        out.value = '';
    }
    dotFlag = false;
}

function cleanAll(){
    number1 = 0;
    number2 = 0;
    out.value = '';
    op = '';
    dotFlag = false;
}

function total(signo){

    if(signo == '='){
        if(op == '+'){
            result = Number(number1) + Number(number2);
        }else if(op == '-'){
            result = Number(number1) - Number(number2);
        }else if(op == '*'){
            result = Number(number1) * Number(number2);
        }else if(op == '/'){
            result = Number(number1) / Number(number2);
        }
        out.value = result;
        restaurar();
    }
}

function restaurar(){
    number1 = result;
    number2 = 0;
    op = '';
}