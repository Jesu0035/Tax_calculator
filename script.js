'use strict'
const amount = document.getElementById('amount_price');
const taxVat = document.getElementById('taxes');
const total = document.getElementById('gran_total');
const calcBtn = document.getElementById('bt_cal');
const resetBtn = document.getElementById('reset_btn');

function TOTALInclusiveTax (amount_price, taxes){
    let totalAmount = amount_price + (amount_price * (taxes / 100));
    return totalAmount.toFixed(2);

}

//button style 
calcBtn.addEventListener('click', function(){
    if(amount.value === "" ||isNaN (taxVat.value)){
        taxVat.style.border = '2px solid red';
    
 //removing  red borders after 1,5s.
    setTimeout(function(){
        taxVat.style.border = '2px solid transparent';
},1500);
// clearing wrong input
taxes.value = "";
}
if(amount.value ==="" || isNaN (amount.value)){
amount.style.border = '2px solid red';
setTimeout(() => { amount.style.border = 
    '2px solid transparent';
    
}, 1500);
amount.value = '';



}
let finalAmount = TOTALInclusiveTax
(Number(amount_price.value), Number(taxes.value));
total.value = finalAmount;

})
resetBtn.addEventListener('click', function(){
amount.value = "";
taxVat.value = "";
total.value = "";
    
})

