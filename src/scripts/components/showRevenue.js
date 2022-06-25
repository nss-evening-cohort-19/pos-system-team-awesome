/* eslint-disable no-unused-vars */
import clearDom from '../helpers/clearDom';
import renderToDOM from '../helpers/renderToDom';
import { getRevenue, getRevOrders, updateRevenue } from '../../api/revenueData';

const renderRevenue = (obj) => {
  obj.forEach((item) => {
    if (item.firebaseKey === '-MiBsfuTafbEQ7eAULxV') {
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
      <p id="called">Total Call in Orders: </p>
      <p id="walked">Total Walk in Orders: </p>
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
    }
  });
};

const getTotalCalls = (array) => {
  let callIn = 0;
  let walkIn = 0;
  array.forEach((callObj) => {
    if (callObj.callIn === 'Call in') {
      callIn += 1;
    } else if (callObj.callIn === 'Walk in') {
      walkIn += 1;
    }
  });
  // console.error(callIn, walkIn);
  const callSpace = document.querySelector('#called');
  callSpace.innerHTML += callIn;
  const walkSpace = document.querySelector('#walked');
  walkSpace.innerHTML += walkIn;
};

getRevenue();
getRevOrders();
export { renderRevenue, getTotalCalls };
