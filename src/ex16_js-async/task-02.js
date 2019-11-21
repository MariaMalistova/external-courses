function debounce(func, delay) { 
    let timer;
    return function() { 
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout((function(){
            func.apply(context, args);
        }), delay);
    } 
}

let input = document.querySelector('input');
input.addEventListener('input', debounce(find, 2000)); 

function find() {  
    let row = document.getElementsByTagName("td");    
    for (let i = 0; i < row.length; i++) {
        if (row[i].innerHTML.toLowerCase().indexOf(input.value.toLowerCase()) === -1) {
            row[i].parentElement.style.display = "none";
        }
        else {
            row[i].parentElement.style.display = "table-row";
        }
    }
}
