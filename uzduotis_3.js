"use strict";

function normalizeProducts(products) {
  return products.map(function (p) {
    return p.trim().replace(/-/g, " ").toLowerCase();
  });
}

const products = [
  "  Super PHONE 3000 ",
  "mega-laptop",
  "WiFi ROUTER",
  "portable-charger ",
  "USB cable",
];

console.log(normalizeProducts(products));
