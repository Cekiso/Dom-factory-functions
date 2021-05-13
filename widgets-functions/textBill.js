function txtBill() {
    var theCallCost = 0;
    var theSmsCost = 0;
    var theTotalCost = 0;


    function getcallCost() {
        return theCallCost;
    }

    // function setcallCost(callCost) {
    //     theCallCost = callCost;
    // }

    function getsmsCost() {
        return theSmsCost;
    }

    // function setsmsCost(smsCost) {
    //     theSmsCost = smsCost;
    // }

    function getTotalCost() {
        return theTotalCost;
    }

    function TotalCost() {
        theTotalCost = TotalCost;
    }

    function calcBill(bill) {
        var items = bill.trim();

        if (items === 'call') {
            theCallCost += 2.75;
            theTotalCost += 2.75;
        } else if (items === 'sms') {
            theSmsCost += 0.75;
            theTotalCost += 0.75;
        }
    }
    return {
        getcallCost,
        getsmsCost,
        getTotalCost,
        TotalCost,
        // setcallCost,
        // setsmsCost,
        // setTotalCost,
        calcBill
    }
}