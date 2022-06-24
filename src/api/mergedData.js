import { deleteMenuItem } from './menuData';
import { getOrderItems, getSingleOrder } from './orderData';

const orderDetail = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleOrder(firebaseKey)
    .then((orderObject) => {
      getOrderItems(orderObject.firebaseKey)
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
const deleteOrderItems = (orderId) => new Promise((resolve, reject) => {
  getOrderItems(orderId).then((itemsArr) => {
    const deleteItemPromises = itemsArr.map((item) = deleteMenuItem(item.firebaseKey));

    Promise.all(deleteItemPromises).then(() => {
      deleteSingleOrder(orderId).then(resolve);
    });
  }).catch((error) => reject(error));
});

export { orderDetail, getRevenueOrders, deleteOrderItems };
