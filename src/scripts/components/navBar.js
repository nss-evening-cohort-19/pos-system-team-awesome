import renderToDOM from '../helpers/renderToDom';

const renderNav = () => {
  const domString = `<nav class="navbar navbar-expand-md bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Logo</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">Create an Order</a>
            </li>
            <li>
              <a class="nav-link" href="#">View Orders</a>
            </li> 
            <li>
              <a class="nav-link" id="revLink" href="#">View Revenue</a>
            </li>           
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search Orders" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
          <li id="logout"></li>
          </ul> 
        </div>
      </div>
    </nav>`;
  renderToDOM('#navigation', domString);
};

export default renderNav;
