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
  <p>Total Tips: $${obj[5]}</p>
  <p>Total Call in Orders: ${obj[2].callIn}</p>
  <p>Total Walk in Orders: ${obj[2].walkIn}</p>
  </div>
  <div class="paymentTypes">
  <p>Total Payment Types:</p>
  <p>Cash - ${obj[3].cash}</p>
  <p>Credit - ${obj[3].credit}</p>
  <p>Mobile - ${obj[3].mobile}</p>
  </div>
  </div>
  `;
  renderToDOM('#main-container', domString);
};
getRevenue();

export default renderRevenue;
