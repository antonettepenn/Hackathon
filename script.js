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
        <a href="calculator.html"><button type="button">Start Again</button></a>
    `;
}
