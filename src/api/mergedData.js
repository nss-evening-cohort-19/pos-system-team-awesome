import { getOrderItems, getSingleOrder } from './orderData';

const orderDetail = (obj) => new Promise((resolve, reject) => {
  getSingleOrder(obj)
    .then((orderObject) => {
      getOrderItems(orderObject.firebaseKey)
        .then((itemObject) => {
          resolve({ itemObject, ...orderObject });
        });
    }).catch((error) => reject(error));
});
const getRevenueOrders = (isOpen) => new Promise((reject) => {
  getOrderItems(isOpen)
    .then((orderObject) => {
      getOrderItems(orderObject.isOpen);
    }).catch(reject);
});

export { orderDetail, getRevenueOrders };
