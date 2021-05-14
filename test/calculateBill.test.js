describe('The calculate bill factory function', function() {
    it('should be able to return the sms cost', function() {

        assert.equal(totalBill('sms, sms, sms'), 2.25);
    })

    it('should be able to return the call cost', function() {

        assert.equal(totalBill('call, call, call'), 8.25);
    })
    it('should be able to return the call and sms cost ', function() {

        assert.equal(totalBill('call, call, call, sms, sms, call'), 12.5);
    })
    it('should return 0 when they is nothing added you', function() {

        assert.equal(totalBill(''), 0);
    })
})