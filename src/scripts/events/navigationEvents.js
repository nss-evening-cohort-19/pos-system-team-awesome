import signOut from '../helpers/auth/signOut';
import renderRevenue from '../components/showRevenue';
import homePage from '../components/pages/homepage';
import { getOrders } from '../../api/orderData';
import addOrderForm from '../components/forms/createOrderForm';
import { noOrders, viewOrders } from '../components/orderCards';

const navEvt = () => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('logout')) {
      signOut();
    }
    if (e.target.id.includes('revLink')) {
      renderRevenue();
    }
    if (e.target.id.includes('create-order')) {
      addOrderForm();
    }
    if (e.target.id.includes('logo')) {
      homePage();
    }
    if (e.target.id.includes('view-orders')) {
      getOrders().then((array) => viewOrders(array));
    }
  });
  document.querySelector('#navigation').addEventListener('keyup', (e) => {
    const searchInput = e.target.value.toLowerCase();
    getOrders().then((orderArray) => {
      const searchArray = [];
      // eslint-disable-next-line no-restricted-syntax
      for (const order of orderArray) {
        if (order.orderName.toLowerCase().includes(searchInput)) {
          searchArray.push(order);
        }
        if (searchArray.length) {
          viewOrders(searchArray);
        } else {
          noOrders();
        }
      }
    });
  });
};

export default navEvt;
