const expenseEl = document.getElementById('expense');
const incomeEl = document.getElementById('income');
const balanceEl = document.getElementById('balance');
const transactionListEl = document.getElementById('transaction-list');
const form = document.getElementById('transaction-form');
const textInput = document.getElementById('text');
const amountInput = document.getElementById('amount');

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const text = textInput.value.trim();
  const amount = +amountInput.value;
  if (text === "" || isNaN(amount) || amount <= 0){
    alert("Please Enter A Valid Amount");
    return;
  }
  
  const transaction = {
    id: Date.now(),
    text,
    amount
  };
  transactions.push(transaction);
  updateUI();
  textInput.value = "";
  amountInput.value = "";

}); 
function updateUI(){
    
}

