var income = document.getElementById('income');
var food = document.getElementById('food');
var rent = document.getElementById('rent');
var others = document.getElementById('others');
var expenses = document.getElementById('expenses');
var balance = document.getElementById('balance');
var save = document.getElementById('save');
var savingAmount = document.getElementById('saving-amount');
var remainingBalance =document.getElementById('remaining-balance');
// console.log(income.value);
function cost(){
    
    if(food.value == '')food.value = 0;
    if(rent.value == '')rent.value = 0;
    if(others.value =='')others.value = 0;
    expenses.innerText = parseFloat(food.value) + parseFloat(rent.value)  + parseFloat(others.value);
    if(income.value == '')alert('Please!! Input your income field.')
    else if(parseFloat(income.value) - parseFloat(expenses.innerText) >= 0)balance.innerText = parseFloat(income.value) - parseFloat(expenses.innerText);
    else {
        alert('Cost is higher than income!!');
        income.value = '';
        food.value = '';
        rent.value = '';
        others.value = '';
    };
}
function savee(){
    if(parseFloat(save.value) > 100){alert('What the hack!! you can not save more than 100% :[');save.value = '';}
    else if(parseFloat(save.value) < 0){alert('Murkho!!🙄');save.value = '';}
    else{
        savingAmount.innerText = parseFloat(balance.innerText) * parseFloat(save.value) / 100;
    remainingBalance.innerText = parseFloat(balance.innerText) - parseFloat(savingAmount.innerText);
    }
}
