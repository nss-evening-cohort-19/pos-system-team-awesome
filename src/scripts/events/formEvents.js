import {
  createOrder,
  updateOrder
} from '../../api/orderData';
import {
  createNewMenuItem,
  updateMenuItem,
} from '../../api/menuData';
import viewOrder from '../components/viewOrderDetails';
import orderDetail from '../../api/mergedData';
import { viewOrders } from '../components/orderCards';

const formEvt = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-order')) {
      const orderObject = {
        callIn: document.querySelector('#call-in').value,
        customerPhone: document.querySelector('#customer-phone').value,
        customerEmail: document.querySelector('#customer-email').value,
        orderName: document.querySelector('#order-name').value,
        date: new Date().toLocaleString(),
        isOpen: document.querySelector('#is-open').value
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
      const [, firebaseKey] = e.target.id.split('--');
      const itemObject = {
        itemName: document.querySelector('#item-name').value,
        itemPrice: document.querySelector('#item-price').value,
        itemDescription: document.querySelector('#item-description').value,
        orderId: firebaseKey,
        itemCategory: document.querySelector('#item-category').value

      };
      createNewMenuItem(itemObject)
        .then((itemArray) => {
          itemArray.forEach((item) => {
            if (firebaseKey === item.orderId) {
              orderDetail(itemObject.orderId).then((orderObject) => viewOrder(orderObject));
            } else {
              console.warn('else');
            }
          });
        });
    }

    if (e.target.id.includes('update-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      const itemObject = {
        itemName: document.querySelector('#item-name').value,
        itemPrice: document.querySelector('#item-price').value,
        itemDescription: document.querySelector('#item-description').value,
        itemCategory: document.querySelector('#item-category').value,
        firebaseKey
      };
      updateMenuItem(itemObject)
        .then((itemArray) => {
          itemArray.forEach((item) => {
            if (firebaseKey === item.firebaseKey) {
              orderDetail(item.orderId).then((orderObject) => viewOrder(orderObject));
            } else {
              console.warn('else');
            }
          });
        });
    }
  });
};
export default formEvt;
