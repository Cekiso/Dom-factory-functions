// get a reference to the sms or call radio buttons
var billItemTypeRadio = document.querySelector(".billItemTypeRadio");
//get a reference to the add button
var radioBillAddBtn = document.querySelector(".radioBillAddBtn");
//create a variable that will keep track of the total bill
var callTotalTwo = document.querySelector(".callTotalTwo");
var smsTotalTwo = document.querySelector(".smsTotalTwo");
var TotalTwo = document.querySelector(".totalTwo");
//add an event listener for when the add button is pressed
var callBillTotal = 0;
var smsBillTotal = 0;
var totalBillTotal = 0;
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen


var radioBillinstance = radioBill();

function radioBillTotal() {



    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn) {

        radioBillinstance.calcBill(checkedRadioBtn.value)

    }
    // //color the total based on the criteria
    if (radioBillinstance.TotalCost() >= 30 && radioBillinstance.TotalCost() < 50) {
        // adding the danger class will make the text red
        TotalTwo.classList.add("warning");

    } else if (radioBillinstance.TotalCost() >= 50) {
        TotalTwo.classList.add("danger");
        //totalBillTotal.classList.remove("danger");
    }


    callTotalTwo.innerHTML = radioBillinstance.callCost().toFixed(2);
    smsTotalTwo.innerHTML = radioBillinstance.smsCost().toFixed(2);
    TotalTwo.innerHTML = radioBillinstance.TotalCost().toFixed(2);
}
radioBillAddBtn.addEventListener('click', radioBillTotal);