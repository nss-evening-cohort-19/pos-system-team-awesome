import clearDom from '../helpers/clearDom';
import renderToDOM from '../helpers/renderToDom';
import { getRevenue } from '../../api/revenueData';

const renderRevenue = (obj) => {
  clearDom();
  const domString = `
  <div class="revPage">
  <div class="revHead">
  <h3>Revenue</h3>
  <h1 id="totalRevH1">TOTAL REVENUE: $${obj[4]}</h1>
  </div>
  <div class="dates">
  <p>Date Range:</p>
  <p class="rangeOfDates">${obj[0].earliestDate} - ${obj[0].latestDate}</p>
  </div>
  <div class="extras">
  <p id= "total-tips">Total Tips: $${obj[5]}</p>
  <p id= "total-calls">Total Call in Orders: ${obj[2].callIn}</p>
  <p id= "total-walk-ins">Total Walk in Orders: ${obj[2].walkIn}</p>
  </div>
  <div class="paymentTypes">
  <p id="total-payment-types">Total Payment Types:</p>
  <p id="cash" >Cash - ${obj[3].cash}</p>
  <p id= "credit" >Credit - ${obj[3].credit}</p>
  <p id= "mobile">Mobile - ${obj[3].mobile}</p>
  </div>
  </div>
  `;
  renderToDOM('#main-container', domString);
};
getRevenue();

export default renderRevenue;
