import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const addItemForm = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-item--${obj.firebaseKey}` : 'submit-item'}" class="mb-4>
  <div class="mb-3">
    <label for="itemName" class="form-label">Item Name</label>
    <input type="text" class="form-control" id="item-name" aria-describedby="item-name">
  </div>
  <div class="mb-3">
    <label for="itemPrice" class="form-label">Item Price</label>
    <input type="number" class="form-control" id="item-price">
  </div>

  <button type="submit" class="btn btn-primary">Add/Edit Item</button>
</form>`;
  renderToDOM('#main-container', domString);
};
export default addItemForm;