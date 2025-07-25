// Total Items Tax using Interpolation

/*
    Things I Ordered:
    2 Baskeballs = 20.95$ each (4.99$ Shipping)
    2 T-Shirts = 7.99$ each (4.99$ Shipping)
*/

console.log(`Estimated tax (10%): $${Math.round((2095 * 2 + 799 * 2 + 499 + 499 ) * 0.1) / 100}`);