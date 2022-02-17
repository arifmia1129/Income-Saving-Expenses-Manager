// function declare for input field 
function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputFieldValue = parseFloat(inputField.value);

    //check input value validation
    if (inputFieldValue >= 0) {
        return inputFieldValue;
    }
    else if (inputFieldValue < 0) {
        const h5 = document.createElement("h5");
        h5.className = "text-white bg-danger p-2 text-center";
        h5.innerText = "# Invalid input type for negative number of" + " " + inputField.placeholder.toLowerCase() + " " + "field";
        document.getElementById("error-show").appendChild(h5);
    }
    else {
        const h5 = document.createElement("h5");
        h5.className = "text-white bg-success p-2 text-center";
        h5.innerText = "# Invalid input type for empty field or string of" + " " + inputField.placeholder.toLowerCase() + " " + "field";
        document.getElementById("error-show").appendChild(h5);
    }
}


//function declare for using innertext
function getInnerTextValue(id) {
    const previousAmount = document.getElementById(id);
    return previousAmount;
}


//event handler for calculate button
document.getElementById("calculate-btn").addEventListener("click", function () {

    // call function 
    const totalIncome = getInputValue("total-income");
    const foodExpenses = getInputValue("food-expenses");
    const rentExpenses = getInputValue("rent-expenses");
    const clothesExpenses = getInputValue("clothes-expenses");

    // add total Expenses and available Balance
    const totalExpenses = foodExpenses + rentExpenses + clothesExpenses;
    const availableBalance = totalIncome - totalExpenses;

    // show total Expenses
    const previousExpenses = getInnerTextValue("total-expenses");
    previousExpenses.innerText = parseFloat(previousExpenses.innerText) + totalExpenses;

    //available balance
    const previousBalance = getInnerTextValue("available-balance");
    previousBalance.innerText = parseFloat(previousBalance.innerText) + availableBalance;




})