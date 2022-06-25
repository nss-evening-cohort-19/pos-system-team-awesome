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
// const deleteOrderItems = (orderId) => new Promise((resolve, reject) => {
//   getOrderItems(orderId).then((items) => {
//     const deleteItemPromises = items.map((item) = deleteMenuItem(item.firebaseKey));

//     Promise.all(deleteItemPromises).then(() => {
//       deleteOrders(orderId).then(resolve);
//     });
//   }).catch((error) => reject(error));
// });

export { orderDetail, getRevenueOrders };
