// import { getSingleOrder } from '../../api/orderData';
import addItemForm from '../components/forms/addItemForm';
import { getOrderItems } from '../../api/orderData';
// import closeOrderForm from '../components/forms/closeOrderForm';

const btnEvt = () => {
  document.querySelector('#view').addEventListener('click', (e) => {
    if (e.target.id.includes('addItemBtn')) {
      addItemForm();
    }
    if (e.target.id.includes('payBtn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getOrderItems(firebaseKey).then((orderObject) => console.warn(orderObject));
    }
  });
};
export default btnEvt;
