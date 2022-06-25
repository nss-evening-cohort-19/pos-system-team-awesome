import { getOrderItems, getSingleOrder } from './orderData';

const orderDetail = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleOrder(firebaseKey)
    .then((orderObject) => {
      getOrderItems(firebaseKey)
        .then((itemObject) => {
          resolve({ itemObject, ...orderObject });
        });
    }).catch((error) => reject(error));
});
const getRevenueOrders = (isOpen) => new Promise((resolve, reject) => {
  getOrderItems(isOpen)
    .then((orderObject) => {
      getOrderItems(orderObject.isOpen);
    }).catch(reject);
});

export { orderDetail, getRevenueOrders };
