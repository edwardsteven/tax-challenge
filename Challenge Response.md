# Application - Edward Steven

## Tests

The tests for this challenge are written in Jest, please run them with ```npm run test``` or read through the `tax_calculation.test.js` file to understand the coverage.

## Tax Calculation

I have provided two seperate methods for calculating the tax, one using a while loop and one using map/reduce in order to demonstrate two varied approaches to solving this problem; the tests for these two methods are identical.

## Super Calculation

My super calculation is based on an assumption that the employee contributions are 9.5% of the gross salary.


## Calculator

If for whatever reason the tests aren't able to be run, I have provided a `calculator.html` file as part of repo which contains a field where a salary can be input, and the calculated tax and super contributions will be displayed.

## Form Reasoning

The start of the form includes a name ("Welcome, Sarah") to allow the form to be a bit more personal, and I'm assuming that HR knows the recruits first name and is able to pass that information through via query string or similar.

I chose to select Full Name, Preferred Name and Date of Birth as they are relevent to the recruit; full name is to ensure this is captured correctly by HR (even though we've already identified we know the recruits first name), preferred name is to ensure that a recruits preference of name is documented and date of birth is for complete personnel files as well as celebrations. I have elected to exclude gender from my form as this is largely irrelevant to employment and could cause offense if a recruit identified as a gender either not supplied (in a dropdown list), or felt offended at being asked.

I chose to add contact details to ensure a new recruit could be contacted if and when required, and also included an input for a physical address for Health and Safety reasons (worrying unexplained attendance or similar).

I included two fields for emergency contact details in case of medical emergency or similar.

I included fields for a BSB/bank account, a super provider and a Tax File Number; the BSB / bank account fields are so the recruit can get paid, the Tax File Number is to ensure payroll can make payments and deductions for the right person, and the super provider field so that the recruit can notify the employer of which super fund they are with.

Finally, I included a field for a new recruit to list any workspace considerations they would want to request to ensure HR is able to keep a record of these details and any changes made for health and safety compliance.