const calculator = require("./calculator");

const brackets = [
    {   
        to: 18200,
        rate: 0
    },
    {
        to: 37000,
        rate: 19
    },
    {
        to: 90000,
        rate: 32.5
    },
    {
        to: 180000,
        rate: 37
    },
    {
        to: Infinity,
        rate: 45
    }
];



const taxField = document.querySelector('#tax')
const superField = document.querySelector('#super')

function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

document.querySelector('#salaryInput').addEventListener('keyup', (e) => {

    const regex = new RegExp(/[$,]/gi);

    const inputSalary = e.target.value.replace(regex, '');

    if(!parseFloat(inputSalary)){
        taxField.textContent = "$0.00"
        superField.textContent = "$0.00"
        return;
    }

    const taxAmount = calculator.calculateTaxWithMap(parseFloat(inputSalary), brackets);
    const superAmount = calculator.calculateSuper(parseFloat(inputSalary));

    console.log(taxAmount, superAmount);

    if(!isNaN(taxAmount)){
        taxField.textContent = `\$${numberWithCommas(taxAmount.toFixed(2))}`
    }

    if(!isNaN(superAmount)){
        superField.textContent = `\$${numberWithCommas(superAmount.toFixed(2))}`
    }

})