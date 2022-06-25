// import { getSingleOrder } from '../../api/orderData';
import addItemForm from '../components/forms/addItemForm';
import { getOrderItems } from '../../api/orderData';
import closeOrderForm from '../components/forms/closeOrderForm';
// import { getRevenue } from '../../api/revenueData';
// import { renderRevenue } from '../components/showRevenue';

const btnEvt = () => {
  document.querySelector('#view').addEventListener('click', (e) => {
    if (e.target.id.includes('addItemBtn')) {
      const [, firebaseKey] = e.target.id.split('--');
      addItemForm(firebaseKey);
    }
    if (e.target.id.includes('payBtn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getOrderItems(firebaseKey).then((orderObject) => closeOrderForm(orderObject));
    }
    // if (e.target.id.includes('closeOutOrder')) {
    //   const [, firebaseKey] = e.target.id.split('--');
    //   renderRevenue();
    // }
  });
};
export default btnEvt;
