/* eslint-disable object-curly-newline */
import { deleteCustomer, getCustomers } from '../../api/customerData';
import { deleteOrders, getOrders, getSingleOrder } from '../../api/orderData';
import { viewOrders } from '../components/orderCards';
import addOrderForm from '../components/forms/createOrderForm';
import orderDetail from '../../api/mergedData';
import { showCustomers } from '../components/pages/customers';
import viewOrder from '../components/viewOrderDetails';
import renderRevenue from '../components/showRevenue';
import addItemForm from '../components/forms/addItemForm';
import { deleteMenuItem, getMenuItems, getSingleItem } from '../../api/menuData';
import { getRevenue } from '../../api/revenueData';

// Customer card events
const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-customer-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      deleteCustomer(firebaseKey).then(() => {
        getCustomers().then((customerArray) => {
          showCustomers(customerArray);
        });
      });
    }
    // orderCardEvents
    if (e.target.id.includes('delete-card-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      deleteOrders(firebaseKey).then(() => {
        getOrders().then((ordersArray) => {
          viewOrders(ordersArray);
        });
      });
    }
    if (e.target.id.includes('view-orderdetails-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      orderDetail(firebaseKey).then((itemOrderObject) => viewOrder(itemOrderObject));
    }
    if (e.target.id.includes('edit-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then((orderObject) => addOrderForm(orderObject));
    }
    if (e.target.id.includes('view-orders-dom')) {
      getOrders().then((array) => viewOrders(array));
    }
    if (e.target.id.includes('create-order-dom')) {
      addOrderForm();
    }
    if (e.target.id.includes('revenue-dom')) {
      getRevenue().then((array) => renderRevenue(array));
    }
    if (e.target.id.includes('edit-item')) {
      const [, firebasekey] = e.target.id.split('--');
      getSingleItem(firebasekey).then((itemObject) => addItemForm(itemObject));
    }
    if (e.target.id.includes('add-item')) {
      getMenuItems();
    }
    if (e.target.id.includes('delete-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      deleteMenuItem(firebaseKey).then(() => {
        orderDetail(firebaseKey).then(viewOrder);
      });
    }
  });
};

export default domEvents;
