function filterByCategory(products) {
  return function (category) {
    return products.filter(function (product) {
      return product.category === category;
    });
  };
}

var products = [
    { name: "Car", category: "Toy" },
    { name: "Dolls", category: "Toy" },
    { name: "Hat", category: "Accessories" },
    { name: "Sunglasses", category: "Accessories" },
  ];

  var clothingProducts = filterByCategory(products)("Toy");

console.log(clothingProducts);


