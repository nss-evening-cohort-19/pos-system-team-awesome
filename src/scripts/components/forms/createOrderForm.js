import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const addOrderForm = (order = {}) => {
  clearDom();
  const domString = `
  <form id="${order.firebaseKey ? `update-order--${order.firebaseKey}` : 'submit-order'}" class="mb-4">
      <div class="mb-3">
        <label for="orderName" class="form-label">Order Name</label>
        <input type="text" class="form-control" id="order-name" aria-describedby="order-name" placeholder="Order Name" value="${order.orderName || ''}" required>
      </div>
      <div class="mb-3">
        <label for="customerPhone" class="form-label">Customer Phone Number</label>
        <input type="tel" class="form-control" id="customer-phone" aria-describedby="customer-phone" placeholder="555-555-5555" value="${order.customerPhone || ''}" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required>
      </div>
      <div class="mb-3">
      <label for="customerEmail" class="form-label">Customer Email</label>
      <input type="email" class="form-control" id="customer-email" aria-describedby="customer-email" placeholder="customer@email.com" value="${order.customerEmail || ''}" required>
    </div>
    <select class="form-select" aria-label="Default select example" id="call-in">
    <option selected>Order type</option>
    <option value="Call in">Call in</option>
    <option value="Walk in">Walk in</option>
  </select>
  <div class="form-check">
  <input class="form-check-input" type="checkbox" value=true id="is-open" checked>
  <label class="form-check-label" for="flexCheckChecked">
    Order open
  </label>
</div>
      <button type="submit" class="btn btn-primary">Create/Edit Order</button>
    </form>`;
  renderToDOM('#main-container', domString);
};
export default addOrderForm;
