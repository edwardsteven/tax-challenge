module.exports = {

    calculateTax: (salary, brackets) => {

        let untaxedSalary = salary;
        let taxAmount = currentBracket = prevTo = 0;

        brackets = brackets.sort(bracket => bracket.to);

        while(untaxedSalary > 0){

            const taxable = Math.min(brackets[currentBracket].to - (prevTo), untaxedSalary);

            taxAmount += brackets[currentBracket].rate * taxable

            untaxedSalary -= taxable;

            prevTo = brackets[currentBracket].to

            currentBracket++;

        }
        
        return Math.round(taxAmount) / 100;
    
    },

    calculateTaxWithMap: (salary, brackets) => {

        return brackets.sort(bracket => bracket.to).map( (bracket, i) => {

            const lastBracket = (brackets[i-1] ? brackets[i-1].to : 0)

            const amount = bracket.to - lastBracket;

            if(salary > bracket.to){
                return Math.round((bracket.rate * amount) ) / 100
            }

            return Math.max(0, Math.round((bracket.rate * (salary - lastBracket))) / 100);

        }).reduce((acc, curr) => acc + curr, 0);
    
    },

    calculateSuper: (salary, superContribution = 9.5) => {
        return Math.round(((salary / 100) * superContribution) * 100) / 100;
    }


}