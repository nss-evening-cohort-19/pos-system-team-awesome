import renderToDOM from '../helpers/renderToDom';
import pzaSVG from './logos/pza.svg';
import pzaPNG from './logos/pza.png';

const renderNav = () => {
  const domString = `<nav class="navbar navbar-expand-sm">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
        <img id="logo" src="${pzaSVG}" onerror="this.onerror=null; this.src='${pzaPNG}'" height="50rem">
        </a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" id="create-order" href="#">Create an Order</a>
            </li>
            <li>
              <a class="nav-link" id="view-orders" href="#">View Orders</a>
            </li>
            <li>
              <a class="nav-link" id="revLink" href="#">View Revenue</a>
            </li>
          <form class="d-flex" role="search">
          <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Search Orders" aria-label="Search">
        </div>
          </form>
          <li id="logout"></li>
          </ul>
        </div>
      </div>
    </nav>`;
  renderToDOM('#navigation', domString);
};

export default renderNav;
