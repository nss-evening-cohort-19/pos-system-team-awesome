/* eslint-disable no-param-reassign */
const revMath = (obj) => {
  const itemTotals = obj.itemPrice;

  itemTotals.forEach((price) => {
    // eslint-disable-next-line no-param-reassign
    // eslint-disable-next-line no-unused-vars
    price += 0;
  });
  console.warn(obj);
};

export default revMath();
