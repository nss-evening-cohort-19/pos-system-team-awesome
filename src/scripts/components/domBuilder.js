import renderToDOM from '../helpers/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container"></div>`;

  renderToDOM('#app', domString);
};

export default domBuilder;
