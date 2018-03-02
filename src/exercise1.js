const moment = require("moment");

const sortProduct = input => {
  // console.log(input.length);

  let product = { 
    name: "", 
    year: 0, 
    monthOfYear: 0, 
    quantity: 0 
  };

  let newArrayProduct = [];

  let ret2 = {};

  if(input.length) {

    input.forEach(element => {
      product = {
        name: element.name,
        year: moment(element.dateAdded).get("year"),
        monthOfYear: moment(element.dateAdded).get("month") + 1,
        quantity: element.quantity
      };
      newArrayProduct.push(product);
    });

    var ret = newArrayProduct.filter(value => value.year > 2000);

    ret.forEach(value => {
      ret2 = {
        [value.name]: [value],
      };
    });

    console.log(ret2);
    return ret2;
  } else {
    return [];
  }
  
};

module.exports = {
  title: "Exercise 1",
  run: sortProduct
};
