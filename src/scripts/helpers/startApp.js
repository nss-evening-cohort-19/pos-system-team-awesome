import domBuilder from '../components/domBuilder';
import renderNav from '../components/navBar';
import navEvt from '../events/navigationEvents';
import domEvents from '../events/domEvents';
import homePage from '../components/pages/homepage';
import formEvt from '../events/formEvents';
import btnEvt from '../events/buttonEvents';

const startApp = (user) => {
  domBuilder();
  renderNav();
  navEvt();
  homePage(user);
  formEvt();
  domEvents();
  btnEvt();
};

export default startApp;
