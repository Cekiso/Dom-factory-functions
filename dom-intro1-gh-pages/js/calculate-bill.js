var calculateBtn = document.querySelector(".calculateBtn");
//get a reference to the calculate button

var billTotalElement = document.querySelector(".billTotal");
//get a reference to the billTotal element
var billStringElement = document.querySelector(".billString");
//get a reference to the billString

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button

function calculateBtnClicked() {
    var totalBillinstance = totalBill(billStringElement.value);

    billTotalElement.innerHTML = totalBillinstance.toFixed(2);

    //round to two decimals
    // var roundedBillTotal = billTotal.toFixed(2);
    // billTotalElement.innerHTML = roundedBillTotal;
    // console.log(roundedBillTotal)

    if (totalBillinstance >= 30) {
        billTotalElement.classList.remove("warning");
        billTotalElement.classList.add("danger");

    } else if (totalBillinstance >= 20) {
        billTotalElement.classList.add("warning");
        billTotalElement.classList.remove("danger");
    } else {
        billTotalElement.classList.remove("warning");
        billTotalElement.classList.remove("danger");
    }


}

calculateBtn.addEventListener('click', calculateBtnClicked);