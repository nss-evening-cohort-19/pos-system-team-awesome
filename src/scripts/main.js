import checkLoginStatus from './helpers/auth';
import 'bootstrap';
import '../styles/main.scss';

const init = () => {
  checkLoginStatus();
};

init();
