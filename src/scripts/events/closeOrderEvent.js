import { getOrders, getOrderItems } from '../../api/orderData';
import { viewOrders } from '../components/orderCards';
// import closeOrderForm from '../components/forms/closeOrderForm';

const getOrderTotal = () => {
  document.querySelector('#view').addEventListener('click', (e) => {
    if (e.target.id.includes('payBtn')) {
      const [, firebaseKey] = e.target.id.split('--');
      const [, orderId] = e.target.id.split('--');
      getOrders(orderId).then((orderObject) => console.warn(orderObject));
      getOrderItems(firebaseKey).then((orderObject) => viewOrders(orderObject.itemObject));
    }
  });
};
const getRevTotals = () => {
  document.querySelector('#revLink').addEventListener('click', (e) => {
    if (e.target.id.includes('total-tips')) {
      const [, firebaseKey] = e.target.id.split('--');
      getOrderItems(firebaseKey);
    }
  });
};

export {
  getOrderTotal,
  getRevTotals
};
