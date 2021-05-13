// describe('The text bill factory function', function() {
//     it('should be able to set the call cost', function() {
//         let textBill = txtBill();

//         textBill.setcallCost(2.75);

//         assert.equal(2.75, textBill.getcallCost());

//     });
//     it('should be able to set the sms cost', function() {
//         let textBill = txtBill();

//         textBill.setsmsCost(0.75);
//         assert.equal(0.75, textBill.getsmsCost());
//     });
//     it('should be able to set the sms and call cost', function() {
//         let textBill = txtBill();

//         textBill.setcallCost(2.75);
//         textBill.setsmsCost(0.75);

//         assert.equal(2.75, textBill.getcallCost());
//         assert.equal(0.75, textBill.getsmsCost());
//     });
//     it('should be able to set the sms cost', function() {
//         let textBill = txtBill();

//         textBill.setTotalCost(0.75);
//         assert.equal(0, textBill.getTotalCost());
//     });
//});
describe('The text bill factory function', function() {
    it('should return R2.75 for one call cost', function() {
        let textBill = txtBill();

        textBill.calcBill('call');

        assert.equal(2.75, textBill.getcallCost());

    });
    it('should return R8.25 for three call cost', function() {
        let textBill = txtBill();

        textBill.calcBill('call');
        textBill.calcBill('call');
        textBill.calcBill('call');

        assert.equal(8.25, textBill.getTotalCost());

    });
    it('should return R3.50 for both call and sms cost', function() {
        let textBill = txtBill();

        textBill.calcBill('call');
        textBill.calcBill('sms');

        assert.equal(2.75, textBill.getcallCost());
        assert.equal(0.75, textBill.getsmsCost());
        assert.equal(3.50, textBill.getTotalCost());

    });
    it('should return R9.75 for call and sms cost', function() {
        let textBill = txtBill();

        textBill.calcBill('call');
        textBill.calcBill('call');
        textBill.calcBill('call');
        textBill.calcBill('sms');
        textBill.calcBill('sms');

        assert.equal(9.75, textBill.getTotalCost());

    });
})