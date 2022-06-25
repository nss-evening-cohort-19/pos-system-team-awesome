import { updateRevenue } from '../../api/revenueData';
import { renderRevenue } from '../components/showRevenue';

const revEvent = (e) => {
  document.querySelector('#revLink').addEventListener('click', () => {
    renderRevenue();
  });
  if (e.target.id.includes('revPage')) {
    const [, firebasekey] = e.target.id.split('--');
    const revObject = {
      itemName: document.querySelector('#item-name').value,
      itemPrice: document.querySelector('#item-price').value,
      itemDescription: document.querySelector('#item-description').value,
      itemCategory: document.querySelector('#item-category').value,
      firebasekey
    };
    updateRevenue(revObject).then((orderObject) => renderRevenue(orderObject));
  }
};

export default revEvent;
