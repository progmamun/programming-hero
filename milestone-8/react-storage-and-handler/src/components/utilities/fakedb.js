// use local storage to manage cart data
const addToDb = id => {
  let shoppingCart = {};

  // get the shopping cart
  const storedCart = localStorage.getItem('.shopping-cart');
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  } else {
    shoppingCart = {};
  }

  // add quantity
  const quantity = localStorage.getItem(id);
  if (quantity) {
    console.log('already exists');
    const newQuantity = parseInt(quantity) + 1;
    localStorage.setItem(id, newQuantity);
  } else {
    console.log('new item');
    localStorage.setItem(id, 1);
  }
  localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
};

export { addToDb };
