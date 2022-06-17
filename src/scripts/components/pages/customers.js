import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const emptyCustomers = () => {
  const domString = '<h1>No customers</h1>';
  renderToDOM('#main-container', domString);
};

const showCustomers = (array) => {
  clearDom();

  if (array.length) {
    let domString = '';
    array.forEach((customer) => {
      domString += `<div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${customer.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${customer.phoneNumber}</h6>
        <h6 class="card-subtitle mb-2 text-muted">${customer.email}</h6>
        <i class="btn btn-success fas fa-eye" id="view-customer-btn--${customer.firebaseKey}"></i>
        <i class="fas fa-edit btn btn-info" id="update-customer--${customer.firebaseKey}"></i>
        <i class="btn btn-danger fas fa-trash-alt" id="delete-customer-btn--${customer.firebaseKey}"></i>
      </div>
    </div>`;
    });
    renderToDOM('#main-container', domString);
  } else {
    emptyCustomers();
  }
};

export { emptyCustomers, showCustomers };
