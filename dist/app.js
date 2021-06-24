(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // calculator.js
  var require_calculator = __commonJS({
    "calculator.js"(exports, module) {
      module.exports = {
        calculateTax: (salary, brackets2) => {
          let untaxedSalary = salary;
          let taxAmount = currentBracket = prevTo = 0;
          brackets2 = brackets2.sort((bracket) => bracket.to);
          while (untaxedSalary > 0) {
            const taxable = Math.min(brackets2[currentBracket].to - prevTo, untaxedSalary);
            taxAmount += brackets2[currentBracket].rate * taxable;
            untaxedSalary -= taxable;
            prevTo = brackets2[currentBracket].to;
            currentBracket++;
          }
          return Math.round(taxAmount) / 100;
        },
        calculateTaxWithMap: (salary, brackets2) => {
          return brackets2.map((bracket, i) => {
            const lastBracket = brackets2[i - 1] ? brackets2[i - 1].to : 0;
            const amount = bracket.to - lastBracket;
            if (salary > bracket.to) {
              return Math.round(bracket.rate * amount) / 100;
            }
            return Math.max(0, Math.round(bracket.rate * (salary - lastBracket)) / 100);
          }).reduce((acc, curr) => acc + curr, 0);
        },
        calculateSuper: (salary, superContribution = 9.5) => {
          return Math.round(salary / 100 * superContribution * 100) / 100;
        }
      };
    }
  });

  // app.js
  var calculator = require_calculator();
  var brackets = [
    {
      to: 18200,
      rate: 0
    },
    {
      to: 37e3,
      rate: 19
    },
    {
      to: 9e4,
      rate: 32.5
    },
    {
      to: 18e4,
      rate: 37
    },
    {
      to: Infinity,
      rate: 45
    }
  ];
  var taxField = document.querySelector("#tax");
  var superField = document.querySelector("#super");
  function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  document.querySelector("#salaryInput").addEventListener("keyup", (e) => {
    const regex = new RegExp(/[$,]/gi);
    const inputSalary = e.target.value.replace(regex, "");
    if (!parseFloat(inputSalary)) {
      taxField.textContent = "$0.00";
      superField.textContent = "$0.00";
      return;
    }
    const taxAmount = calculator.calculateTaxWithMap(parseFloat(inputSalary), brackets);
    const superAmount = calculator.calculateSuper(parseFloat(inputSalary));
    console.log(taxAmount, superAmount);
    if (!isNaN(taxAmount)) {
      taxField.textContent = `$${numberWithCommas(taxAmount.toFixed(2))}`;
    }
    if (!isNaN(superAmount)) {
      superField.textContent = `$${numberWithCommas(superAmount.toFixed(2))}`;
    }
  });
})();
