var billTypeText = document.querySelector(".billTypeText");
// get a reference to the textbox where the bill type is to be entered
var addToBillBtn = document.querySelector(".addToBillBtn");
//get a reference to the add button
var callsTotalElem = document.querySelector(".callTotalOne");
var smsTotalElem = document.querySelector(".smsTotalOne");
var TotalElem = document.querySelector(".totalOne");
//create a variable that will keep track of the total bill

var sms = 0;
var call = 0;
var total = 0;

var txtBillinstance = txtBill();
//add an event listener for when the add button is pressed
function textBillTotal() {

    var calcBill = txtBillinstance.calcBill(billTypeText.value);




    // //color the total based on the criteria
    if (txtBillinstance.getTotalCost() >= 50) {
        // adding the danger class will make the text red

        TotalElem.classList.remove("warning");
        TotalElem.classList.add("danger");
    } else
    if (txtBillinstance.getTotalCost() >= 30) {
        TotalElem.classList.add("warning");
        TotalElem.classList.remove("danger");
    }
    //update the totals that is displayed on the screen.
    callsTotalElem.innerHTML = txtBillinstance.getcallCost().toFixed(2);
    smsTotalElem.innerHTML = txtBillinstance.getsmsCost().toFixed(2);
    TotalElem.innerHTML = txtBillinstance.getTotalCost().toFixed(2);

}

addToBillBtn.addEventListener('click', textBillTotal);
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen