let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button=>{
    button.addEventListener('click',(e) =>{
        if(e.target.innerHtml == '='){
            string = eval(string);
            input.value = string;
        }
        string += e.target.innerHtml;
        input.value = string;
    })
})