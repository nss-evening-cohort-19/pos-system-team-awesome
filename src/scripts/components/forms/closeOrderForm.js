import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const closeOrderForm = (obj) => {
  clearDom();
  const thisObj = obj;
  let startingTotal = 0;
  thisObj.forEach((item) => {
    startingTotal -= item.itemPrice;
  });
  const finalTotal = startingTotal * -1;

  const suggestedTip = (15 / 100) * finalTotal;
  const domString = `
  <h3>Your Order Total: $${finalTotal}</h3>
  <form id="closeOrder">
    <label for="payment-type" class="form-label">Payment Type</label>
    <select class="form-select" aria-label="Default select example">
      <option selected="">Select a payment type</option>
      <option value="1">Credit/Debit Card</option>
      <option value="2">Cash</option>
    </select>
    <div class="mb-3">
    <label for="tip-amount" class="form-label">Tip Amount</label>
    <input type="number" class="form-control" id="tip-amount" placeholder="${suggestedTip}">
  </div>
  <div class="col-12">
  <button id="closeOutOrder" class="btn btn-primary" type="submit">Close Order</button>
</div>
</form>`;
  renderToDOM('#main-container', domString);
};
export default closeOrderForm;
