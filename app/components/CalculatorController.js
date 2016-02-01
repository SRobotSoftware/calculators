app.controller('CalculatorController', function () {

    this.test = true;
    this.km = 10;
    this.miles = (this.km * 0.6214).toFixed(4);
    this.df = 32;
    this.dc = (this.df - 32) / 1.8;
    this.kg = 1;
    this.lb = (this.kg * 2.2046).toFixed(4);
    this.in = 12;
    this.ft = (this.in / 12).toFixed(4);
    this.weight = 100;
    this.height = 72;
    this.bmi = ((this.weight / (Math.pow(this.height,2))) * 703).toFixed(4);
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
        this.bmi = ((this.weight / (Math.pow(this.height,2))) * 703).toFixed(4);
    }
    this.principal = 1000;
    this.interest = 12.5;
    this.nPayments = 1;
    this.totalBalance = 0;
    this.calcPayments = function () {
        this.interest /= 100;
        this.totalBalance = Math.round(this.principal*Math.pow(1+this.interest,this.nPayments));
        /*
        B = P(1+r)^n

        B final balance
        P principal amount
        r rate of interest per period
        n number of interest periods
        */
    }


});