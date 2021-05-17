// get a reference to the sms or call radio buttons
var billItemTypeWithSettings1 = document.querySelector(".billItemTypeWithSettings")
var callCostSetting = document.querySelector(".callCostSetting");
var smsCostSetting = document.querySelector(".smsCostSetting");
var warningLevelSetting = document.querySelector(".warningLevelSetting");
var criticalLevelSetting = document.querySelector(".criticalLevelSetting");
// get refences to all the settings fields
var callTotalSettings = document.querySelector(".callTotalSettings");
var smsTotalSettings = document.querySelector(".smsTotalSettings");
var totalSettings = document.querySelector(".totalSettings");

//get a reference to the add button
var addRadioBtn = document.querySelector(".addRadioBtn");
//get a reference to the 'Update settings' button
var updateSettings1 = document.querySelector(".updateSettings");
// create a variables that will keep track of all the settings
var Billinstance = BillWithSettings()

updateSettings1.addEventListener('click', function() {
    Number(Billinstance.setCallCost(Number(callCostSetting.value)));
    Number(Billinstance.setSmsCost(Number(smsCostSetting.value)));
    Number(Billinstance.setWarningLevel(warningLevelSetting.value));
    Number(Billinstance.setCriticalLevel(criticalLevelSetting.value));
    color();

});

//fuction
function settingBill() {
    var radioReference = document.querySelector("input[name='billItemTypeWithSettings']:checked");

    if (radioReference) {
        Billinstance.calcBill(radioReference.value);
    }

    // total1 = callCost + smsCost;

    callTotalSettings.innerHTML = Billinstance.getCallCost().toFixed(2);
    smsTotalSettings.innerHTML = Billinstance.getSmsCost().toFixed(2);
    totalSettings.innerHTML = Billinstance.getTotalCost().toFixed(2);
    color();
}

addRadioBtn.addEventListener('click', settingBill);

function color() {
    totalSettings.classList.remove('warning');
    totalSettings.classList.remove('danger');
    totalSettings.classList.add(Billinstance.totalClassName());

}



//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.