import clearDom from '../helpers/clearDom';
import renderToDOM from '../helpers/renderToDom';

const noItems = () => {
  const itemString = '<h1>No Items</h1>';
  renderToDOM('#main-container', itemString);
};
const viewOrder = (obj) => {
  // All of this just to get the number to not be a negative...
  const thisObj = obj.itemObject;
  let startingTotal = 0;
  thisObj.forEach((item) => {
    startingTotal = -item.itemPrice;
  });
  const finalTotal = startingTotal * -1;
  // That was Fun
  clearDom();
  const boxString = '<div id="cardbox" class="box"></div>';
  renderToDOM('#main-container', boxString);
  let domString = ' ';

  domString = `<h1 id="orderTotal">Total: $${finalTotal}</h1><button type="button" class="btn btn-success" id="addItemBtn--${obj.firebaseKey}">Add item</button><button type="button" class="btn btn-primary" id="payBtn--${obj.firebaseKey}">Go to payment</button>`;
  renderToDOM('#view', domString);

  if (obj.itemObject.length) {
    let itemString = ' ';
    obj.itemObject.forEach((item) => {
      // console.error(item);
      itemString += `
    <div class="card mt-5 d-flex bg-light flex-wrap">
      <div class="card-body d-flex flex-column">
        <h3>$${item.itemPrice}</h3>
        <hr>
        <h5>${item.itemName}</h5>
        <sub>${item.itemCategory}</sub>
        <hr>
        <p>${item.itemDescription}</p>
        <div>
          <i id="edit-item--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
          <i id="delete-item--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        </div>
        </div>
      </div>`;
    });
    renderToDOM('#cardbox', itemString);
  } else {
    noItems();
  }
};
export default viewOrder;
