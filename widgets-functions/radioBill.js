function radioBill() {
    var theCallCost = 0;
    var theSmsCost = 0;
    var theTotalCost = 0;


    function callCost() {
        return theCallCost;
    }

    function smsCost() {
        return theSmsCost;
    }

    function TotalCost() {
        return theTotalCost;
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
        callCost,
        smsCost,
        TotalCost,
        calcBill
    }
}