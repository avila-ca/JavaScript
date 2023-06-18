const entrada = document.querySelector("#entry");
const boton = document.querySelector("button");
const salida = document.querySelector(".salida");
const cajaEntrada = document.querySelector(".entrada");
const botonClearAll = document.querySelector("#clearAll");

let tareasRaw = '';
let tareasRealizar = localStorage.getItem("misTareas");
let flag = false;
let allList = [];
let numberToDo = 1;
boton.onclick = add
window.onkeydown = add;
botonClearAll.onclick = clearAll;

if(tareasRealizar){
    console.log(tareasRealizar)
    arr = tareasRealizar.split("**");
    console.log(arr);
    listarToDo();
}

function listarToDo(){
    let i = 0;

    while(i < arr.length - 1){
        salida.insertAdjacentHTML("beforeend", `
        <div id="number${i+1}" class="toDo">
        <img class="ok"/>
        ${arr[i]} <img class="ko" src="img/imgKo.png"/>
        </div>
        `);
        document.querySelector(`#number${i+1}`).onclick = done
        i++;
    }
    numberToDo = i + 1;

}

function add(e){
    if((e.key == "Enter" || e.srcElement.onclick.name == 'add') && entrada.value){
        tareasRaw += entrada.value+"**";
        localStorage.setItem("misTareas", tareasRaw)
        allList.push(entrada.value);
        creaToDo();
        numberToDo++;
        vaciaInput();
    }else{

        errorInput();
        setTimeout(() => {
            entrada.style.color="white"
            vaciaInput();
            
        }, 2000);
    }
}
function vaciaInput(){
    
    entrada.value = '';
    entrada.focus();
    
}

function clearAll(){
    salida.innerHTML='';
    vaciaInput();
    localStorage.removeItem("misTareas");
}

function creaToDo(){
    salida.insertAdjacentHTML("beforeend", `
    <div id="number${numberToDo}" class="toDo">
    <img class="ok"/>
    ${entrada.value} <img class="ko" src="img/imgKo.png"/>
    </div>
    `);
    document.querySelector(`#number${numberToDo}`).onclick = done
}

function done(){
    if (!flag) {        
        this.querySelector(".ok").style.visibility="visible"
        this.querySelector(".ok").src = "img/imgOk.png";
        this.querySelector(".ko").style.visibility="hidden"
        this.style.textDecoration="line-through";

    }else{
        this.querySelector(".ok").style.visibility="hidden"
        this.querySelector(".ko").style.visibility="visible"
        this.style.textDecoration="none";

    }
    flag = !flag;
}

function errorInput(){

    entrada.style.color="red"
    entrada.value='Introduzca algo pendiente de realizar'
}

