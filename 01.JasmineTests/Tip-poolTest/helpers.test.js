describe('payment data of helpers', function(){
    beforeEach(function () {
        billAmtInput.value = 100
        tipAmtInput.value = 20
        submitPaymentInfo()
   })
    
    it ('should sum the payments',function(){
        expect(sumPaymentTotal('billAmt')).toEqual(100)
        billAmtInput.value = 150
        tipAmtInput.value = 15
    
        submitPaymentInfo()
    
        expect(sumPaymentTotal('billAmt')).toEqual(250)
        
    })

    it('should calculate tip precentage', function (){
       expect(calculateTipPercent(100,20)).toEqual(20) 
    })
    it('should append table data to a table row', function(){
        let newTr = document.createElement('tr')

        appendTd(newTr, 'Test')
        expect(newTr.children.length).toEqual(1)
        expect(newTr.firstChild.innerHTML).toEqual('Test')
    })  

    afterEach(function(){
        billAmtInput.value = ''
        tipAmtInput.value = ''
        paymentTbody.innerHTML = ''
        summaryTds[1].innerHTML = ''
        summaryTds[2].innerHTML = ''
        serverTbody.innerHTML = ''
        allPayments = {}
        paymentId = 0;
    })   
})
