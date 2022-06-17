import clearDom from '../helpers/clearDom';
import renderToDOM from '../helpers/renderToDom';

const renderRevenue = () => {
  clearDom();
  const domString = `
  <h2>Revenue</h2>
  <h1>TOTAL REVENUE: {Interpolated Data of ALL totals}</h1>
  <p>Date Range:</p>
  <p>{Interpolated First Order's Date} - {Interpolated Last Order's Date}</p>
  <p>Total Tips: {Interpolated Total Tip amount from all tips}</p>
  <p>Total Call in Orders: {Interpolated Number of Call in Orders}</p>
  <p>Total Walk in Orders: {Interpolated Number of Walk in Orders}</p>
  <p>Total Payment Types:</p>
  <p>Cash: {Interpolated Number of times Cash was used}</p>
  <p>Credit: {Interpolated Number of times Credit was used</p>
  <p>Mobile: {Interpolated Number of times Mobile was used</p>
  `;

  renderToDOM('#app', domString);
};

export default renderRevenue;
