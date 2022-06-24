import clearDom from '../helpers/clearDom';
import renderToDOM from '../helpers/renderToDom';
import { getRevenue, getRevOrders } from '../../api/revenueData';
// import { updateRevenue } from '../../api/revenueData';

const renderRevenue = (obj) => {
  clearDom();
  const thisObj = obj[0];
  const domString = `
  <div class="revPage">
  <div class="revHead">
  <h3>Revenue</h3>
  <h1 id="totalRevH1">TOTAL REVENUE: $${thisObj.totalRevenue}</h1>
  </div>
  <div class="dates">
  <p>Date Range:</p>
  <p class="rangeOfDates">${thisObj.dateOrdered.earliestDate} - ${thisObj.dateOrdered.latestDate}</p>
  </div>
  <div class="extras">
  <p>Total Tips: $${thisObj.totalTips}</p>
  <p>Total Call in Orders: ${thisObj.orderType.callIn}</p>
  <p>Total Walk in Orders: ${thisObj.orderType.walkIn}</p>
  </div>
  <div class="paymentTypes">
  <p>Total Payment Types:</p>
  <p>Cash - ${thisObj.paymentType.cash}</p>
  <p>Credit - ${thisObj.paymentType.credit}</p>
  <p>Mobile - ${thisObj.paymentType.mobile}</p>
  </div>
  </div>
  `;
  renderToDOM('#main-container', domString);
};
getRevenue();

const addRevDetails = (revObj) => {
  console.error(revObj);
};
getRevOrders();
export { renderRevenue, addRevDetails };
