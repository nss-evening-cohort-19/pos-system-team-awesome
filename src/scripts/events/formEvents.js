import {
  createOrder,
  updateOrder
} from '../../api/orderData';
import {
  createNewMenuItem,
  updateMenuItem,
} from '../../api/menuData';
import viewOrder from '../components/viewOrderDetails';
import { orderDetail } from '../../api/mergedData';
import { viewOrders } from '../components/orderCards';

const formEvt = (tipAmount, total, paymentType) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-order')) {
      const orderObject = {
        callIn: document.querySelector('#call-in').value,
        customerPhone: document.querySelector('#customer-phone').value,
        customerEmail: document.querySelector('#customer-email').value,
        orderName: document.querySelector('#order-name').value,
        isOpen: document.querySelector('#is-open').value,
        tipAmount,
        timeEntry: new Date().toLocaleString(),
        total,
        paymentType,

      };
      createOrder(orderObject).then((ordersArray) => viewOrders(ordersArray));
    }
    if (e.target.id.includes('update-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      const orderObject = {
        callIn: document.querySelector('#call-in').value,
        customerPhone: document.querySelector('#customer-phone').value,
        customerEmail: document.querySelector('#customer-email').value,
        orderName: document.querySelector('#order-name').value,
        isOpen: document.querySelector('#is-open').value,
        firebaseKey
      };

      updateOrder(orderObject).then(viewOrders);
    }
    if (e.target.id.includes('submit-item')) {
      const [, orderId] = e.target.id.split('--');
      const itemObject = {
        itemName: document.querySelector('#item-name').value,
        itemPrice: document.querySelector('#item-price').value,
        itemDescription: document.querySelector('#item-description').value,
        orderId,
        itemCategory: document.querySelector('#item-category').value
      };
      // createNewMenuItem(itemObject)
      //   .then(() => orderDetail(itemObject.orderId).then((orderObject) => viewOrder(orderObject)));
      createNewMenuItem(itemObject)
        .then(() => orderDetail(itemObject).then((orderObj) => console.warn(orderObj)));
    }

    if (e.target.id.includes('update-item')) {
      const [, firebasekey] = e.target.id.split('--');
      const itemObject = {
        itemName: document.querySelector('#item-name').value,
        itemPrice: document.querySelector('#item-price').value,
        itemDescription: document.querySelector('#item-description').value,
        itemCategory: document.querySelector('#item-category').value,
        firebasekey
      };
      updateMenuItem(itemObject)
        .then(() => orderDetail(itemObject.orderId).then((orderObject) => viewOrder(orderObject)));
    }
  });
};
export default formEvt;
