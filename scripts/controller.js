// DOM  = Glue b/w View and Model
import salaryOperations from "./service.js";
window.addEventListener('load', bindEvents);
function bindEvents(){  
    document.getElementById('compute').addEventListener('click', computeIt);
}

function createPTag(key, result){
    const pTag = document.createElement('p'); // <p>Hra is</p>
    pTag.innerText = `${key} is ${result}`;
    return pTag;
}

function computeIt(){
    const basicSalary = parseFloat(document.getElementById('basic-salary').value);
    salaryOperations.basicSalary = basicSalary;
    const div = document.getElementById('output');
    for(let key in salaryOperations){
        if(typeof(salaryOperations[key])==='function'){
            let result = salaryOperations[key]();
            console.log(result);
            div.appendChild(createPTag(key, result));
        }
   
    }
    
    // document.getElementById('hra').innerText = salaryOperations.hra();
    // document.getElementById('da').innerText = salaryOperations.da();
    // document.getElementById('ta').innerText = salaryOperations.ta();
    // document.getElementById('ma').innerText = salaryOperations.ma();
    // document.getElementById('pf').innerText = salaryOperations.pf();
    // document.getElementById('tax').innerText = salaryOperations.tax();
    // document.getElementById('gs').innerText = salaryOperations.gs();
    // document.getElementById('ns').innerText = salaryOperations.ns();
}