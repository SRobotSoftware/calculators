app.controller('CalculatorController', function () {

    this.test = true;
    this.km = 1;
    this.miles = this.km * 0.6214;
    this.df = 1;
    this.dc = this.df - 32 / 1.8;
    this.kg = 1;
    this.lb = this.kg * 2.2046;
    this.in = 12;
    this.ft = this.in / 12;
    this.weight = 100;
    this.height = 72;
    this.bmi = (this.weight / (this.height ^ 2)) * 703;
    this.calcMiles = function () {
        this.miles = (this.km * 0.6214).toFixed(4);
    }
    this.calcKM = function () {
        this.km = (this.miles / 0.6214).toFixed(4);
    }
    this.calcDC = function () {
        this.dc = (this.df - 32) / 1.8;
    }
    this.calcDF = function () {
        this.df = (this.dc * 1.8) + 32;
    }
    this.calcKG = function () {
        this.kg = (this.lb / 2.2046).toFixed(4);
    }
    this.calcLB = function () {
        this.lb = (this.kg * 2.2046).toFixed(4);
    }
    this.calcIN = function () {
        this.in = (this.ft * 12).toFixed(4);
    }
    this.calcFT = function () {
        this.ft = (this.in / 12).toFixed(4);
    }
    this.calcBMI = function () {
        this.bmi = ((this.weight / (this.height ^ 2)) * 703).toFixed(4);
    }
    this.loanAmount = 1000;
    this.interest = 12.5;
    this.roI = 0;
    this.nPayments = 12;
    this.paymentAmount = 0;
    this.calcPayments = function () {
        
        if (this.roI === 0) {
            // monthly
            this.roI =  this.interest / 1200;
        }
        
        this.paymentAmount = (this.roI * this.loanAmount) / (1 - (1 + this.roI) - this.nPayments);
        /*
        P = ( r * A ) / ( 1 - (1+r)-N) 
        Where, 
        P = Payment Amount 
        A = Loan Amount  
        r = Rate of Interest 
        (compounded) 
        N = Number of Payments  Rate of Interest Compounded is,  
        If Monthly,  
        r = i / 1200 and N = n * 12 
        If Quarterly,  
        r = i / 400 and N = n * 4 
        If Half yearly,  
        r = i / 200 and N = n * 2 
        If Yearly,  r = i / 100 and N = n
        */
    }


});