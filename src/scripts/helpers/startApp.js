import { getCustomers } from '../../api/customerData';
import domBuilder from '../components/domBuilder';
import renderNav from '../components/navBar';
import revEvent from '../events/revEvent';
import { showCustomers } from '../components/pages/customers';
import domEvents from '../events/domEvents';

const startApp = () => {
  domBuilder();
  renderNav();
  revEvent();
  domEvents();

  getCustomers().then((customerArray) => showCustomers(customerArray));
};

export default startApp;
