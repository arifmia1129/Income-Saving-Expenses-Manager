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
function getInnerTextValue(id, availableAmount) {
    const previousAmount = document.getElementById(id);
    previousAmount.innerText = availableAmount;
}


// function declare for clear input Field after click button 

function clearField(id) {
    document.getElementById(id).value = "";
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

    if (totalIncome >= totalExpenses) {
        // show total Expenses
        const previousExpenses = getInnerTextValue("total-expenses", totalExpenses);

        //available balance
        const previousBalance = getInnerTextValue("available-balance", availableBalance);
    }
    else if (isNaN(totalExpenses) || (isNaN(availableBalance))) {
        const h5 = document.createElement("h5");
        h5.className = "text-white bg-danger p-2 text-center";
        h5.innerText = "Upper income and expenses field is empty.";
        document.getElementById("error-show-middle").appendChild(h5);
    }
    else {
        const h5 = document.createElement("h5");
        h5.className = "text-white bg-success p-2 text-center";
        h5.innerText = "Expenses is greater than income.";
        document.getElementById("error-show-middle").appendChild(h5);
    }


    // function call for clear input field after click calculate button 

    clearField("food-expenses");
    clearField("rent-expenses");
    clearField("clothes-expenses");


});


// last calculation part 
//event handler for save button click
document.getElementById("saving-btn").addEventListener("click", function () {
    const totalIncome = getInputValue("total-income");
    const savingField = parseFloat(document.getElementById("saving-field").value);
    const savingAmount = document.getElementById("saving-amount");
    const remainingBalance = document.getElementById("remaining-balance");

    const availableBalance = parseFloat(document.getElementById("available-balance").innerText);
    const totalExpenses = parseFloat(document.getElementById("total-expenses").innerText);
    //check input value validation
    if (savingField >= 0) {
        const parsentedAmount = totalIncome * savingField / 100;
        if (availableBalance >= parsentedAmount) {
            savingAmount.innerText = parsentedAmount;
            remainingBalance.innerText = availableBalance - parsentedAmount;
            console.log(remainingBalance.innerText);
        }
        else {
            const h5 = document.createElement("h5");
            h5.className = "text-white bg-danger p-2 text-center";
            h5.innerText = "# Available balance is less then saving amount that you want save.";
            document.getElementById("error-show-last").appendChild(h5);
        }
    }
    else if (savingField < 0) {
        const h5 = document.createElement("h5");
        h5.className = "text-white bg-danger p-2 text-center";
        h5.innerText = "# Invalid input type for negative number.";
        document.getElementById("error-show-last").appendChild(h5);
    }
    else {
        const h5 = document.createElement("h5");
        h5.className = "text-white bg-success p-2 text-center";
        h5.innerText = "# Invalid input type for empty field or string.";
        document.getElementById("error-show-last").appendChild(h5);
    }
    clearField("saving-field");
});
