import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";
//import "../data/backend-practice.js";
//import "../data/cart-class.js";
import { loadCart } from "../data/cart.js";

Promise.all([
  new Promise((resolve) => {
    loadProducts(() => {
      resolve("value1");
    });
  }),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })
]).then((values) => {
  console.log(values)
  renderOrderSummary()
  renderPaymentSummary()
})
/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve();
  });
})
  .then(() => {
    return new Promise((resolve) => {
      loadCart(() => {
        resolve();
      });
    });
  })
  .then(() => {
    renderOrderSummary();
    renderPaymentSummary();
  });
  */

// loadProducts(() => {
//   renderOrderSummary();
//   renderPaymentSummary();
// })
