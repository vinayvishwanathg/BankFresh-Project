```javascript
// Deposit button event handler
const deposit_btn = document.getElementById('deposit-btn');
deposit_btn.addEventListener('click', function() {
    const depositAmount = getInputNumber("deposit-amount");

    if (!isNaN(depositAmount) && depositAmount > 0) {
        updateBalance("current-deposit", depositAmount);
        updateBalance("current-balance", depositAmount);
        clearInputField("deposit-amount");
    } else {
        alert("Please enter a valid deposit amount.");
    }
});

// Withdraw button event handler
const withdraw_btn = document.getElementById('withdraw-btn');
withdraw_btn.addEventListener('click', function() {
    const withdrawAmount = getInputNumber("withdraw-amount");

    if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
        updateBalance("current-withdraw", withdrawAmount);
        updateBalance("current-balance", -withdrawAmount);
        clearInputField("withdraw-amount");
    } else {
        alert("Please enter a valid withdrawal amount.");
    }
});

// Function to parse string input to a number
function getInputNumber(idName) {
    const amount = document.getElementById(idName).value;
    return parseFloat(amount);
}

// Function to update balance and display
function updateBalance(idName, amount) {
    const currentElement = document.getElementById(idName);
    let currentBalance = parseFloat(currentElement.innerText);
    currentBalance += amount;
    currentElement.innerText = currentBalance.toFixed(2); // Format to two decimal places
}

// Function to clear input field
function clearInputField(idName) {
    document.getElementById(idName).value = "";
}
```

With these corrections and improvements, your code should be more robust and maintainable. Make sure to test thoroughly to ensure everything works as expected.
