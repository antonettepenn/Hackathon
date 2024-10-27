function calculateTRSBenefit(yearsOfService, averageSalary, multiplier = 0.023) {
    return yearsOfService * averageSalary * multiplier; // Calculate the annual TRS benefit
}

function calculateFutureValue(annualContribution, growthRate, years) {
    const rate = growthRate / 100;
    return annualContribution * ((Math.pow(1 + rate, years) - 1) / rate); // Future value calculation
}

function calculateMonthlyIncome(futureValue, yearsInRetirement = 20) {
    const months = yearsInRetirement * 12; 
    return futureValue / months; // Calculate monthly income based on future value
}

function calculateRetirement() {
    // Get input values
    const salary = parseFloat(document.getElementById("salary").value);
    const yearsOfService = parseInt(document.getElementById("yearsOfService").value);
    const averageSalary = parseFloat(document.getElementById("averageSalary").value);
    const annual403bContribution = parseFloat(document.getElementById("403bContribution").value);
    const annualIRAContribution = parseFloat(document.getElementById("iraContribution").value);
    const growthRate = parseFloat(document.getElementById("growthRate").value);
    const yearsUntilRetirement = parseInt(document.getElementById("yearsUntilRetirement").value);

    // Calculate TRS Benefit (annual and monthly)
    const annualTRSBenefit = calculateTRSBenefit(yearsOfService, averageSalary);
    const monthlyTRSBenefit = annualTRSBenefit / 12;

    // Calculate future values
    const futureValue403b = calculateFutureValue(annual403bContribution, growthRate, yearsUntilRetirement);
    const futureValueIRA = calculateFutureValue(annualIRAContribution, growthRate, yearsUntilRetirement);

    // Calculate monthly incomes for 403(b) and IRA
    const monthlyIncome403b = calculateMonthlyIncome(futureValue403b);
    const monthlyIncomeIRA = calculateMonthlyIncome(futureValueIRA);

    // Total monthly retirement income
    const totalMonthlyRetirementIncome = monthlyTRSBenefit + monthlyIncome403b + monthlyIncomeIRA;

    // Display results
    // Display results
    document.getElementById("results").innerHTML = `
    <h2>Retirement Income Summary</h2>
    <p><strong>Monthly TRS Benefit:</strong> $${monthlyTRSBenefit.toFixed(2)}</p>
    <p><strong>Monthly Income from 403(b):</strong> $${monthlyIncome403b.toFixed(2)}</p>
    <p><strong>Monthly Income from IRA:</strong> $${monthlyIncomeIRA.toFixed(2)}</p>
    <p><strong>Total Monthly Retirement Income:</strong> $${totalMonthlyRetirementIncome.toFixed(2)}</p>
    <br />
    
    <h2>Understanding Your Retirement Income Summary</h2>
    <p><strong>Monthly TRS Benefit:</strong> $${monthlyTRSBenefit.toFixed(2)} - This amount represents your monthly income from TRS benefits.</p>
    <p><strong>Monthly Income from 403(b):</strong> $${monthlyIncome403b.toFixed(2)} - This is your monthly income from your 403(b) retirement savings plan.</p>
    <p><strong>Monthly Income from IRA:</strong> $${monthlyIncomeIRA.toFixed(2)} - This is your monthly income from your Individual Retirement Account.</p>
    <p><strong>Total Monthly Retirement Income:</strong> $${totalMonthlyRetirementIncome.toFixed(2)} - This is your total combined monthly income from all sources.</p>
    <br />

    <h2>How to Use This Data</h2>
    <ul>
        <li><a href="budget.html" style="color:grey; text-decoration:underline">Budget</a> using your total monthly retirement income</li>
        <li><a href="planning.html" style="color:grey; text-decoration:underline">Plan</a> if your total income is lower than your expected expenses</li>
        <li><a href="assessment.html" style="color:grey; text-decoration:underline">Assess</a> if you're on track for your retirement goals</li>
    </ul>
    <br />

    <h2>Experimenting with Values</h2>
    <p>Try adjusting salary, years of service, average salary, contribution amounts, growth rate, and years until retirement to see how your retirement income changes.</p>

    <a href="calculator.html"><button type="button">Start Again</button></a>
`};
