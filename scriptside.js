let result = document.getElementById("inputtext");

let calculate = (value) => {
    if (value === '-') {
        if (result.value.endsWith('-')) {
            result.value = result.value.slice(0, -1); // Remove the trailing '-' if present
            result.value += '+';
        } else {
            result.value += value;
        }
    } else {
        result.value += value;
    }
};

let calculateFunction = (func) => {
    result.value += func + '(';
};

let calculateOperator = (operator) => {
    result.value += operator;
};

let Result = () => {
    try {
        let expression = result.value
            .replace(/sin\(/g, 'Math.sin(Math.PI/180*')
            .replace(/cos\(/g, 'Math.cos(Math.PI/180*')
            .replace(/tan\(/g, 'Math.tan(Math.PI/180*')
            .replace(/sqrt\(/g, 'Math.sqrt(')
            .replace(/pow\(/g, 'Math.pow('); 
        result.value = eval(expression);
    } catch (err) {
        alert("Enter a valid input");
    }
};

function clr() {
    result.value = "";
}

function del() {
    result.value = result.value.slice(0, -1);
}