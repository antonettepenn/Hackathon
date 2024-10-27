document.getElementById("calculateBudget").addEventListener("click", function() {
    const monthlyIncome = parseFloat(document.getElementById("monthlyIncome").value);
    const housing = parseFloat(document.getElementById("housing").value) || 0;
    const groceries = parseFloat(document.getElementById("groceries").value) || 0;
    const healthcare = parseFloat(document.getElementById("healthcare").value) || 0;
    const entertainment = parseFloat(document.getElementById("entertainment").value) || 0;

    // Calculate total expenses
    const totalExpenses = housing + groceries + healthcare + entertainment;

    // Display the results
    const budgetResult = document.getElementById("budgetResult");
    if (monthlyIncome < totalExpenses) {
        budgetResult.innerHTML = `Your expenses exceed your income by $${(totalExpenses - monthlyIncome).toFixed(2)}.`;
    } else {
        budgetResult.innerHTML = `You are within budget! You have $${(monthlyIncome - totalExpenses).toFixed(2)} left.`;
    }

    // Create a chart
    createChart(monthlyIncome, totalExpenses);
});

function createChart(income, expenses) {
    const ctx = document.getElementById("budgetChart").getContext("2d");
    const chart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Income", "Expenses"],
            datasets: [{
                label: "Budget Overview",
                data: [income, expenses],
                backgroundColor: ["#007BFF", "#FF6384"],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
