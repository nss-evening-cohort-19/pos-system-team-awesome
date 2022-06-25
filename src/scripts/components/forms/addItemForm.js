import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const addItemForm = (obj = {}, orderId) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-item--${obj.firebaseKey}--${orderId}` : `submit-item--${orderId}`}" class="mb-4>
  <div class="mb-3">
    <label for="itemName" class="form-label">Item Name</label>
    <input type="text" class="form-control" id="item-name" aria-describedby="item-name" value="${obj.itemName || ''}">
  </div>
  <div class="mb-3">
    <label for="itemPrice" class="form-label">Item Price</label>
    <input type="number" class="form-control" id="item-price" value="${obj.itemPrice || ''}">
  </div>
  <div class="mb-3">
    <label for="itemDescription" class="form-label">Item Description</label>
    <input type="text" class="form-control" id="item-description" value="${obj.itemDescription || ''}">
 </div>
 <div class="mb-3">
    <label for="itemCategory" class="form-label">Item Category</label>
    <input type="text" class="form-control" id="item-category" value="${obj.itemCategory || ''}">
 </div>
 <button type="submit" class="btn btn-primary">Add/Edit Item</button>
 </form>`;
  renderToDOM('#main-container', domString);
};
export default addItemForm;
