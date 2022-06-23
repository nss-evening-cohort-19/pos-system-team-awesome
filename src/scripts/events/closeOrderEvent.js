import { getOrderItems } from '../../api/orderData';
import { viewOrders } from '../components/orderCards';
// import closeOrderForm from '../components/forms/closeOrderForm';

const getOrderTotal = () => {
  document.querySelector('#view').addEventListener('click', (e) => {
    if (e.target.id.includes('payBtn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getOrderItems(firebaseKey).then((orderObject) => viewOrders(orderObject.itemObject));
    }
  });
};

export default getOrderTotal;
