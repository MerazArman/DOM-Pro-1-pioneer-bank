let loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", function() {
    const signAria = document.getElementById("loginAria");
    signAria.style.display = "none";
    const vitorerPart = document.getElementById("secondPart");
    vitorerPart.style.display = "block"

})

///               hhhhhh



const depositBtn = document.getElementById("deposit-btn");
depositBtn.addEventListener("click", function() {
    let depositAmount = document.getElementById("deposit-amount").value;
    let objNewDeposit = parseFloat(depositAmount)
    const currentDeposit = document.getElementById("current-deposit").innerText;
    const objOldDeposit = parseFloat(currentDeposit);
    const totalDepositAmount = objNewDeposit + objOldDeposit;


    document.getElementById("current-deposit").innerText = totalDepositAmount;
    const currentBalance = document.getElementById("current-balance").innerText;
    const objOldBalance = parseFloat(currentBalance)
    const newBalanceAmount = objNewDeposit + objOldBalance;
    document.getElementById("current-balance").innerText = newBalanceAmount;

    document.getElementById("deposit-amount").value = "";

})

// withdraw box   ----------------------


const withdrawBtn = document.getElementById("withdraw-btn");
withdrawBtn.addEventListener("click", function() {
    let withdrawObj = document.getElementById("withdraw-obj").value;
    let withdrawNumber = parseFloat(withdrawObj);
    let withdrawOldObj = document.getElementById("old-withdraw").innerText;
    let withdrawNewNumber = parseFloat(withdrawOldObj);
    let totalWithdrawAmount = withdrawNumber + withdrawNewNumber;
    document.getElementById("old-withdraw").innerText = totalWithdrawAmount;



    const currentBalance = document.getElementById("current-balance").innerText;
    const objOldBalance = parseFloat(currentBalance)
    const totalBalance = objOldBalance - withdrawNumber;
    document.getElementById("current-balance").innerText = totalBalance;

    document.getElementById("withdraw-obj").value = "";

})