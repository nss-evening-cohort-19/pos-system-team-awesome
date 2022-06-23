import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const closeOrderForm = () => {
  clearDom();
  const domString = `
  <h3>Your Order Total: $$ {}</h3>
  <form id="closeOrder">
    <label for="payment-type" class="form-label">Payment Type</label>
    <select class="form-select" aria-label="Default select example">
      <option selected="">Select a payment type</option>
      <option value="1">Credit/Debit Card</option>
      <option value="2">Cash</option>
    </select>
    <div class="mb-3">
    <label for="tip-amount" class="form-label">Tip Amount</label>
    <input type="number" class="form-control" id="tip-amount" placeholder="$0.00">
  </div>
  <div class="col-12">
  <button class="btn btn-primary" type="submit">Close Order</button>
</div>
</form>`;
  renderToDOM('#main-container', domString);
};
export default closeOrderForm;
