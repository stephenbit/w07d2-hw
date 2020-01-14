import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      currencies: {
        name: "",
        rate: null
      },
      amountInput: null,
      selectedCurrency: null
      },
      mounted(){
        this.currencyFetch()
      },
    methods: {
      currencyFetch: function(){
        fetch('https://api.exchangeratesapi.io/latest')
        .then(req => req.json())
        .then(data => this.currencies = data.rates)
      },
      // write a method that multiplies
      multiplyAmounts: function(){
      this.amountInput *= selectedCurrency
    )}
  });
});
