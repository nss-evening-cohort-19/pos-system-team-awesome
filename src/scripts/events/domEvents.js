import { deleteCustomer, getCustomers } from '../../api/customerData';
import { showCustomers } from '../components/pages/customers';

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
  });
};

export default domEvents;
