import signIn from '../../helpers/auth/signIn';
import pzaSVG from '../logos/pza.svg';
import pzaPNG from '../logos/pza.png';
import logoSVG from '../logos/logo.svg';
import logoPNG from '../logos/logo.png';
import renderToDOM from '../../helpers/renderToDom';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = `
    <div id="loginArea" class="logIn">
    <img src="${pzaSVG}" onerror="this.onerror=null; this.src='${pzaPNG}'" class="pza">
    <img src="${logoSVG}" onerror="this.onerror=null; this.src='${logoPNG}'" class="logo">
    <div id="btnArea"></div>
    </div>
  `;
  renderToDOM('#app', domString);
  const authBtn = '<button id="google-auth" class="btn btn-danger loginBtn" background-color="#d81258">Get Started</button>';
  document.querySelector('#btnArea').innerHTML = authBtn;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
