import renderToDOM from '../helpers/renderToDom';
import clearDom from '../helpers/clearDom';

const noOrders = () => {
  document.querySelector('#main-container').innerHTML = '<h1>No Orders</h1>';
};

const viewOrders = (array) => {
  clearDom();
  const domString = '<div id="card-container" class="cards"></div><div id="closed-container" class="closed">';
  renderToDOM('#main-container', domString);

  if (array.length) {
    let string = '';
    array.forEach((order) => {
      if (order.isOpen === 'true') {
        string += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5>${order.orderName}</h5>
          <p id="customer-phone">${order.customerPhone}</p>
          <p id="customer-email">${order.customerEmail}</p>
          <p id="call-in">${order.callIn}</p>
          <hr>
          <i class="btn btn-success fas fa-eye" id="view-orderdetails-btn--${order.firebaseKey}"></i>
          <i class="fas fa-edit btn btn-info" id="edit-order--${order.firebaseKey}"></i>
          <i class="btn btn-danger far fa-trash-alt" id="delete-card-btn--${order.firebaseKey}"></i>
        </div>
      </div>`;
        renderToDOM('#card-container', string);
      } else {
        string += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5>${order.orderName}</h5>
          <p id="customer-phone">${order.customerPhone}</p>
          <p id="customer-email">${order.customerEmail}</p>
          <p id="call-in">${order.callIn}</p>
          <hr>
        </div>
      </div>`;
        renderToDOM('#closed-container', string);
      }
    });
  } else {
    noOrders();
  }
};

export { noOrders, viewOrders };
