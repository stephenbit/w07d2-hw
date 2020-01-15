import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      currencies: {
        name: null,
        rate: null
      },
      amountInput: null,
      selectedCurrency: null
    },
    mounted: function () {
      this.currencyFetch()
    },
    computed: {
      multiplyAmounts: function(){
      return 1
    },
    methods: {
      currencyFetch: function(){
        fetch('https://api.exchangeratesapi.io/latest')
        .then(req => req.json())
        .then(data => this.currencies = data.rates)
      }
      // write a method that multiplies

      )}
    }
  })
  });
