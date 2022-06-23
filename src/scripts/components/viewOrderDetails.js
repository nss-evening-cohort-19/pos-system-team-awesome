import clearDom from '../helpers/clearDom';
import renderToDOM from '../helpers/renderToDom';

const noItems = () => {
  const itemString = '<h1>No Items</h1>';
  renderToDOM('#main-container', itemString);
};
const viewOrder = (obj) => {
  clearDom();
  const boxString = '<div id="cardbox" class="box"></div>';
  renderToDOM('#main-container', boxString);
  let domString = ' ';

  domString = `<h1>TOTAL: </h1><button type="button" class="btn btn-success" id="addItemBtn--${obj.firebaseKey}">Add item</button><button type="button" class="btn btn-primary" id="payBtn">Go to payment</button>`;
  renderToDOM('#view', domString);

  if (obj.itemObject.length) {
    let itemString = ' ';
    obj.itemObject.forEach((item) => {
      itemString += `
    <div class="card mt-5 d-flex flex-wrap">
      <div class="d-flex flex-column">
        <h2>${item.itemName}</h2>
        <h3>${item.itemPrice}</h3>
        <div>
          <i id="edit-item--${item.firebasekey}" class="fas fa-edit btn btn-info"></i>
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
