describe('The Radio bill factory function', function() {
    it('should return the call cost', function() {
        let textBill = txtBill();

        textBill.calcBill('call');
        textBill.calcBill('call');
        textBill.calcBill('call');


        assert.equal(8.25, textBill.getcallCost());

    });
    it('should return the sms cost', function() {
        let textBill = txtBill();

        textBill.calcBill('sms');

        assert.equal(0.75, textBill.getsmsCost());

    });
    it('should return the two sms and two call cost', function() {
        let textBill = txtBill();

        textBill.calcBill('sms');
        textBill.calcBill('sms');
        textBill.calcBill('call');
        textBill.calcBill('call');




        assert.equal(7.00, textBill.getTotalCost());

    });

});